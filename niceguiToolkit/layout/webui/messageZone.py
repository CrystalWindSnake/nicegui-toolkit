from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, run
import os

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

    with ui.row() as first_row:

        async def onclick():
            await run.io_bound(
                lambda: os.system(
                    f"code -g {info.sourceCodeInfo.callerSourceCodeFile.resolve()}:{info.sourceCodeInfo.positions.lineno}:{info.sourceCodeInfo.positions.end_col_offset}"
                )
            )

        with ui.button(icon="code").props("round ").on(
            "click",
            onclick,
        ):
            ui.tooltip("jump to code[only vscode]")

    assert select_event_args

    if select_event_args.parentBoxId:
        with first_row:

            def onclick():
                provider.track_ball.select_target(select_event_args.parentBoxId)  # type: ignore

            with ui.button(icon="outbox").props("round ").on(
                "click",
                onclick,
            ):
                ui.tooltip("select parent box")

    with ui.row():
        ui.label("type:")
        ui.label(info.typeName)

    # with ui.row():
    #     ui.label("styles:")
    #     ui.label(str(info.stylesHistory))

    # with ui.row():
    #     ui.label("classes:")
    #     ui.label(str(info.classesHistory))
