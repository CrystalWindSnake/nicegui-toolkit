from nicegui import ui


style_str = 'color:red'

def create_view():
    ui.label("foo").style(style_str)
