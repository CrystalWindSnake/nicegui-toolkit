from nicegui import ui


def create_view():
    ui.label("foo").style(
        "row-gap:3px;transition: grid-template-rows 0.3s ease-in-out;color:rgba(0,0,0,0.1)"
    )
