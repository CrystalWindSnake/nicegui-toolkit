from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return True


def build_width(context: T_BuilderContext):
    inin_value = context.element._style.get("width", None)

    def onchange(e):
        context.apply_styles({"width": e.value})

    with ui.row().classes("flex-center"):
        ui.label("宽度")
        ui.radio(
            {"auto": "auto", "100%": "100%"}, value=inin_value, on_change=onchange
        ).classes("flex")


def build_height(context: T_BuilderContext):
    inin_value = context.element._style.get("height", None)

    def onchange(e):
        context.apply_styles({"height": e.value})

    with ui.row().classes("flex-center"):
        ui.label("高度")
        ui.radio(
            {"auto": "auto", "100%": "100%", "屏幕高度": "100vh"},
            value=inin_value,
            on_change=onchange,
        ).classes("flex")


def build_fn(context: T_BuilderContext):
    build_width(context)
    build_height(context)


def _get_builder():
    return T_Builder(isShow_fn, build_fn)
