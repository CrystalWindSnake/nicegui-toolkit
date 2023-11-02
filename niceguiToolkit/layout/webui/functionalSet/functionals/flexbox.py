from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return context.flex_info.isFlex


def build_direction(context: T_BuilderContext):
    style_name = "flex-direction"

    def onchange(e):
        context.apply_styles({style_name: e.value})

    init_value = context.flex_info.direction

    with ui.row().classes("flex-center"):
        ui.label("元素排列方向")
        ui.radio(
            {"row": "横向", "column": "竖向"}, value=init_value, on_change=onchange
        ).classes("flex")


def build_gap(context: T_BuilderContext):
    style_name = "gap"

    def onchange(e):
        value = e.value
        if value is not None:
            context.apply_styles({style_name: f"{e.value}rem"})
        else:
            context.remove_styles(style_name)

    init_value = context.element._style.get(style_name, None)
    if init_value:
        init_value = init_value[:-3]

    with ui.row().classes("flex-center"):
        ui.number(
            "元素间空隙", min=0, value=init_value, step=0.1, on_change=onchange
        ).classes("flex")


def build_fn(context: T_BuilderContext):
    build_direction(context)
    ui.separator()
    build_gap(context)


def _get_builder():
    return T_Builder(
        title="flex box(flex容器)", order=999, is_show_fn=isShow_fn, build_fn=build_fn
    )
