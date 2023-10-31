from typing import Callable, List, Optional, Union
from typing_extensions import Literal
from . import hooker
import nicegui as ng_vars
from pathlib import Path

from dataclasses import dataclass, field
from niceguiToolkit.utils import codeContext
from niceguiToolkit.layout.componentStore import StoreManager
from niceguiToolkit.layout import webui
from types import ModuleType

import inspect


_T_inject_mode = Literal["save", "penetration"]


@dataclass
class _T_inject_Config:
    inject_mode: _T_inject_mode
    code_file_includes: List[Path] = field(default_factory=list)


_T_file_or_module = Union[str, Path, ModuleType, Callable]
_T_Param_inject_layout_tool_code_file_includes = Optional[
    Union[_T_file_or_module, List[_T_file_or_module]]
]


_m_store_manager = StoreManager()


def inject_layout_tool(
    code_file_includes: _T_Param_inject_layout_tool_code_file_includes = None,
    mode: _T_inject_mode = "save",
):
    config = _T_inject_Config(mode)
    if config.inject_mode == "save":
        code_file_paths_includes = get_code_file_includes(code_file_includes)
        code_file_paths_includes.append(Path(codeContext.get_frame_info(-1).filename))
        config.code_file_includes = code_file_paths_includes

    hooker.hook_ui_element_method(_m_store_manager, config)

    #
    @ng_vars.app.on_connect
    def _(client: ng_vars.Client):
        store = _m_store_manager.build_store_from_shadow(client.id)
        store.clear_records()
        # collect cp style,props,class
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
