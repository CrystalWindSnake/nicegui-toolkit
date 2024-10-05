from __future__ import annotations
from pathlib import Path
from typing import TYPE_CHECKING, Dict, List
import subprocess
from nicegui.element import Element


if TYPE_CHECKING:
    from niceguiToolkit.systems.caller_system import LazyCallerInfo


_SOURCE_CODE_INFO_FLAG = "__source_code_info__"
_STYLE_INFO_FLAG = "__style_info__"


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
    if _STYLE_INFO_FLAG not in element.__dict__:
        element.__dict__[_STYLE_INFO_FLAG] = []

    element.__dict__[_STYLE_INFO_FLAG].append(caller_info)


def get_style_infos(element: Element) -> List[LazyCallerInfo]:
    return element.__dict__.get(_STYLE_INFO_FLAG, [])


def apply_style_code(element: Element, style_data: Dict[str, str]):
    caller_info = get_source_code_info(element)
    if caller_info is None:
        return

    style_infos = get_style_infos(element)
    if not style_infos:
        _Helper.create_style_method_call(
            caller_info,
            f'"{create_style_code(style_data)}"',
        )

    else:
        pass
        style_info = style_infos[0]

        _Helper.replace_code(
            style_info.filename,
            style_info.lineno,
            style_info.end_lineno,
            style_info.start_col,
            style_info.end_col,
            f'"{create_style_code(style_data)}"',
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
    def create_style_method_call(caller_info: LazyCallerInfo, style_code: str):
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
                    line[:end_col] + f".style({style_code})" + line[end_col:]
                )
            else:
                new_lines.append(line)

        with open(file, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
