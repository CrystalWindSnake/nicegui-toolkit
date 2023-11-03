from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet import get_all_system_builders
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentInfo
    from .injection import Provider
    from niceguiToolkit.layout.events import TrackBallSelectdEventArguments, FlexInfo


@ui.refreshable
def functional_zone(
    provider: Provider,
    info: Optional[ComponentInfo] = None,
    select_event_args: Optional[TrackBallSelectdEventArguments] = None,
):
    if not info:
        return

    assert select_event_args

    # with ui.expansion(value=True, icon="menu").classes("w-full"):

    with ui.element("q-list").props("bordered").classes("w-full"):
        for builder in get_all_system_builders():
            builder_context = T_BuilderContext(
                select_event_args.flexInfo,
                select_event_args.parentFlexInfo,
                provider,
                info,
            )

            if builder.is_show_fn(builder_context):
                with ui.expansion(builder.title).props('group="same"'):
                    builder.build_fn(builder_context)
