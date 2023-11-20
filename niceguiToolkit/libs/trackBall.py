from pathlib import Path
from typing import Callable
import nicegui as ng_vars
from nicegui.element import Element
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.layout.events import (
    TrackBallSelectdEventArguments,
    FlexInfo,
    TrackBallCommandsEventArguments,
    TrackBallCommandOptions,
)

_STYLE_FILE = Path(__file__).parent / "trackBall.css"
_STYLE_URL = "/ng-toolkit/trackball.style.css"


class TrackBall(Element, component="trackBall.js"):
    def __init__(self) -> None:
        super().__init__()
        self._props["selectorConfig"] = {
            "selectors": ".layout-tool-mark",
            "idAttr": "layout-tool-id",
            "elementTypeAttr": "layout-tool-type",
        }
        self._props["styleUrl"] = _STYLE_URL

    def on_hover(self, handler: Callable[[int], None]):
        def inner_handler(e):
            handler(e.args["id"])

        return self.on("hoverChange", inner_handler)

    def on_select(self, handler: Callable[[TrackBallSelectdEventArguments], None]):
        def inner_handler(e):
            args = e.args
            arg = TrackBallSelectdEventArguments(
                sender=self,
                client=self.client,
                id=args["id"],
                parentBoxId=args["parentBoxId"],
                flexInfo=FlexInfo(**args["flexInfo"]),
                parentFlexInfo=FlexInfo(**args["parentFlexInfo"]),
            )
            handler(arg)

        return self.on("selectedChange", inner_handler)

    def on_command(self, handler: Callable[[TrackBallCommandsEventArguments], None]):
        def inner_handler(e):
            args = e.args
            print(args)
            options = [TrackBallCommandOptions(**opt) for opt in args["options"]]
            arg = TrackBallCommandsEventArguments(
                sender=self, client=self.client, id=args["id"], options=options
            )
            handler(arg)

        return self.on("command", inner_handler)

    async def query_style(self, id: _TNiceguiComponentId, name: str):
        return await self.run_method("queryStyle", id, name)

    def select_target(self, id: _TNiceguiComponentId):
        self.run_method("selectTarget", id)

    @staticmethod
    def add_style_static_file():
        ng_vars.app.add_static_file(
            local_file=_STYLE_FILE,
            url_path=_STYLE_URL,
        )
