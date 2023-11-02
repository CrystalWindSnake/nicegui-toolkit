from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return (
        context.parent_flex_info.isFlex
        and context.parent_flex_info.direction == "column"
    )


def build_fn(context: T_BuilderContext):
    style_name = "align-self"

    init_value = context.element._props.get(style_name, None)

    def on_value_change(e):
        styles = {style_name: e.value}
        context.apply_styles(styles)
        context._provider.track_ball.select_target(context._info.id)

    with ui.row().classes("flex-center"):
        ui.label("水平位置")
        ui.radio(
            {"flex-start": "靠左", "center": "居中", "flex-end": "靠右"},
            value=init_value,
            on_change=on_value_change,
        ).classes("flex")


def _get_builder():
    return T_Builder(isShow_fn, build_fn)
