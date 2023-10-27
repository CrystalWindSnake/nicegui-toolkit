from __future__ import annotations
import ast
from ast import AST
from pathlib import Path

from typing import TYPE_CHECKING, Any, Optional
from typing_extensions import Literal
from dataclasses import dataclass
from functools import lru_cache
import dis

if TYPE_CHECKING:
    from niceguiToolkit.utils.codeContext import _T_get_source_code_info

_T_call_name = Literal["style", "props", "classes"]


class CallerStemNodeVisitor(ast.NodeVisitor):
    def __init__(self, positions: dis.Positions) -> None:
        super().__init__()
        self.target = None
        self.positions = positions

    def visit(self, node: AST) -> Any:
        if (
            hasattr(node, "lineno")
            and node.lineno == self.positions.lineno
            and node.col_offset == self.positions.col_offset
            # and node.end_col_offset == self.info.end_col_offset
            # and isinstance(node, ast.Attribute)
            # and isinstance(node.value, ast.Name)
            # and node.attr == "element"
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
        if (
            self.check(node)
            # and isinstance(node, ast.Attribute)
            # # and isinstance(node.func, ast.Attribute)
            # and node.attr == self.target_attr
            # and isinstance(node.value, ast.Call)
            # and len(node.value.args) > 0
            # and isinstance(node.value.args[0], ast.Constant)
            # and isinstance(node.value.args[0].value, str)
        ):
            self.target = node.args[0]  # type: ignore
            return
        return super().visit(node)

    def get_target(self, node: Any) -> AST:
        self.target = None
        if self.check(node):
            return node.args[0]
        self.generic_visit(node)
        return self.target  # type: ignore


@lru_cache(5)
def _get_ast4file(file: Path):
    code_source = Path(file).read_text()
    ast_module = ast.parse(code_source)
    return code_source, ast_module


def clear_ast_code_cache():
    _get_ast4file.cache_clear()


@dataclass
class _T_ast_info:
    has: bool
    end_lineno: Optional[int] = None
    col_offset: int = 0
    end_col_offset: Optional[int] = None


def _get_ast_info(source_code: _T_get_source_code_info, call_name: _T_call_name):
    _, ast_md = _get_ast4file(source_code.callerSourceCodeFile)

    nv = CallerStemNodeVisitor(source_code.positions)
    link_call_stem_node = nv.get_target(ast_md)

    if link_call_stem_node is None:
        raise ValueError(f"not found target node.info={source_code}")

    nv = AttrStemNodeVisitor(call_name)
    attr_stem_node = nv.get_target(link_call_stem_node)

    if attr_stem_node:
        return _T_ast_info(
            True,
            attr_stem_node.end_lineno,
            attr_stem_node.col_offset,
            attr_stem_node.end_col_offset,
        )

    return _T_ast_info(False)


def get_call_content(source_code: _T_get_source_code_info, ast_info: _T_ast_info):
    if not ast_info.has:
        return ""
    code, _ = _get_ast4file(source_code.callerSourceCodeFile)
    lines = code.splitlines()
    assert ast_info.end_lineno
    return lines[ast_info.end_lineno - 1][
        ast_info.col_offset + 1 : ast_info.end_col_offset - 1
    ]


@dataclass
class _T_get_ast_infos:
    style: _T_ast_info
    classes: _T_ast_info
    props: _T_ast_info


def get_ast_infos(source_code: _T_get_source_code_info):
    infos = {
        attr: _get_ast_info(source_code, attr)  # type: ignore
        for attr in ["style", "classes", "props"]
    }

    return _T_get_ast_infos(**infos)
