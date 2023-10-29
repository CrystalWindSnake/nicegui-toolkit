from typing import Callable, List
from typing_extensions import get_type_hints
import nicegui as ng_vars
from dataclasses import dataclass
from .componentStore import ComponentStore
from niceguiToolkit.utils import codeContext
from pathlib import Path


def _mark_element(ele: ng_vars.ui.element):
    # ele.classes("ex4ng-ng_cp")
    ele._props["layout-tool-mark"] = True
    ele._props["layout-tool-ele-id"] = ele.id
    ele._props["layout-tool-ele-type"] = type(ele).__name__


def hook_ui_element_method(code_file_includes: List[Path]):
    store = ComponentStore()

    for func_info in codeContext.get_all_element_funcs(ng_vars.ui):
        org_init = func_info.classIns.__init__

        def wrap(org_init=org_init):
            def wrap_init(self, *args, **kws):
                org_init(self, *args, **kws)
                frame_info = codeContext.get_frame_info_match_file(code_file_includes)
                if frame_info:
                    _mark_element(self)
                    store.set_componentInfo(
                        self, codeContext.frame_info_to_code_info(frame_info)
                    )

            return wrap_init

        func_info.classIns.__init__ = wrap()

    # for func_info in codeContext.get_all_element_funcs(ng_vars.ui):
    #     if func_info.name in ["keyboard", "timer"]:
    #         continue

    #     def wrap(func_info=func_info):
    #         def new_method(*args, **kws):
    #             ele: ng_vars.ui.element = func_info.classIns(*args, **kws)
    #             _mark_element(ele)
    #             store.set_componentInfo(ele)
    #             return ele

    #         return new_method

    #     new_method = wrap()

    #     # add static method to wrap func
    #     for static_info in codeContext.get_static_functions(func_info.classIns):
    #         # if func is return element sub class,wrap it
    #         if static_info.isReturnUiElement:

    #             def st_wrap(static_info=static_info):
    #                 def new_st_method(*args, **kws):
    #                     ele: ng_vars.ui.element = static_info.func(*args, **kws)
    #                     _mark_element(ele)
    #                     store.set_componentInfo(ele)
    #                     return ele

    #                 return new_st_method

    #             new_st_method = st_wrap()

    #             setattr(new_method, static_info.name, new_st_method)
    #         else:
    #             setattr(new_method, static_info.name, static_info.func)

    #     setattr(ng_vars.ui, func_info.name, new_method)

    return store
