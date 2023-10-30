from __future__ import annotations
from typing import TYPE_CHECKING, List
import nicegui as ng_vars
from niceguiToolkit.utils import codeContext
from pathlib import Path
from .componentStore import ComponentStore

if TYPE_CHECKING:
    from .componentStore import StoreManager


def _mark_element(ele: ng_vars.ui.element):
    # ele.classes("ex4ng-ng_cp")
    ele._props["layout-tool-mark"] = True
    ele._props["layout-tool-ele-id"] = ele.id
    ele._props["layout-tool-ele-type"] = type(ele).__name__


def hook_ui_element_method(store_manager: StoreManager, code_file_includes: List[Path]):
    org_init = ng_vars.ui.element.__init__

    def wrap_init(self: ng_vars.ui.element, *args, **kws):
        # TODO:Exclude own component construction
        org_init(self, *args, **kws)

        frame_info = codeContext.get_frame_info_match_file(code_file_includes)
        if frame_info:
            store = store_manager.try_get_shadow_store(ng_vars.context.get_client().id)
            _mark_element(self)
            store.set_componentInfo(
                self, codeContext.frame_info_to_code_info(frame_info)
            )

    ng_vars.ui.element.__init__ = wrap_init
