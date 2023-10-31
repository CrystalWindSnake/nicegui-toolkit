from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return context.flex_info.isFlex


def build_fn(context: T_BuilderContext):
    style_name = "flex-direction"

    def onchange(e):
        context.apply_styles({style_name: e.value})

    init_value = context.flex_info.direction

    with ui.row().classes("flex-center"):
        ui.label("元素排列方向")
        ui.radio(
            {"row": "横向", "column": "竖向"}, value=init_value, on_change=onchange
        ).classes("flex")


def _get_builder():
    return T_Builder(isShow_fn, build_fn)
