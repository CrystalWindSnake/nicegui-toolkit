from typing import Callable, List
from typing_extensions import get_type_hints
import nicegui as ng_vars
from dataclasses import dataclass
from .componentStore import ComponentStore


@dataclass
class _Tget_static_functions:
    name: str
    func: Callable
    isReturnUiElement: bool


def _get_static_functions(classIns: type):
    return [
        _Tget_static_functions(name, obj, _isReturnUiElement(obj))
        for name, obj in classIns.__dict__.items()
        if isinstance(obj, staticmethod) and (not name.startswith("_"))
    ]


def _isReturnUiElement(func):
    hints = get_type_hints(func)
    if "return" not in hints:
        return False

    return issubclass(hints["return"], ng_vars.ui.element)


@dataclass
class _Tget_all_element_funcs:
    name: str
    classIns: type


def _get_all_element_funcs(nicegui_ui_module):
    target_funcs: List[_Tget_all_element_funcs] = []

    for attr_name in dir(nicegui_ui_module):
        ins = getattr(nicegui_ui_module, attr_name)
        if not isinstance(ins, type):
            continue
        if issubclass(ins, ng_vars.ui.element):
            target_funcs.append(_Tget_all_element_funcs(attr_name, ins))

    return target_funcs


def _mark_element(ele: ng_vars.ui.element):
    ele.classes("ex4ng-ng_cp")
    ele.props("layout-tool-mark")
    ele._props["layout-tool-ele-id"] = ele.id
    ele._props["layout-tool-ele-type"] = type(ele).__name__


def hook_ui_element_method():
    store = ComponentStore()

    for func_info in _get_all_element_funcs(ng_vars.ui):

        def wrap(func_info=func_info):
            def new_method(*args, **kws):
                ele: ng_vars.ui.element = func_info.classIns(*args, **kws)
                _mark_element(ele)
                store.set_componentInfo(ele)
                return ele

            return new_method

        new_method = wrap()

        # add static method to wrap func
        for static_info in _get_static_functions(func_info.classIns):
            # if func is return element sub class,wrap it
            if static_info.isReturnUiElement:

                def st_wrap(static_info=static_info):
                    def new_st_method(*args, **kws):
                        ele: ng_vars.ui.element = static_info.func(*args, **kws)
                        _mark_element(ele)
                        store.set_componentInfo(ele)
                        return ele

                    return new_st_method

                new_st_method = st_wrap()

                setattr(new_method, static_info.name, new_st_method)
            else:
                setattr(new_method, static_info.name, static_info.func)

        setattr(ng_vars.ui, func_info.name, new_method)

    return store
