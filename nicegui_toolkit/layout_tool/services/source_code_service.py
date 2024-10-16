from __future__ import annotations
from pathlib import Path
from typing import TYPE_CHECKING, Dict, List, Literal, Optional
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


def has_source_code_info(element: Element) -> bool:
    return _SOURCE_CODE_INFO_FLAG in element.__dict__


def get_source_code_info(element: Element) -> LazyCallerInfo:
    return element.__dict__.get(_SOURCE_CODE_INFO_FLAG, None)


def save_style_info(element: Element, caller_info: LazyCallerInfo):
    if _STYLE_INFO_FLAG in element.__dict__:
        return

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

    element.__dict__[_CLASSES_INFO_FLAG] = ClassesInfo(add_classes_str, caller_info)


def get_classes_info(element: Element) -> Optional[ClassesInfo]:
    return element.__dict__.get(_CLASSES_INFO_FLAG, None)


def create_file_code(commit: Commit):
    return "".join(_Helper.replace_code_with_commit(commit))


@dataclass
class Action:
    start_lineno: int
    end_lineno: int
    start_col: int
    end_col: int
    type: Literal["replace", "add"]
    code: str

    @property
    def is_multiline(self):
        return self.start_lineno != self.end_lineno


@dataclass
class Commit:
    file: Path
    actions: List[Action]

    def get_actions_sorted(self):
        """Sort by rows from smallest to largest and columns from largest to smallest"""
        return sorted(self.actions, key=lambda x: (-x.start_lineno, -x.start_col))


class _Helper:
    @staticmethod
    def replace_code_with_commit(commit: Commit):
        file = commit.file
        actions = commit.get_actions_sorted()

        with open(file, "r", encoding="utf-8") as f:
            lines = f.readlines()

        for action in actions:
            current_line = lines[action.start_lineno - 1]
            new_line = None

            if action.type == "add":
                start_code, end_code = _Helper._get_codes_by_add_action(
                    lines, action, current_line
                )
                new_line = start_code + action.code + end_code
            elif action.type == "replace":
                start_code, end_code = _Helper._get_code_by_replace_action(
                    lines, action, current_line
                )
                new_line = start_code + action.code + end_code
            else:
                raise ValueError(f"Unknown action type: {action.type}")

            lines[action.start_lineno - 1] = new_line
            _Helper.try_remove_redundant_lines(lines, action)

        return lines

    @staticmethod
    def try_remove_redundant_lines(lines: List[str], action: Action):
        if not action.is_multiline:
            return

        start_index = action.start_lineno
        end_index = action.end_lineno

        del lines[start_index:end_index]

    @staticmethod
    def _get_codes_by_add_action(lines: List[str], action: Action, current_line: str):
        start_code = current_line[: action.end_col + 1]

        if action.is_multiline:
            end_line = lines[action.end_lineno - 1]
            end_code = end_line[action.end_col :]
        else:
            end_code = current_line[action.end_col + 1 + len(action.code) :]
        return start_code, end_code

    @staticmethod
    def _get_code_by_replace_action(
        lines: List[str], action: Action, current_line: str
    ):
        start_code = current_line[: action.start_col]
        if action.is_multiline:
            end_line = lines[action.end_lineno - 1]
            end_code = end_line[action.end_col :]
        else:
            end_code = current_line[action.end_col :]
        return start_code, end_code
