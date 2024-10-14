from dataclasses import dataclass, field
from typing import Dict, Literal, List, Optional
import nicegui as ng_vars
from nicegui_toolkit.layout_tool.services import source_code_service
from collections import defaultdict

TRecordType = Literal["props", "style", "class"]
_TNG_ELEMENT_ID = int


@dataclass
class StyleCommand:
    property_name: str

    def apply(self, style_dict: Dict[str, str]) -> None:
        raise NotImplementedError()


@dataclass
class AddStyleCommand(StyleCommand):
    value: str

    def apply(self, style_dict: Dict[str, str]):
        style_dict[self.property_name] = self.value


@dataclass
class RemoveStyleCommand(StyleCommand):
    def apply(self, style_dict: Dict[str, str]):
        style_dict.pop(self.property_name, None)


@dataclass
class ClassesUpdateCommand:
    classes: List[str] = field(default_factory=list)


@dataclass
class Record:
    style_commands: List[StyleCommand] = field(default_factory=list)
    classes_command: Optional[ClassesUpdateCommand] = None
    applied: bool = False

    def has_changes(self):
        return len(self.style_commands) > 0 or self.classes_command is not None


class RecordTracker:
    def __init__(self):
        self.records: defaultdict[_TNG_ELEMENT_ID, Record] = defaultdict(Record)

    def has_changes(self):
        return any(record.has_changes() for record in self.records.values())

    def add_style(
        self,
        ng_element_id: _TNG_ELEMENT_ID,
        property_name: str,
        value: str,
    ):
        record = self.records[ng_element_id]
        record.style_commands.append(AddStyleCommand(property_name, value))

    def add_classes(self, ng_element_id: _TNG_ELEMENT_ID, classes: List[str]):
        record = self.records[ng_element_id]
        if record.classes_command is None:
            record.classes_command = ClassesUpdateCommand()
        record.classes_command.classes = classes

    def apply_records(self):
        for element_id, record in self.records.items():
            target = ng_vars.context.client.elements.get(element_id, None)
            if target is not None:
                style_data = _Helper.create_style_data(target, record.style_commands)
                source_code_service.apply_style_code(target, style_data)

                if record.classes_command is not None:
                    source_code_service.apply_classes_code(
                        target, record.classes_command.classes
                    )

    def remove_style(self, ng_element_id: _TNG_ELEMENT_ID, property_name: str):
        record = self.records[ng_element_id]
        record.style_commands.append(RemoveStyleCommand(property_name))

    def get_style_data(self, target: ng_vars.ui.element, exclude_exist=False):
        record = self.records.get(target.id)
        if record is not None:
            return _Helper.create_style_data(
                target, record.style_commands, exclude_exist
            )
        return {} if exclude_exist else target._style.copy()

    def clear_records(self):
        self.records.clear()


class _Helper:
    @staticmethod
    def create_style_data(
        target: ng_vars.ui.element, commands: List[StyleCommand], exclude_exist=False
    ) -> Dict[str, str]:
        style_data = {} if exclude_exist else target._style.copy()
        for command in commands:
            command.apply(style_data)
        return style_data
