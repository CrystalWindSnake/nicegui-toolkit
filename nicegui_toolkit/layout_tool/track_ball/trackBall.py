from pathlib import Path
from typing import Dict, List, Optional
import nicegui as ng_vars
from nicegui.element import Element
from nicegui_toolkit.layout_tool.record_tracker import RecordTracker
from nicegui_toolkit.layout_tool import events
from nicegui_toolkit.layout_tool import consts
import nicegui_toolkit.layout_tool.services.source_code_service as source_code_service
from nicegui_toolkit.layout_tool.element_tree import get_tree_data
import nicegui_toolkit.layout_tool.language as language
from nicegui_toolkit.layout_tool.types import _T_language_locale
import nicegui_toolkit.systems.caller_system as caller_system

_RESOURCE = Path(__file__).parent / "libs"


class TrackBall(Element, component="trackBall.js"):
    def __init__(
        self,
        language_locale: _T_language_locale = "en",
        is_testing=False,
    ) -> None:
        super().__init__()

        self._is_testing = is_testing

        self.add_resource(_RESOURCE)
        self._current_target_id: Optional[int] = None

        self._props["selectorConfig"] = {
            "selectors": consts.MARK_SELECTOR,
            "idPrefix": consts.MARK_ID_PERFIX,
            "elementTypePrefix": consts.MARK_ELEMENT_TYPE_PERFIX,
            "sourceCodePrefix": consts.MARK_SOURCE_CODE_PERFIX,
        }
        self._props["currentTargetContext"] = {"props": {}, "styles": {}}
        self.props("data-ng-toolkit-trackball")
        self._props["elementTreeData"] = get_tree_data()
        self._props["languageConfig"] = language.get_preset(language_locale)

        self.record_tracker = RecordTracker()

        self._register_setCommand_event()
        self._register_select_event()
        self._register_resetCommand_event()
        self._register_jump_source_code()
        self._register_apply_command_event()
        self._register_classes_update_event()
        self._register_init_event()

        self._send_message_track_record()
        self._send_message_testing(is_testing=self._is_testing)

    def _register_init_event(self):
        def on_init():
            caller_system.clear_cache()

        self.on("init", on_init)

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

                    self.record_tracker.add_style(target.id, key, value)

            target.update()
            self._update_current_target_context()
            self._send_message_track_record()

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

                self.record_tracker.remove_style(target.id, name)

            target.update()
            self._update_current_target_context()

            self._send_message_server_reset_command(arg.commands[0].propertyName)
            self._send_message_track_record()

        self.on("resetCommand", on_reset_command)

    def _register_jump_source_code(self):
        def on_jump_source_code(e):
            args = e.args

            target = self.get_current_target_element()
            if target is None:
                ng_vars.ui.notify("No target selected")
                return

            info = source_code_service.get_source_code_info(target)
            source_code_service.jump_to_source_code(info, {})

        self.on("jumpSourceCode", on_jump_source_code)

    def _register_apply_command_event(self):
        def on_apply_command(e):
            args = e.args

            if self._is_testing:
                self._send_message_testing(
                    content=self.record_tracker.get_testing_content()
                )
            else:
                self.record_tracker.apply_records()

        self.on("applyCommand", on_apply_command)

    def _register_classes_update_event(self):
        def on_classes_update(e):
            args = e.args
            target_id = args["targetId"]
            target = self.get_current_target_element(target_id)
            assert target is not None, "target should not be None"

            classes = args["classes"]
            self.record_tracker.add_classes(target.id, classes)

            self._update_current_target_context()
            target.update()
            self._send_message_track_record()

        self.on("classesUpdate", on_classes_update)

    def _update_current_target_context(self):
        target = self.get_current_target_element()
        context = {}
        if target is not None:
            context = {
                "props": target._props,
                "styles": target._style,
                "propsCode": source_code_service.create_props_code(target),
                "stylesCode": source_code_service.create_style_code(
                    self.record_tracker.get_style_data(target)
                ),
                "classes": _Helper.extract_classes_list(target, self.record_tracker),
            }

        self._props["currentTargetContext"] = context
        self.update()

    def get_current_target_element(self, target_id: Optional[int] = None):
        target_id = target_id or self._current_target_id
        if target_id is None:
            return None
        return ng_vars.ui.context.client.elements[target_id]

    def _send_message(self, message: Dict):
        self.run_method("sendMessage", message)

    def _send_message_server_reset_command(self, property_name: str):
        self._send_message({"serverResetCommand": {"propertyName": property_name}})

    def _send_message_track_record(self):
        info = {
            "hasChanged": self.record_tracker.has_changes(),
        }
        self._send_message({"trackRecord": info})

    def _send_message_testing(
        self, is_testing: Optional[bool] = None, content: Optional[str] = None
    ):
        info = {}
        if is_testing is not None:
            info["isTesting"] = is_testing
        if content is not None:
            info["content"] = content
        self._send_message({"testing": info})

    @staticmethod
    def has_in_client():
        for element in ng_vars.context.client.elements.values():
            if "data-ng-toolkit-trackball" in element._props:
                return True
        return False


class _Helper:
    @staticmethod
    def extract_classes_list(element: Element, tracker: RecordTracker) -> List[str]:
        record = tracker.records.get(element.id, None)
        if record and record.classes_command:
            return record.classes_command.classes

        classes_info = source_code_service.get_classes_info(element)

        if classes_info is None:
            return []

        return classes_info.add_classes_str.split()
