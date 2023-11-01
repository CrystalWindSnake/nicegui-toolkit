from niceguiToolkit.layout import inject_layout_tool
from nicegui import ui, app
from asyncio import sleep

inject_layout_tool(mode="penetration")

ui.label("xx")
with ui.element("box"):
    ui.tooltip("填写内容").style("width:10rem;")


@app.on_startup
async def _():
    await sleep(3)
    app.shutdown()


ui.run(reload=False, show=False)
