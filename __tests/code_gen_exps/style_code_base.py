from nicegui import ui


def create_view():
    ui.label("foo")

    table = (
        ui.label("bar long text with spaces")
        .props('p1 p2="xx"')
        .classes("w-full h-[50vh]")
        # .style("color:black")
    )
