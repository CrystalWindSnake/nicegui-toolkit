from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from nicegui import ui, context

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo


@ui.refreshable
def functional_zone(
    apply_zone: ui.refreshable,
    store: Optional[ComponentStore] = None,
    info: Optional[ComponentInfo] = None,
):
    if not info:
        return

    assert store

    try_build_container_box(apply_zone, store, info)
    # return

    # with ui.row():
    #     ui.label("color")
    #     color = to_ref(info.stylesHistory.get("color", ""))


def try_build_container_box(
    apply_zone: ui.refreshable,
    store: ComponentStore,
    info: ComponentInfo,
):
    style_name = "flex-direction"
    cp = context.get_client().elements[info.id]

    if info.typeName in ["Row", "Column"] or cp._style.get("display", "") == "flex":
        cp = context.get_client().elements[info.id]

        def onchange(e):
            store.change_styles(info.id, {style_name: e.value})
            cp._style[style_name] = e.value
            cp.update()

            apply_zone.refresh(enable=True)

        init_value = (
            cp._style[style_name]
            if style_name in cp._style
            else {"Column": "column", "Row": "row"}[info.typeName]
        )

        ui.radio({"row": "横向", "column": "竖向"}, value=init_value, on_change=onchange)
