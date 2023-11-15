from __future__ import annotations
from pathlib import Path
from typing import TYPE_CHECKING, Callable, Optional
import nicegui as ng_vars
from niceguiToolkit.utils import astCore
from functools import partial

if TYPE_CHECKING:
    from .componentStore import StoreManager
    from .index import _T_inject_Config


def _mark_element(ele: ng_vars.ui.element):
    ele._classes.extend(
        [
            "layout-tool-mark",
            f"layout-tool-id-{ele.id}",
            f"layout-tool-type-{type(ele).__name__}",
        ]
    )

    # ele.classes("layout-tool-mark")


def _create_entry_point_info_finder(
    config: _T_inject_Config,
) -> Callable[..., Optional[astCore._T_entry_point_info]]:
    if config.inject_mode == "save":
        return partial(astCore.get_frame_info_match_file, config.code_file_includes)

    if config.inject_mode == "penetration":
        import site

        pk_libs = [Path(p) for p in site.getsitepackages()]

        # pk_lib = Path(sysconfig.get_paths()["purelib"])
        this_pj_root = Path(__file__).parent.parent

        return partial(astCore.get_frame_info_exclude_dir, [*pk_libs, this_pj_root])

    raise ValueError(f"not support inject mode:{config.inject_mode}")


def hook_ui_element_method(store_manager: StoreManager, config: _T_inject_Config):
    org_init = ng_vars.ui.element.__init__

    get_entry_point_info = _create_entry_point_info_finder(config)

    def wrap_init(self: ng_vars.ui.element, *args, **kws):
        # TODO:Exclude own component construction
        org_init(self, *args, **kws)

        entry_point_info = get_entry_point_info()
        if entry_point_info:
            store = store_manager.try_get_shadow_store(ng_vars.context.get_client().id)
            _mark_element(self)

            source_info = astCore.get_source_info(entry_point_info)

            store.set_componentInfo(self, source_info)

    ng_vars.ui.element.__init__ = wrap_init
