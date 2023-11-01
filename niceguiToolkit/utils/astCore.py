from __future__ import annotations
import ast
from ast import AST
import inspect
from pathlib import Path

from typing import Any, List, Optional, Iterable, Set, Union
from typing_extensions import Literal
from dataclasses import dataclass
from functools import lru_cache
import niceguiToolkit.utils.executing as executing
from niceguiToolkit.utils.executing import Executing
from types import FrameType
from .common import replace_chinese_with_x


_T_call_name = Literal["style", "props", "classes"]


class CallerStemNodeVisitor(ast.NodeVisitor):
    def __init__(self, positions: _T_entry_point_position) -> None:
        super().__init__()
        self.target = None
        self.positions = positions

    def visit(self, node: AST) -> Any:
        if (
            hasattr(node, "lineno")
            and node.lineno == self.positions.lineno
            and node.col_offset == self.positions.col_offset
        ):
            self.target = node
            return
        return super().visit(node)

    def get_target(self, node: Any) -> AST:
        self.target = None
        self.generic_visit(node)
        return self.target  # type: ignore


class AttrStemNodeVisitor(ast.NodeVisitor):
    """从链式调用代码的 node 中，找到最靠左边并且符合调用函数名的node

    说明：

    """

    def __init__(self, attr: str) -> None:
        super().__init__()
        self.target = None
        self.target_attr = attr

    def check(self, node: AST):
        return (
            isinstance(node, ast.Call)
            and isinstance(node.func, ast.Attribute)
            and node.func.attr == self.target_attr
            and len(node.args) > 0
            and isinstance(node.args[0], ast.Constant)
            and isinstance(node.args[0].value, str)
        )

    def visit(self, node: AST) -> Any:
        if self.check(node):
            self.target = node.args[0]  # type: ignore

        return super().visit(node)

    def get_target(self, node: Any) -> AST:
        self.target = None
        if self.check(node):
            self.target = node.args[0]
        self.generic_visit(node)
        return self.target  # type: ignore


class EntryPointCallerNodeVisitor(ast.NodeVisitor):
    def __init__(self, name: str, lineno: int) -> None:
        super().__init__()
        self.target = None
        self.name = name
        self.lineno = lineno

    def visit(self, node: AST) -> Any:
        if (
            isinstance(node, ast.Call)
            and hasattr(node, "lineno")
            and node.lineno == self.lineno
            and isinstance(node.func, ast.Name)
            and node.func.id == self.name
        ):
            self.target = node
            return
        return super().visit(node)

    def get_target(self, node: Any) -> AST:
        self.target = None
        self.generic_visit(node)
        return self.target  # type: ignore


@dataclass
class _T_entry_point_position:
    lineno: int = 0
    end_lineno: Optional[int] = None
    col_offset: int = 0
    end_col_offset: Optional[int] = None


def get_entry_point_position(file: Path, func_name: str, lineno: int):
    cnv = EntryPointCallerNodeVisitor(func_name, lineno)

    ast_flie_info = _get_ast4file(file)

    result = cnv.get_target(ast_flie_info.ast_module)
    return _T_entry_point_position(
        lineno=result.lineno,
        end_lineno=result.end_lineno,
        col_offset=result.col_offset,
        end_col_offset=result.end_col_offset,
    )


@dataclass
class _T_get_ast4file_return:
    org_code: str
    replacement_code: str
    ast_module: ast.Module


@lru_cache(maxsize=None)
def _get_ast4file(file: Path):
    org_code = Path(file).read_text(encoding="utf8")
    replacement_code = replace_chinese_with_x(org_code)
    ast_module = ast.parse(replacement_code)
    return _T_get_ast4file_return(org_code, replacement_code, ast_module)


def clear_ast_code_cache():
    _get_ast4file.cache_clear()


@dataclass
class _T_ast_info:
    has: bool
    lineno: int = 0
    end_lineno: Optional[int] = None
    col_offset: int = 0
    end_col_offset: Optional[int] = None


def _get_ast_info(entry_point: _T_entry_point_info, call_name: _T_call_name):
    ast_flie_info = _get_ast4file(entry_point.file)

    nv = CallerStemNodeVisitor(entry_point.positions)
    link_call_stem_node = nv.get_target(ast_flie_info.ast_module)

    if link_call_stem_node is None:
        raise ValueError(f"not found target node")

    nv = AttrStemNodeVisitor(call_name)
    attr_stem_node = nv.get_target(link_call_stem_node)

    if attr_stem_node:
        return _T_ast_info(
            True,
            attr_stem_node.lineno,
            attr_stem_node.end_lineno,
            attr_stem_node.col_offset,
            attr_stem_node.end_col_offset,
        )

    return _T_ast_info(False)


def get_call_content(source_code: _T_source_code_info, ast_info: _T_ast_info):
    if not ast_info.has:
        return ""
    ast_flie_info = _get_ast4file(source_code.entry_point.file)
    lines = ast_flie_info.org_code.splitlines()
    assert ast_info.end_lineno
    assert ast_info.end_col_offset
    return lines[ast_info.end_lineno - 1][
        ast_info.col_offset + 1 : ast_info.end_col_offset - 1
    ]


@dataclass
class _T_apply_code_record:
    code: str
    lineno: int
    end_lineno: int
    col_offset: int
    end_col_offset: int


def _replace_str_by_position(content: str, replace: str, start: int, end: int):
    return f"{content[:start]}{replace}{content[end:]}"


def apply_code(source_code_file: Path, records: Iterable[_T_apply_code_record]):
    ast_flie_info = _get_ast4file(source_code_file)
    lines = ast_flie_info.org_code.splitlines()

    for record in sorted(records, key=lambda x: (x.lineno, x.col_offset), reverse=True):
        if record.end_lineno <= 0 or record.col_offset <= 0:
            continue

        lines[record.end_lineno - 1] = _replace_str_by_position(
            lines[record.end_lineno - 1],
            record.code,
            record.col_offset,
            record.end_col_offset,
        )

    return lines


@dataclass
class _T_get_ast_infos:
    style: _T_ast_info
    classes: _T_ast_info
    props: _T_ast_info


def get_ast_infos(source_code: _T_source_code_info):
    infos = {
        attr: _get_ast_info(source_code, attr)  # type: ignore
        for attr in ["style", "classes", "props"]
    }

    return _T_get_ast_infos(**infos)


@dataclass
class _T_entry_point_info:
    file: Path
    function_name: str
    positions: _T_entry_point_position


@dataclass(frozen=True)
class _T_source_code_info:
    entry_point: _T_entry_point_info
    style: _T_ast_info
    classes: _T_ast_info


_m_executing_for_filename_set: Set[str] = set()


def get_frame_info_match_file(targets: List[Path]) -> Optional[_T_entry_point_info]:
    targets_set = set(targets)
    cur_frame = inspect.currentframe()

    try:
        while cur_frame:
            exec_info = executing.Source.executing(cur_frame)
            file_path = Path(exec_info.source.filename)
            if file_path in targets_set:
                return _try_exce_info2_entry_info(exec_info, file_path)
            cur_frame = cur_frame.f_back

    finally:
        del cur_frame

    return None


def get_frame_info_exclude_dir(
    exclude_dirs: List[Path],
) -> Optional[_T_entry_point_info]:
    cur_frame = inspect.currentframe()

    try:
        while cur_frame:
            exec_info = executing.Source.executing(cur_frame)

            file_path = Path(exec_info.source.filename)
            if not file_path.exists():
                return None
            file_dir = file_path.parent

            all_exclude = all(
                not exclude in file_dir.parents for exclude in exclude_dirs
            )
            if all_exclude:
                return _try_exce_info2_entry_info(exec_info, file_path)
            cur_frame = cur_frame.f_back
    finally:
        del cur_frame

    return None


def get_source_info(entry_point_info: _T_entry_point_info) -> _T_source_code_info:
    style = _get_ast_info(entry_point_info, "style")
    classes = _get_ast_info(entry_point_info, "classes")

    return _T_source_code_info(entry_point_info, style, classes)


def _get_call_name(node: Union[ast.Name, ast.Attribute]):
    if isinstance(node, ast.Name):
        return node.id

    if isinstance(node, ast.Attribute):
        return node.attr


def _try_exce_info2_entry_info(exec_info: Executing, file_path: Path):
    if not file_path in _m_executing_for_filename_set:
        executing.Source.for_filename(str(file_path))
        _m_executing_for_filename_set.add(str(file_path))

        exec_info = executing.Source.executing(exec_info.frame)

    callNode: ast.Call = exec_info.node  # type: ignore
    if callNode is None:
        return
    funcNode = callNode.func
    positions = _T_entry_point_position(
        callNode.lineno,
        callNode.end_lineno,
        callNode.col_offset,
        callNode.end_col_offset,
    )
    return _T_entry_point_info(file_path, _get_call_name(funcNode), positions)  # type: ignore
