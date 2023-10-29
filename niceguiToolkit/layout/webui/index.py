from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context
from niceguiToolkit.libs.trackBall import TrackBall

from .configZone import functional_zone

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo


@ui.refreshable
def message_zone(info: Optional[ComponentInfo] = None):
    if not info:
        return

    ui.link(
        "jump to code",
        f"vscode://file/{info.sourceCodeInfo.callerSourceCodeFile.resolve()}:{info.sourceCodeInfo.positions.lineno}:{info.sourceCodeInfo.positions.end_col_offset}",
    )

    with ui.row():
        ui.label("type:")
        ui.label(info.typeName)

    with ui.row():
        ui.label("styles:")
        ui.label(str(info.stylesHistory))

    with ui.row():
        ui.label("classes:")
        ui.label(str(info.classesHistory))


@ui.refreshable
def apply_zone(store: Optional[ComponentStore] = None, enable=False):
    def onclick():
        assert store
        for record in store.create_changed_records():
            record.file.write_text(record.code)

    ui.button("apply", on_click=onclick)._handle_enabled_change(enable)


def build_TrackBall(store: ComponentStore):
    with TrackBall() as ball, ui.card():
        ui.icon("gps_fixed")

        message_zone()
        functional_zone(ball, apply_zone)
        apply_zone(store)

    def hoverChange(id: int):
        info = store.get_info(id)
        message_zone.refresh(info=info)
        functional_zone.refresh(store=store, info=info)

    ball.on_select(hoverChange)
