from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context, app
from niceguiToolkit.libs.trackBall import TrackBall

from .configZone import functional_zone
from .messageZone import message_zone
from .injection import Provider
from niceguiToolkit.layout.events import TrackBallCommandsEventArguments

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
    TrackBall.add_style_static_file()

    @ball.on_command
    def _(e: TrackBallCommandsEventArguments):
        id = e.id
        element = context.get_client().elements[id]

        for opt in e.options:
            store.change_styles(id, opt.values)
            element._style.update(opt.values)

        element.update()

    return ball
