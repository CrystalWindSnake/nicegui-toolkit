from dataclasses import dataclass, field
from typing import Dict, Literal, Callable, List
from nicegui import ui

TRecordType = Literal["props", "style", "class"]
_TNG_ELEMENT_ID = int


@dataclass
class Command:
    type: TRecordType
    fn: Callable[[ui.element], None]
    applied: bool = False


@dataclass(frozen=True)
class Record:
    ng_element_id: _TNG_ELEMENT_ID
    commands: List[Command] = field(default_factory=list)

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
        type: TRecordType,
        command_fn: Callable[[ui.element], None],
    ):
        record = self.records.get(ng_element_id)
        if record is None:
            record = Record(ng_element_id)
            self.records[ng_element_id] = record
        record.commands.append(Command(type, command_fn))

    def apply_records(self):
        for record in self.records.values():
            target = ui.context.client.elements.get(record.ng_element_id)

            if target is None:
                raise ValueError(f"element with id {record.ng_element_id} not found")

            for command in record.commands:
                command.fn(target)
                command.applied = True

    def has_unapplied_records(self) -> bool:
        for record in self.records.values():
            if not all(command.applied for command in record.commands):
                return True
        return False

    def clear_records(self):
        self.records.clear()
