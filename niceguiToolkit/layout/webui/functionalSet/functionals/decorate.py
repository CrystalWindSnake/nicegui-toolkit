from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder
from niceguiToolkit.layout.webui.functionalSet.functionals import (
    components as common_cps,
)


def isShow_fn(context: T_BuilderContext):
    return True


def build_font_size(context: T_BuilderContext):
    style_name = "font-size"

    def onchange(e):
        value = e.value
        if value:
            context.apply_styles({style_name: f"{e.value}rem"})
        else:
            context.remove_styles(style_name)

    init_value = None
    init_value_str = context.element._style.get(style_name, None)
    if init_value_str:
        init_value = float(init_value_str[:-3])

    with ui.row().classes("flex-center"):
        ui.number(
            "字体大小", min=0, value=init_value, step=0.1, on_change=onchange
        ).classes("flex")


def build_font_color(context: T_BuilderContext):
    style_name = "color"
    inin_value = context.element._style.get(style_name, "")

    def onchange(e):
        value = e.value
        if value == "":
            context.remove_styles(style_name)
            return

        context.apply_styles({style_name: e.value})

    with ui.row().classes("flex-center"):
        common_cps.color_input("字体颜色", value=inin_value, on_change=onchange)


def build_fn(context: T_BuilderContext):
    build_font_size(context)
    ui.separator()
    build_font_color(context)


def _get_builder():
    return T_Builder(
        title="decorate(修饰)", order=10, is_show_fn=isShow_fn, build_fn=build_fn
    )
