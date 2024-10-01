from dataclasses import dataclass, field
from typing import Any, Dict, Literal, Callable, List
from nicegui import ui

TRecordType = Literal["props", "style", "class"]
_TNG_ELEMENT_ID = int


@dataclass
class Command:
    property_name: str


@dataclass
class Record:
    ng_element_id: _TNG_ELEMENT_ID
    commands: List[Command] = field(default_factory=list)
    applied: bool = False

    def __hash__(self):
        return hash(self.ng_element_id)

    def __eq__(self, other):
        if isinstance(other, Record):
            return self.ng_element_id == other.ng_element_id
        return False


class RecordTracker:
    def __init__(self):
        self.records: Dict[_TNG_ELEMENT_ID, Record] = {}

    def add_record(
        self,
        ng_element_id: _TNG_ELEMENT_ID,
        property_name: str,
    ):
        record = self.records.get(ng_element_id)
        if record is None:
            record = Record(ng_element_id)
            self.records[ng_element_id] = record
        record.commands.append(Command(property_name))

    def apply_records(self):
        pass

    def remove_record(self, ng_element_id: _TNG_ELEMENT_ID, property_name: str):
        record = self.records.get(ng_element_id)
        if record is not None:
            record.commands = [
                command
                for command in record.commands
                if command.property_name != property_name
            ]

    # def has_unapplied_records(self) -> bool:
    #     for record in self.records.values():
    #         if not all(command.applied for command in record.commands):
    #             return True
    #     return False

    def clear_records(self):
        self.records.clear()
