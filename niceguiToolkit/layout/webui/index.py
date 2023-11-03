from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui
from niceguiToolkit.libs.trackBall import TrackBall

from .configZone import functional_zone
from .messageZone import message_zone
from .injection import Provider

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo
    from niceguiToolkit.layout.events import TrackBallSelectdEventArguments


@ui.refreshable
def apply_zone(store: Optional[ComponentStore] = None, enable=False):
    def onclick():
        assert store
        for record in store.create_changed_records():
            record.file.write_text(record.code, "utf8")

    ui.button("apply", on_click=onclick)._handle_enabled_change(enable)


def build_TrackBall(store: ComponentStore):
    ui.tooltip.default_style("font-size:1rem")

    ball = TrackBall()

    # with ball.add_slot("title"):
    #     ui.label("xx")

    with ball, ui.card().classes("select-none"):
        provider = Provider(ball, store, message_zone, functional_zone, apply_zone)
        ui.icon("gps_fixed")
        message_zone(provider)
        functional_zone(provider)
        apply_zone(store)

    def selectdChange(e: TrackBallSelectdEventArguments):
        id = e.id

        if id:
            info = store.get_info(id)
            message_zone.refresh(info=info, select_event_args=e)
            functional_zone.refresh(info=info, select_event_args=e)
        else:
            message_zone.refresh(info=None)
            functional_zone.refresh(info=None)

    ball.on_select(selectdChange)
    return ball
