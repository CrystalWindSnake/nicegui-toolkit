from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui
from niceguiToolkit.libs.trackBall import TrackBall
from ex4nicegui.reactive import rxui
from ex4nicegui import to_ref, on

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo


def message_zone(info: ComponentInfo):
    if not info:
        return

    with ui.row():
        ui.label("type:")
        ui.label(info.typeName)

    with ui.row():
        ui.label("styles:")
        ui.label(str(info.stylesHistory))

    with ui.row():
        ui.label("classes:")
        ui.label(str(info.classesHistory))


def functional_zone(info: ComponentInfo):
    if not info:
        return

    with ui.row():
        ui.label("color")
        color = to_ref(info.stylesHistory.get("color", ""))
        rxui.lazy_color_picker(color)

        @on(color)
        def _():
            info.stylesHistory["color"] = color.value
            can_apply.value = True


can_apply = to_ref(False)


def build_TrackBall(store: ComponentStore):
    @ui.refreshable
    def track_panel(id: Optional[int] = None):
        if not id:
            return

        info = store.get_info(id)

        with ui.column() as box:
            box.tailwind.user_select("none")
            message_zone(info)

            functional_zone(info)

            rxui.button(
                "apply",
            ).bind_enabled(can_apply)

    with TrackBall() as ball, ui.card():
        ui.icon("gps_fixed")
        track_panel()

    def hoverChange(id: int):
        print(id)
        track_panel.refresh(id)

    ball.on_select(hoverChange)
