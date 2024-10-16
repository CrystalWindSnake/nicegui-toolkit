from nicegui import ui


def create_view():
    ui.label("foo").style(r"""
    font-size:2rem;
    color:red;
""").classes("x1 y1")
