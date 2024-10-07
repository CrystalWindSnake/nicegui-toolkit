from .services.intercept_service import (
    Hooker,
    HookerContext,
)
from .services.caller_service import get_caller_file
from .track_ball.trackBall import TrackBall

from nicegui import app as ng_app, Client as ng_Client


def inject_layout_tool():
    project_path = get_caller_file().parent
    Hooker(HookerContext(include_folders=[project_path])).hook_ui_element_method()

    @ng_app.on_connect
    async def on_connect(client: ng_Client):
        await client.connected()

        if not TrackBall.has_in_client():
            TrackBall()
