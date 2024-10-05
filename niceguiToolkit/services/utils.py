from __future__ import annotations
from typing import TYPE_CHECKING
from nicegui.element import Element


if TYPE_CHECKING:
    from niceguiToolkit.systems.caller_system import LazyCallerInfo


def save_source_code_info(element: Element, info: LazyCallerInfo):
    element.__dict__["__source_code_info__"] = info


def get_source_code_info(element: Element) -> LazyCallerInfo:
    return element.__dict__.get("__source_code_info__", None)
