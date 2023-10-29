from typing import Callable, Dict, List
from . import hooker
import nicegui as ng_vars
from pathlib import Path

from dataclasses import dataclass
from niceguiToolkit.utils import astCore, codeContext
from niceguiToolkit.layout.componentStore import ComponentStore
from niceguiToolkit.layout import webui


@dataclass
class _T_inject_layout_tool:
    store: ComponentStore
    trigger_select_component_event: Callable[[int], None]
    trigger_change_styles: Callable[[int, Dict[str, str]], None]
    trigger_change_classes: Callable[[int, List[str]], None]
    trigger_apply_changed: Callable[..., None]


def inject_layout_tool():
    cpStore = hooker.hook_ui_element_method(
        code_file_includes=[Path(codeContext.get_frame_info(-1).filename)]
    )

    # create tool ui
    pass

    # when select cp
    def trigger_select_component_event(id: int):
        info = cpStore.get_info(id)

        classes_str = astCore.get_call_content(
            info.sourceCodeInfo, info.astInfo.classes
        )

        styles_str = astCore.get_call_content(info.sourceCodeInfo, info.astInfo.style)

        props_str = astCore.get_call_content(info.sourceCodeInfo, info.astInfo.props)
        print(
            f"name:{info.typeName},classes:{classes_str},styles_str:{styles_str},props_str={props_str}"
        )
        # print(info)

    # when change style in ui
    def trigger_change_styles(id: int, styles: Dict[str, str]):
        cpStore.change_styles(id, styles)

    # when change classes in ui
    def trigger_change_classes(id: int, classes: List[str]):
        cpStore.change_classes(id, classes)

    def trigger_apply_changed():
        cpStore.create_changed_records()

    #
    @ng_vars.app.on_connect
    def _(client: ng_vars.Client):
        # collect cp style,props,class
        cpStore.collect_component_infos(client)

    webui.build_TrackBall(cpStore)

    return _T_inject_layout_tool(
        cpStore,
        trigger_select_component_event,
        trigger_change_styles,
        trigger_change_classes,
        trigger_apply_changed,
    )
