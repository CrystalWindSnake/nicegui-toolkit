from __future__ import annotations
import inspect
from typing import Callable, List
from typing_extensions import get_type_hints
import nicegui as ng_vars
from dataclasses import dataclass


def is_classmethod(cls: type, method_name: str):
    method = getattr(cls, method_name)
    return inspect.ismethod(method) and method.__self__ is cls


def try_getattr(o: object, name: str):
    try:
        return getattr(o, name)
    except AttributeError:
        return None
    except Exception as e:
        raise e


def get_member_items(classIns: type):
    result = {
        attr: try_getattr(classIns, attr)
        for attr in set([*dir(classIns), *classIns.__dict__.keys()])
        if not attr.startswith("__")
    }

    return {key: value for key, value in result.items() if value}


@dataclass
class _Tget_static_functions:
    name: str
    func: Callable
    isReturnUiElement: bool


def get_static_functions(classIns: type):
    return [
        _Tget_static_functions(name, obj, _isReturnUiElement(obj))
        for name, obj in get_member_items(classIns).items()
        if callable(obj)
        # if isinstance(obj, staticmethod) or is_classmethod(classIns, name)
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


def get_frame_info(level=0):
    level = level - 1
    cur_frame = inspect.currentframe()

    for _ in range(level, 0):
        assert cur_frame
        cur_frame = cur_frame.f_back

    assert cur_frame
    return inspect.getframeinfo(cur_frame)


# def frame_info_to_code_info(
#     frame_info: inspect.Traceback, position: _T_entry_point_position
# ):
#     return _T_source_code_info(Path(frame_info.filename), frame_info.function, position)


# def get_source_code_info():
#     finfo = get_frame_info(-2)

#     return frame_info_to_code_info(finfo)
