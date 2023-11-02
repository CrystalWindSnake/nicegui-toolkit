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

        async def on_click_code():
            await run.io_bound(
                lambda: os.system(
                    f"code -g {info.sourceCodeInfo.entry_point.file.resolve()}:{info.sourceCodeInfo.entry_point.positions.lineno}:{info.sourceCodeInfo.entry_point.positions.end_col_offset}"
                )
            )

        with ui.button(icon="code").props("round size=sm").on(
            "click",
            on_click_code,
        ):
            ui.tooltip("jump to code[only vscode]").style("z-index: 9999999")

    assert select_event_args

    if select_event_args.parentBoxId:
        with first_row:

            def onclick():
                provider.track_ball.select_target(select_event_args.parentBoxId)  # type: ignore

            with ui.button(icon="outbox").props("round size=sm").on(
                "click",
                onclick,
            ):
                ui.tooltip("select parent box").style("z-index: 9999999")

    with ui.row().classes("flex-center"):
        ui.label("type:")

        with ui.element("q-chip").props('color="teal" text-color="white"'):
            ui.label(info.typeName)

        if select_event_args.flexInfo.isFlex:
            with ui.element("q-chip").props('color="primary" text-color="white"'):
                ui.label("flex box")

    # with ui.row():
    #     ui.label("classes:")
    #     ui.label(str(info.sourceCodeInfo.classes))

    # with ui.row():
    #     ui.label("style:")
    #     ui.label(str(info.sourceCodeInfo.style))

    # with ui.row():
    #     ui.label("sourceCodeInfo:")
    #     ui.label(str(info.sourceCodeInfo))
