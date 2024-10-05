from __future__ import annotations
import ast
from ast import AST
from pathlib import Path

from typing import Any, Optional
from dataclasses import dataclass
from functools import lru_cache


@dataclass
class _T_entry_point_position:
    lineno: int = 0
    end_lineno: Optional[int] = None
    frame_col_offset: int = 0
    frame_end_col_offset: Optional[int] = None


@dataclass
class _T_entry_point_info:
    file: Path
    positions: _T_entry_point_position
    end_col_diff: int = 0


@dataclass
class _T_get_ast4file_return:
    org_code: str
    ast_module: ast.Module


@dataclass
class _T_ast_info:
    has: bool
    lineno: int = 0
    end_lineno: int = 0
    col_offset: int = 0
    end_col_offset: int = 0


@lru_cache(maxsize=8)
def get_ast4file(file: Path):
    org_code = Path(file).read_text(encoding="utf8")
    ast_module = ast.parse(org_code)
    return _T_get_ast4file_return(org_code, ast_module)


def _get_entry_stem_node(entry_point: _T_entry_point_info):
    class CallerStemNodeVisitor(ast.NodeVisitor):
        def __init__(self, positions: _T_entry_point_position) -> None:
            super().__init__()
            self.target = None
            self.positions = positions

        def visit(self, node: AST) -> Any:
            if (
                hasattr(node, "lineno")
                and node.lineno == self.positions.lineno  # type: ignore
                and node.col_offset == self.positions.frame_col_offset  # type: ignore
            ):
                self.target = node
                return
            return super().visit(node)

        def get_target(self, node: Any) -> AST:
            self.target = None
            self.generic_visit(node)
            return self.target  # type: ignore

    ast_flie_info = get_ast4file(entry_point.file)

    nv = CallerStemNodeVisitor(entry_point.positions)
    link_call_stem_node = nv.get_target(ast_flie_info.ast_module)

    if link_call_stem_node is None:
        raise ValueError("not found target node")

    return link_call_stem_node


def _get_caller_node(entry_node: AST, call_name: str):
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
                return

            return super().visit(node)

        def get_target(self, node: Any) -> AST:
            self.target = None
            if self.check(node):
                self.target = node.args[0]
            self.generic_visit(node)
            return self.target  # type: ignore

    nv = AttrStemNodeVisitor(call_name)
    return nv.get_target(entry_node)


def get_ast_info(entry_point: _T_entry_point_info, call_name: str):
    link_call_stem_node = _get_entry_stem_node(entry_point)
    attr_stem_node = _get_caller_node(link_call_stem_node, call_name)

    if attr_stem_node:
        return _T_ast_info(
            True,
            attr_stem_node.lineno,  # type: ignore
            attr_stem_node.end_lineno,  # type: ignore
            attr_stem_node.col_offset - entry_point.end_col_diff,  # type: ignore
            attr_stem_node.end_col_offset - entry_point.end_col_diff,  # type: ignore
        )

    return _T_ast_info(False)


if __name__ == "__main__":
    # lineno=21, end_lineno=21, col_offset=4, end_col_offset=32 , end_col_diff=8
    position = _T_entry_point_position(
        lineno=22, end_lineno=22, frame_col_offset=4, frame_end_col_offset=77
    )

    entry_point = _T_entry_point_info(
        Path(r"E:\working\github\nicegui-toolkit\temps\temp.py"),
        position,
        end_col_diff=8,
    )

    ast_info = get_ast_info(entry_point, "style")

    # 52-24 = 28   39 - 28 = 11 , 51 - 8 = 43
    print(ast_info)
