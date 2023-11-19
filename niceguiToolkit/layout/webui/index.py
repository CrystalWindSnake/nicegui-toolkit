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

    @ball.on_command
    def _(e):
        pass

    return ball
