from pathlib import Path
import nicegui as ng_vars
from nicegui.element import Element
from niceguiToolkit.record_tracker import RecordTracker
from niceguiToolkit import events
from niceguiToolkit import consts


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
        self._props["currentTargetContext"] = {"props": {}, "styles": {}}
        self.props("data-ng-toolkit-trackball")

        self.record_tracker = RecordTracker()

        self._register_setCommand_event()
        self._register_select_event()
        self._register_resetCommand_event()

    def _register_setCommand_event(self):
        def on_command(e):
            args = e.args
            commands = [
                events.TrackBallSetCommandOptions(**cmd) for cmd in args["commands"]
            ]
            arg = events.TrackBallSetCommandsEventArguments(
                sender=self,
                client=self.client,
                id=args["id"],
                commands=commands,
            )

            target = ng_vars.ui.context.client.elements[arg.id]

            for command in arg.commands:
                values = command.values
                for key, value in values.items():
                    target._style[key] = value

            target.update()

        self.on("setCommand", on_command)

    def _register_select_event(self):
        def on_select(e):
            args = e.args
            arg = events.TrackBallSelectdEventArguments(
                sender=self,
                client=self.client,
                id=args["id"],
                parentBoxId=args["parentBoxId"],
                flexInfo=events.FlexInfo(**args["flexInfo"]),
                parentFlexInfo=events.FlexInfo(**args["parentFlexInfo"]),
            )

            if not arg.id:
                return

            target = ng_vars.ui.context.client.elements[arg.id]
            self._props["currentTargetContext"] = {
                "props": target._props,
                "styles": target._style,
            }

            self.update()

        self.on("selectedChange", on_select)

    def _register_resetCommand_event(self):
        def on_reset_command(e):
            args = e.args
            commands = [
                events.TrackBallResetCommandOptions(**cmd) for cmd in args["commands"]
            ]
            arg = events.TrackBallResetCommandsEventArguments(
                sender=self,
                client=self.client,
                id=args["id"],
                commands=commands,
            )

            target = ng_vars.ui.context.client.elements[arg.id]

            for command in arg.commands:
                name = command.propertyName

                if command.type == "style":
                    del target._style[name]
                elif command.type == "prop":
                    del target._props[name]
                elif command.type == "classes":
                    target._classes.remove(name)

            target.update()

        self.on("resetCommand", on_reset_command)

    @staticmethod
    def has_in_client():
        for element in ng_vars.context.client.elements.values():
            if "data-ng-toolkit-trackball" in element._props:
                return True
        return False
