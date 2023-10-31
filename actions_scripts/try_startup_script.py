from niceguiToolkit.layout import inject_layout_tool
from nicegui import ui, app, Client
from asyncio import sleep

inject_layout_tool(mode="penetration")

ui.label("xx")


@app.on_connect
async def _(client: Client):
    await client.connected()
    await sleep(3)
    app.shutdown()


ui.run(reload=False)
