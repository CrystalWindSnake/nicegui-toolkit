from __future__ import annotations
from pathlib import Path
from typing import TYPE_CHECKING, Dict, List, Optional
import subprocess
from nicegui.element import Element
from dataclasses import dataclass


if TYPE_CHECKING:
    from nicegui_toolkit.systems.caller_system import LazyCallerInfo


_SOURCE_CODE_INFO_FLAG = "__source_code_info__"
_STYLE_INFO_FLAG = "__style_info__"
_CLASSES_INFO_FLAG = "__classes_info__"


def jump_to_source_code(info: LazyCallerInfo, config):
    command = [
        "code",
        "--reuse-window",
        "--goto",
        f"{info.filename}:{info.lineno}:{info.end_col}",
    ]

    try:
        subprocess.Popen(command, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error opening file in VSCode: {e}")
    except FileNotFoundError:
        print(
            "VSCode CLI 'code' not found. Make sure VSCode is installed and the 'code' command is available in your PATH."
        )


def create_props_code(element: Element):
    items = (
        name if isinstance(value, bool) else f"{name}={value}"
        for name, value in element._props.items()
    )

    return " ".join(items)


def create_style_code(style_data: Dict[str, str]):
    return " ".join(f"{name}:{value};" for name, value in style_data.items())


def save_source_code_info(element: Element, info: LazyCallerInfo):
    element.__dict__[_SOURCE_CODE_INFO_FLAG] = info


def get_source_code_info(element: Element) -> LazyCallerInfo:
    return element.__dict__.get(_SOURCE_CODE_INFO_FLAG, None)


def save_style_info(element: Element, caller_info: LazyCallerInfo):
    if _STYLE_INFO_FLAG in element.__dict__:
        return

    sourc_code_info = get_source_code_info(element)

    if sourc_code_info.lineno == caller_info.lineno:
        element.__dict__[_STYLE_INFO_FLAG] = caller_info


def get_style_info(element: Element) -> Optional[LazyCallerInfo]:
    return element.__dict__.get(_STYLE_INFO_FLAG, None)


@dataclass
class ClassesInfo:
    add_classes_str: str
    caller_info: LazyCallerInfo


def save_classes_info(
    element: Element, add_classes_str: str, caller_info: LazyCallerInfo
):
    if _CLASSES_INFO_FLAG in element.__dict__:
        return

    sourc_code_info = get_source_code_info(element)

    if sourc_code_info.lineno == caller_info.lineno:
        element.__dict__[_CLASSES_INFO_FLAG] = ClassesInfo(add_classes_str, caller_info)


def get_classes_info(element: Element) -> Optional[ClassesInfo]:
    return element.__dict__.get(_CLASSES_INFO_FLAG, None)


def apply_style_code(element: Element, style_data: Dict[str, str]):
    caller_info = get_source_code_info(element)
    if caller_info is None:
        return

    style_info = get_style_info(element)

    if not style_info:
        if style_data:
            _Helper.create_style_method_call(
                caller_info,
                f'"{create_style_code(style_data)}"',
            )

    else:
        _Helper.replace_code(
            style_info.filename,
            style_info.lineno,
            style_info.end_lineno,
            style_info.start_col,
            style_info.end_col,
            f'"{create_style_code(style_data)}"',
        )


def apply_classes_code(element: Element, classes: List[str]):
    caller_info = get_source_code_info(element)
    if caller_info is None:
        return

    classes_info = get_classes_info(element)
    classes_code = " ".join(classes)

    if not classes_info:
        _Helper.create_classes_method_call(
            caller_info,
            f'"{classes_code}"',
        )
    else:
        classes_caller = classes_info.caller_info
        _Helper.replace_code(
            classes_caller.filename,
            classes_caller.lineno,
            classes_caller.end_lineno,
            classes_caller.start_col,
            classes_caller.end_col,
            f'"{classes_code}"',
        )


class _Helper:
    @staticmethod
    def replace_code(
        file: Path,
        start_lineno: int,
        end_lineno: int,
        start_col: int,
        end_col: int,
        new_code: str,
    ):
        with open(file, "r", encoding="utf-8") as f:
            lines = f.readlines()

        is_multiline_code = start_lineno != end_lineno

        new_lines = []
        for i, line in enumerate(lines):
            if i < start_lineno - 1:
                new_lines.append(line)
            elif i == start_lineno - 1:
                if is_multiline_code:
                    new_lines.append(line[:start_col] + "\n")
                else:
                    new_lines.append(line[:start_col] + new_code + line[end_col:])
            elif i < end_lineno - 1:
                pass
            elif i == end_lineno - 1:
                if is_multiline_code:
                    new_lines.append(new_code + "\n")
                new_lines.append(line[end_col:])
            else:
                new_lines.append(line)

        with open(file, "w", encoding="utf-8") as f:
            f.writelines(new_lines)

        print(f"Code replaced in {file}")

    @staticmethod
    def create_method_call(caller_info: LazyCallerInfo, method_name: str, code: str):
        file = caller_info.filename
        end_lineno = caller_info.end_lineno
        end_col = caller_info.end_col + 1

        with open(file, "r", encoding="utf-8") as f:
            lines = f.readlines()

        new_lines = []
        for i, line in enumerate(lines):
            if i < end_lineno - 1:
                new_lines.append(line)
            elif i == end_lineno - 1:
                new_lines.append(
                    line[:end_col] + f".{method_name}({code})" + line[end_col:]
                )
            else:
                new_lines.append(line)

        with open(file, "w", encoding="utf-8") as f:
            f.writelines(new_lines)

    @staticmethod
    def create_style_method_call(caller_info: LazyCallerInfo, style_code: str):
        _Helper.create_method_call(caller_info, "style", style_code)

    @staticmethod
    def create_classes_method_call(caller_info: LazyCallerInfo, classes_code: str):
        _Helper.create_method_call(caller_info, "classes", classes_code)

    @staticmethod
    def choose_style_info(
        infos: List[LazyCallerInfo], source_code_info: LazyCallerInfo
    ):
        for info in reversed(infos):
            if info.lineno == source_code_info.lineno:
                return info
        return None

    @staticmethod
    def choose_classes_info(infos: List[ClassesInfo], source_code_info: LazyCallerInfo):
        for info in reversed(infos):
            if info.caller_info.lineno == source_code_info.lineno:
                return info
        return None


choose_classes_info = _Helper.choose_classes_info
