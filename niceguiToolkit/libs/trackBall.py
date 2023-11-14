from typing import Callable
from nicegui.element import Element
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.layout.events import TrackBallSelectdEventArguments, FlexInfo


class TrackBall(Element, component="trackBall.js"):
    def __init__(self) -> None:
        super().__init__()
        self._props["selectorConfig"] = {
            "selectors": ".layout-tool-mark",
            "idAttr": "layout-tool-id",
            "elementTypeAttr": "layout-tool-type",
        }

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

    async def query_style(self, id: _TNiceguiComponentId, name: str):
        return await self.run_method("queryStyle", id, name)

    def select_target(self, id: _TNiceguiComponentId):
        self.run_method("selectTarget", id)
