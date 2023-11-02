from nicegui import ui
from niceguiToolkit.layout.webui.functionalSet.model import T_BuilderContext, T_Builder


def isShow_fn(context: T_BuilderContext):
    return (
        context.parent_flex_info.isFlex
        # and context.parent_flex_info.direction == "column"
    )


def build_horizontal(context: T_BuilderContext):
    style_name = "align-self"

    parent_direction = context.parent_flex_info.direction
    if parent_direction is None:
        return

    title = {"row": "垂直位置", "column": "水平位置"}[parent_direction]
    options = {
        "row": {"flex-start": "靠上", "center": "居中", "flex-end": "靠下"},
        "column": {"flex-start": "靠左", "center": "居中", "flex-end": "靠右"},
    }[parent_direction]

    init_value = context.element._style.get(style_name, None)

    def on_value_change(e):
        styles = {style_name: e.value}
        context.apply_styles(styles)

    with ui.row().classes("flex-center"):
        ui.label(title)
        ui.radio(
            options,
            value=init_value,
            on_change=on_value_change,
        ).classes("flex")


def build_fn(context: T_BuilderContext):
    build_horizontal(context)
    ui.separator()


def _get_builder():
    return T_Builder(
        title="flex item(子元素)", order=900, is_show_fn=isShow_fn, build_fn=build_fn
    )
