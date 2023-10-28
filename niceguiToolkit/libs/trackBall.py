from typing import Callable
from nicegui.element import Element


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

    def on_select(self, handler: Callable[[int], None]):
        def inner_handler(e):
            handler(e.args["id"])

        return self.on("selectedChange", inner_handler)
