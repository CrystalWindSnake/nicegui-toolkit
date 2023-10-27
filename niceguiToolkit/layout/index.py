from typing import Callable
from . import hooker
import nicegui as ng_vars


from dataclasses import dataclass


@dataclass
class _T_inject_layout_tool:
    trigger_select_component_event: Callable[[int], None]


def inject_layout_tool():
    cpStore = hooker.hook_ui_element_method()

    # create tool ui
    pass

    # when select cp
    def trigger_select_component_event(id: int):
        info = cpStore.get_info(id)
        print(info)

    #
    @ng_vars.app.on_connect
    def _(client: ng_vars.Client):
        # collect cp style,props,class
        cpStore.collect_component_infos(client)

    return _T_inject_layout_tool(trigger_select_component_event)
