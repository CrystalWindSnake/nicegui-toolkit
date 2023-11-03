from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return True


def build_width(context: T_BuilderContext):
    style_name = "width"
    inin_value = context.element._style.get(style_name, "none")

    def onchange(e):
        value = e.value
        if value == "none":
            context.remove_styles(style_name)
            return

        context.apply_styles({style_name: e.value})

    with ui.row().classes("flex-center"):
        ui.label("宽度")
        ui.radio(
            {"none": "未设置", "auto": "auto", "100%": "100%"},
            value=inin_value,
            on_change=onchange,
        ).classes("flex")


def build_height(context: T_BuilderContext):
    style_name = "height"
    inin_value = context.element._style.get(style_name, "none")

    def onchange(e):
        value = e.value
        if value == "none":
            context.remove_styles(style_name)
            return

        context.apply_styles({style_name: e.value})

    with ui.row().classes("flex-center"):
        ui.label("高度")
        ui.radio(
            {"none": "未设置", "auto": "auto", "100%": "100%", "100vh": "屏幕高度"},
            value=inin_value,
            on_change=onchange,
        ).classes("flex")


def build_fn(context: T_BuilderContext):
    build_width(context)
    ui.separator()
    build_height(context)


def _get_builder():
    return T_Builder(
        title="position(位置)", order=10, is_show_fn=isShow_fn, build_fn=build_fn
    )
