from dataclasses import dataclass, field
from typing import Dict, Literal, List
import nicegui as ng_vars
from niceguiToolkit.services import source_code_service
from collections import defaultdict

TRecordType = Literal["props", "style", "class"]
_TNG_ELEMENT_ID = int


@dataclass
class Command:
    property_name: str

    def apply(self, style_dict: Dict[str, str]) -> None:
        raise NotImplementedError()


@dataclass
class AddStyleCommand(Command):
    value: str

    def apply(self, style_dict: Dict[str, str]):
        style_dict[self.property_name] = self.value


@dataclass
class RemoveStyleCommand(Command):
    def apply(self, style_dict: Dict[str, str]):
        style_dict.pop(self.property_name, None)


@dataclass
class Record:
    commands: List[Command] = field(default_factory=list)
    applied: bool = False


class RecordTracker:
    def __init__(self):
        self.records: defaultdict[_TNG_ELEMENT_ID, Record] = defaultdict(Record)

    def add_record(
        self,
        ng_element_id: _TNG_ELEMENT_ID,
        property_name: str,
        value: str,
    ):
        record = self.records[ng_element_id]
        record.commands.append(AddStyleCommand(property_name, value))

    def apply_records(self):
        for element_id, record in self.records.items():
            target = ng_vars.context.client.elements.get(element_id)
            if target is not None:
                style_data = _Helper.create_style_data(target, record.commands)
                source_code_service.apply_style_code(target, style_data)

    def remove_record(self, ng_element_id: _TNG_ELEMENT_ID, property_name: str):
        record = self.records[ng_element_id]
        record.commands.append(RemoveStyleCommand(property_name))

    def get_style_data(self, target: ng_vars.ui.element):
        record = self.records.get(target.id)
        if record is not None:
            return _Helper.create_style_data(target, record.commands)
        return {}

    def clear_records(self):
        self.records.clear()


class _Helper:
    @staticmethod
    def create_style_data(
        target: ng_vars.ui.element, commands: List[Command]
    ) -> Dict[str, str]:
        style_data = target._style.copy()
        for command in commands:
            command.apply(style_data)
        return style_data
