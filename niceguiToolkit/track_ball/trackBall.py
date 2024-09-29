from pathlib import Path
from typing import Callable
import nicegui as ng_vars
from nicegui.element import Element
from niceguiToolkit.record_tracker import RecordTracker
from niceguiToolkit import events
from niceguiToolkit import consts


# from niceguiToolkit.layout.events import (
#     TrackBallSelectdEventArguments,
#     FlexInfo,
#     TrackBallCommandsEventArguments,
#     TrackBallCommandOptions,
# )

_RESOURCE = Path(__file__).parent / "lib"


class TrackBall(Element, component="trackBall.js"):
    def __init__(self) -> None:
        super().__init__()

        self.add_resource(_RESOURCE)

        self._props["selectorConfig"] = {
            "selectors": consts.MARK_SELECTOR,
            "idPrefix": consts.MARK_ID_PERFIX,
            "elementTypePrefix": consts.MARK_ELEMENT_TYPE_PERFIX,
        }
        # self._props["styleUrl"] = _STYLE_URL
        self.props("data-ng-toolkit-trackball")

        self.record_tracker = RecordTracker()

        def on_command(e):
            args = e.args
            commands = [
                events.TrackBallCommandOptions(**cmd) for cmd in args["commands"]
            ]
            arg = events.TrackBallCommandsEventArguments(
                sender=self,
                client=self.client,
                id=args["id"],
                commands=commands,
            )

            target = ng_vars.ui.context.client.elements[arg.id]

            for command in arg.commands:
                values = command.values
                if command.commandType == "set":
                    if command.action == "props":
                        for key, value in values.items():
                            target._props[key] = value
                    elif command.action == "style":
                        for key, value in values.items():
                            target.style[key] = value
                    else:
                        raise ValueError(f"unknown action {command.action}")
                elif command.commandType == "del":
                    if command.action == "props":
                        for key in values.keys():
                            del target._props[key]
                    elif command.action == "style":
                        for key in values.keys():
                            del target.style[key]
                    else:
                        raise ValueError(f"unknown action {command.action}")
                else:
                    raise ValueError(f"unknown commandType {command.commandType}")
            target.update()

        self.on("command", on_command)

    @staticmethod
    def has_in_client():
        for element in ng_vars.context.client.elements.values():
            if "data-ng-toolkit-trackball" in element._props:
                return True
        return False

    # def on_hover(self, handler: Callable[[int], None]):
    #     def inner_handler(e):
    #         handler(e.args["id"])

    #     return self.on("hoverChange", inner_handler)

    # def on_select(
    #     self,
    #     handler: Callable[[TrackBallSelectdEventArguments], None],
    # ):
    #     def inner_handler(e):
    #         args = e.args
    #         arg = TrackBallSelectdEventArguments(
    #             sender=self,
    #             client=self.client,
    #             id=args["id"],
    #             parentBoxId=args["parentBoxId"],
    #             flexInfo=FlexInfo(**args["flexInfo"]),
    #             parentFlexInfo=FlexInfo(**args["parentFlexInfo"]),
    #         )
    #         handler(arg)

    #     return self.on("selectedChange", inner_handler)

    # def on_command(
    #     self,
    #     handler: Callable[
    #         [TrackBallCommandsEventArguments],
    #         None,
    #     ],
    # ):
    #     def inner_handler(e):
    #         args = e.args
    #         commands = [TrackBallCommandOptions(**cmd) for cmd in args["commands"]]
    #         arg = TrackBallCommandsEventArguments(
    #             sender=self,
    #             client=self.client,
    #             id=args["id"],
    #             commands=commands,
    #         )
    #         handler(arg)

    #     return self.on("command", inner_handler)

    # async def query_style(self, id: _TNiceguiComponentId, name: str):
    #     return await self.run_method("queryStyle", id, name)

    # def select_target(self, id: _TNiceguiComponentId):
    #     self.run_method("selectTarget", id)

    # @staticmethod
    # def add_style_static_file():
    #     ng_vars.app.add_static_file(
    #         local_file=_STYLE_FILE,
    #         url_path=_STYLE_URL,
    #     )
