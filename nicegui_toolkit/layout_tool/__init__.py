from typing import Optional
from .services.intercept_service import (
    Hooker,
    HookerContext,
)
from .services.caller_service import get_caller_file
from .track_ball.trackBall import TrackBall
from nicegui import app as ng_app, Client as ng_Client
from nicegui_toolkit.layout_tool import types
from nicegui_toolkit.systems import fastapi_system


def inject_layout_tool(
    ide: types._T_IDE = "vscode",
    language_locale: Optional[types._T_language_locale] = None,
    **kwargs,
):
    """Inject layout tool into the current app.

    Args:
        ide (types._T_IDE, optional):  IDE to use. Defaults to "vscode".
        language_locale (Optional[types._T_language_locale], optional):  Language locale to use, if not provided, it will be determined by the client's language. Defaults to None.
    """
    project_path = get_caller_file().parent
    Hooker(
        HookerContext(include_folders=[project_path], IDE=ide)
    ).hook_ui_element_method()

    is_testing = kwargs.get("is_testing", False)

    @ng_app.on_connect
    async def on_connect(client: ng_Client):
        nonlocal language_locale
        await client.connected()
        if not TrackBall.has_in_client():
            if language_locale is None and client.request:
                language_locale = (
                    "zh"
                    if fastapi_system.is_zh_client_language(client.request)
                    else "en"
                )
            TrackBall(language_locale=language_locale or "auto", is_testing=is_testing)
