from nicegui import ui


def create_view():
    ui.label("foo").classes(r"""
    h-full
    text-center
""")
