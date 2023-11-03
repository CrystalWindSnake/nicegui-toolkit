from nicegui import ui


def color_input(title: str, *args, **kws):
    return ui.color_input("字体颜色", *args, **kws).props("layout-tool-panel-element=''")
