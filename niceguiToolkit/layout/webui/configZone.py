from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context
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

    for builder in get_all_system_builders():
        builder_context = T_BuilderContext(select_event_args.flexInfo, provider, info)

        if builder.is_show_fn(builder_context):
            builder.build_fn(builder_context)

    # try_build_container_box(provider, info, select_event_args)
