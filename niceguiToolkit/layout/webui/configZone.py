from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo
    from niceguiToolkit.libs.trackBall import TrackBall


@ui.refreshable
async def functional_zone(
    ball: TrackBall,
    apply_zone: ui.refreshable,
    store: Optional[ComponentStore] = None,
    info: Optional[ComponentInfo] = None,
):
    if not info:
        return

    assert store

    await try_build_container_box(ball, apply_zone, store, info)
    # return

    # with ui.row():
    #     ui.label("color")
    #     color = to_ref(info.stylesHistory.get("color", ""))


async def try_build_container_box(
    ball: TrackBall,
    apply_zone: ui.refreshable,
    store: ComponentStore,
    info: ComponentInfo,
):
    style_name = "flex-direction"
    cp = context.get_client().elements[info.id]

    style_display = await ball.query_style(info.id, "display")
    is_flex = style_display == "flex"

    if is_flex:
        cp = context.get_client().elements[info.id]

        def onchange(e):
            store.change_styles(info.id, {style_name: e.value})
            cp._style[style_name] = e.value
            cp.update()

            apply_zone.refresh(enable=True)

        init_value = await ball.query_style(info.id, style_name)

        ui.radio({"row": "横向", "column": "竖向"}, value=init_value, on_change=onchange)
