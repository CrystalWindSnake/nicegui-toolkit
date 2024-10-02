from __future__ import annotations
from typing import TYPE_CHECKING
from nicegui.element import Element


if TYPE_CHECKING:
    from niceguiToolkit.systems.caller_system import CallerInfo


def create_props_code(element: Element):
    items = (
        name if isinstance(value, bool) else f"{name}={value}"
        for name, value in element._props.items()
    )

    return " ".join(items)


def create_style_code(element: Element):
    return " ".join(f"{name}:{value};" for name, value in element._style.items())


def save_source_code_info(element: Element, info: CallerInfo):
    element.__dict__["__source_code_info__"] = info


def get_source_code_info(element: Element) -> CallerInfo:
    return element.__dict__.get("__source_code_info__", None)
