from typing import Callable, Dict, List, Optional, Union
from . import hooker
import nicegui as ng_vars
from pathlib import Path

from dataclasses import dataclass
from niceguiToolkit.utils import astCore, codeContext
from niceguiToolkit.layout.componentStore import ComponentStore, StoreManager
from niceguiToolkit.layout import webui
from types import ModuleType

import inspect


@dataclass
class _T_inject_layout_tool:
    store: ComponentStore
    trigger_select_component_event: Callable[[int], None]
    trigger_change_styles: Callable[[int, Dict[str, str]], None]
    trigger_change_classes: Callable[[int, List[str]], None]
    trigger_apply_changed: Callable[..., None]


_T_file_or_module = Union[str, Path, ModuleType, Callable]
_T_Param_inject_layout_tool_code_file_includes = Optional[
    Union[_T_file_or_module, List[_T_file_or_module]]
]


_m_store_manager = StoreManager()


def inject_layout_tool(
    code_file_includes: _T_Param_inject_layout_tool_code_file_includes = None,
):
    code_file_paths_includes = get_code_file_includes(code_file_includes)
    code_file_paths_includes.append(Path(codeContext.get_frame_info(-1).filename))

    hooker.hook_ui_element_method(
        _m_store_manager, code_file_includes=code_file_paths_includes
    )

    #
    @ng_vars.app.on_connect
    def _(client: ng_vars.Client):
        # collect cp style,props,class
        store = _m_store_manager.build_store_from_shadow(client.id)
        store.clear_records()
        store.collect_component_infos(client)

        if not _m_store_manager.exists_track_ball(client.id):
            ball = webui.build_TrackBall(store)
            _m_store_manager.save_track_ball(client.id, ball)

    @ng_vars.app.on_disconnect
    def _(client: ng_vars.Client):
        _m_store_manager.remove_resource(client.id)


def get_code_file_includes(
    code_file_includes: _T_Param_inject_layout_tool_code_file_includes,
):
    code_file_includes = code_file_includes or []
    if not isinstance(code_file_includes, list):
        code_file_includes = [code_file_includes]

    code_file_paths_includes = (
        inspect.getmodule(f) if isinstance(f, Callable) else f
        for f in code_file_includes
    )

    code_file_paths_includes = [
        Path(f.__file__) if isinstance(f, ModuleType) else Path(f)  # type: ignore
        for f in code_file_paths_includes
    ]

    return code_file_paths_includes
