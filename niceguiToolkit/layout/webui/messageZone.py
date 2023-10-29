from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context
from niceguiToolkit.libs.trackBall import TrackBall

from .configZone import functional_zone

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo
    from .injection import Provider
    from niceguiToolkit.layout.events import TrackBallSelectdEventArguments


@ui.refreshable
def message_zone(
    provider: Provider,
    info: Optional[ComponentInfo] = None,
    select_event_args: Optional[TrackBallSelectdEventArguments] = None,
):
    if not info:
        return

    ui.link(
        "jump to code",
        f"vscode://file/{info.sourceCodeInfo.callerSourceCodeFile.resolve()}:{info.sourceCodeInfo.positions.lineno}:{info.sourceCodeInfo.positions.end_col_offset}",
    )

    assert select_event_args

    if select_event_args.parentBoxId:

        def onclick():
            provider.track_ball.select_target(select_event_args.parentBoxId)  # type: ignore

        ui.button("select parent box", on_click=onclick)

    with ui.row():
        ui.label("type:")
        ui.label(info.typeName)

    with ui.row():
        ui.label("styles:")
        ui.label(str(info.stylesHistory))

    with ui.row():
        ui.label("classes:")
        ui.label(str(info.classesHistory))
