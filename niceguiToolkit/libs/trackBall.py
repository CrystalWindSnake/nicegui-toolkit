from typing import Callable
from nicegui.element import Element
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.layout.events import TrackBallSelectdEventArguments
from nicegui.events import handle_event


class TrackBall(Element, component="trackBall.js"):
    def __init__(self) -> None:
        super().__init__()
        self._props["selectorConfig"] = {
            "selectors": "[layout-tool-mark]",
            "idAttr": "layout-tool-ele-id",
            "elementTypeAttr": "layout-tool-ele-type",
        }

    def on_hover(self, handler: Callable[[int], None]):
        def inner_handler(e):
            handler(e.args["id"])

        return self.on("hoverChange", inner_handler)

    def on_select(self, handler: Callable[[TrackBallSelectdEventArguments], None]):
        def inner_handler(e):
            args = TrackBallSelectdEventArguments(
                sender=self,
                client=self.client,
                id=e.args["id"],
                parentBoxId=e.args["parentBoxId"],
            )
            handler(args)

        return self.on("selectedChange", inner_handler)

    async def query_style(self, id: _TNiceguiComponentId, name: str):
        return await self.run_method("queryStyle", id, name)

    def select_target(self, id: _TNiceguiComponentId):
        self.run_method("selectTarget", id)
