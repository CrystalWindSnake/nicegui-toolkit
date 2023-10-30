from __future__ import annotations
from pathlib import Path
import sysconfig
from typing import TYPE_CHECKING, Callable, Optional
import nicegui as ng_vars
from niceguiToolkit.utils import codeContext
import inspect
from functools import partial

if TYPE_CHECKING:
    from .componentStore import StoreManager
    from .index import _T_inject_Config


def _mark_element(ele: ng_vars.ui.element):
    # ele.classes("ex4ng-ng_cp")
    ele._props["layout-tool-mark"] = True
    ele._props["layout-tool-ele-id"] = ele.id
    ele._props["layout-tool-ele-type"] = type(ele).__name__


def _create_get_frame_info_finder(
    config: _T_inject_Config,
) -> Callable[..., Optional[inspect.Traceback]]:
    if config.inject_mode == "save":
        return partial(codeContext.get_frame_info_match_file, config.code_file_includes)

    if config.inject_mode == "penetration":
        import site

        pk_libs = [Path(p) for p in site.getsitepackages()]

        # pk_lib = Path(sysconfig.get_paths()["purelib"])
        this_pj_root = Path(__file__).parent.parent

        return partial(codeContext.get_frame_info_exclude_dir, [*pk_libs, this_pj_root])

    raise ValueError(f"not support inject mode:{config.inject_mode}")


def hook_ui_element_method(store_manager: StoreManager, config: _T_inject_Config):
    org_init = ng_vars.ui.element.__init__

    get_frame_info_finder = _create_get_frame_info_finder(config)

    def wrap_init(self: ng_vars.ui.element, *args, **kws):
        # TODO:Exclude own component construction
        org_init(self, *args, **kws)

        frame_info = get_frame_info_finder()
        if frame_info:
            store = store_manager.try_get_shadow_store(ng_vars.context.get_client().id)
            _mark_element(self)
            store.set_componentInfo(
                self, codeContext.frame_info_to_code_info(frame_info)
            )

    ng_vars.ui.element.__init__ = wrap_init
