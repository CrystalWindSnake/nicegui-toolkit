from pathlib import Path
from typing import Optional
import nicegui as ng_vars
from nicegui.element import Element
from niceguiToolkit.record_tracker import RecordTracker
from niceguiToolkit import events
from niceguiToolkit import consts
from niceguiToolkit.utils import code as code_utils


_RESOURCE = Path(__file__).parent / "lib"


class TrackBall(Element, component="trackBall.js"):
    def __init__(self) -> None:
        super().__init__()

        self.add_resource(_RESOURCE)
        self._current_target_id: Optional[int] = None

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

            target = self.get_current_target_element()
            assert target is not None, "target should not be None"

            for command in arg.commands:
                values = command.values
                for key, value in values.items():
                    target._style[key] = value

                    self.record_tracker.add_record(target.id, key)

            target.update()
            self._update_current_target_context()

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

            self._current_target_id = arg.id

            self._update_current_target_context()

            target = self.get_current_target_element()
            if target is None:
                return

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

            target = self.get_current_target_element()
            assert target is not None, "target should not be None"

            for command in arg.commands:
                name = command.propertyName

                if command.type == "style":
                    del target._style[name]
                elif command.type == "prop":
                    del target._props[name]
                elif command.type == "classes":
                    target._classes.remove(name)

                self.record_tracker.remove_record(target.id, name)

            target.update()
            self._update_current_target_context()
            self.run_method("onServerResetCommand", arg.commands[0].propertyName)

        self.on("resetCommand", on_reset_command)

    def _update_current_target_context(self):
        target = self.get_current_target_element()
        context = {}
        if target is not None:
            context = {
                "props": target._props,
                "styles": target._style,
                "propsCode": code_utils.create_props_code(target),
                "stylesCode": code_utils.create_style_code(target),
            }

        self._props["currentTargetContext"] = context
        self.update()

    def get_current_target_element(self):
        if self._current_target_id is None:
            return None
        return ng_vars.ui.context.client.elements[self._current_target_id]

    @staticmethod
    def has_in_client():
        for element in ng_vars.context.client.elements.values():
            if "data-ng-toolkit-trackball" in element._props:
                return True
        return False
