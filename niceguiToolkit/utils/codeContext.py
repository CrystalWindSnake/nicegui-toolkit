import dis
import inspect
from typing import Callable, List
from typing_extensions import get_type_hints
import nicegui as ng_vars
from dataclasses import dataclass
from pathlib import Path


@dataclass
class _Tget_static_functions:
    name: str
    func: Callable
    isReturnUiElement: bool


def get_static_functions(classIns: type):
    return [
        _Tget_static_functions(name, obj, _isReturnUiElement(obj))
        for name, obj in classIns.__dict__.items()
        if isinstance(obj, staticmethod) and (not name.startswith("__"))
    ]


def _isReturnUiElement(func):
    hints = get_type_hints(func)
    if "return" not in hints or (not inspect.isclass(hints["return"])):
        return False

    return issubclass(hints["return"], ng_vars.ui.element)


@dataclass
class _Tget_all_element_funcs:
    name: str
    classIns: type


def get_all_element_funcs(nicegui_ui_module):
    target_funcs: List[_Tget_all_element_funcs] = []

    for attr_name in dir(nicegui_ui_module):
        ins = getattr(nicegui_ui_module, attr_name)
        if not isinstance(ins, type):
            continue
        if issubclass(ins, ng_vars.ui.element):
            target_funcs.append(_Tget_all_element_funcs(attr_name, ins))

    return target_funcs


@dataclass(frozen=True)
class _T_get_source_code_info:
    callerSourceCodeFile: Path
    positions: dis.Positions


def get_source_code_info():
    cur_frame = inspect.currentframe()
    assert cur_frame
    cur_frame = cur_frame.f_back
    assert cur_frame
    cur_frame = cur_frame.f_back
    assert cur_frame
    cur_frame = cur_frame.f_back
    assert cur_frame

    finfo = inspect.getframeinfo(cur_frame)
    positions = finfo.positions
    assert positions

    return _T_get_source_code_info(Path(finfo.filename), positions)
