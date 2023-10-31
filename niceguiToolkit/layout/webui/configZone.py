from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentInfo
    from .injection import Provider
    from niceguiToolkit.layout.events import TrackBallSelectdEventArguments


@ui.refreshable
def functional_zone(
    provider: Provider,
    info: Optional[ComponentInfo] = None,
    select_event_args: Optional[TrackBallSelectdEventArguments] = None,
):
    if not info:
        return

    assert select_event_args

    try_build_container_box(provider, info, select_event_args)
    # return

    # with ui.row():
    #     ui.label("color")
    #     color = to_ref(info.stylesHistory.get("color", ""))


def try_build_container_box(
    provider: Provider,
    info: ComponentInfo,
    select_event_args: TrackBallSelectdEventArguments,
):
    style_name = "flex-direction"
    cp = context.get_client().elements[info.id]

    if select_event_args.flexInfo.isFlex:
        cp = context.get_client().elements[info.id]

        def onchange(e):
            provider.store.change_styles(info.id, {style_name: e.value})
            cp._style[style_name] = e.value
            cp.update()

            provider.apply_zone.refresh(enable=True)

        init_value = select_event_args.flexInfo.direction

        with ui.row().classes("flex-center"):
            ui.label("元素排列方向")
            ui.radio(
                {"row": "横向", "column": "竖向"}, value=init_value, on_change=onchange
            ).classes("flex")

    # def onclick():
    #     provider.store.change_styles(info.id, {"color": "red"})
    #     cp._style["color"] = "red"
    #     cp.update()

    #     provider.apply_zone.refresh(enable=True)

    # ui.button("test apply color style", on_click=onclick)
