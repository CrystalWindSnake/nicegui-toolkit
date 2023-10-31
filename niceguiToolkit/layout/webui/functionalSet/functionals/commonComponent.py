from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return True


def build_fn(context: T_BuilderContext):
    inin_value = context.element._style.get("width", None)

    def onchange(e):
        context.apply_styles({"width": e.value})

    with ui.row().classes("flex-center"):
        ui.label("宽度")
        ui.radio(
            {"auto": "auto", "100%": "100%"}, value=inin_value, on_change=onchange
        ).classes("flex")


def _get_builder():
    return T_Builder(isShow_fn, build_fn)
