from nicegui import ui


def create_view():
    ui.label("foo")
    table = (
        ui.label("bar long text with spaces")
        .props('p1 p2="xx"')
        .classes("x1 x2 h-[50vh]")
        # .style("color:black")
    )
