from dataclasses import dataclass, field
from typing import Dict, Literal, List, Optional
import nicegui as ng_vars
from nicegui_toolkit.layout_tool.services import source_code_service
from collections import defaultdict
import nicegui_toolkit.systems.file_system as file_system

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
        commits = _Helper.generate_commits(self)
        for commit in commits:
            code = source_code_service.create_file_code(commit)
            file_system.str_to_file(commit.file, code)

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

    def get_testing_content(self):
        commits = _Helper.generate_commits(self)

        lines = []

        for commit in commits:
            lines.append(f"{commit.file.name}:")

            code = source_code_service.create_file_code(commit)
            lines.append(code)

        return "\n".join(lines)


class _Helper:
    @staticmethod
    def create_style_data(
        target: ng_vars.ui.element, commands: List[StyleCommand], exclude_exist=False
    ) -> Dict[str, str]:
        style_data = {} if exclude_exist else target._style.copy()
        for command in commands:
            command.apply(style_data)
        return style_data

    @staticmethod
    def generate_commits(tracker: RecordTracker):
        from dataclasses import dataclass
        from itertools import groupby

        @dataclass
        class Model:
            element_id: int
            record: Record

            def __post_init__(self):
                self.target = ng_vars.context.client.elements.get(self.element_id, None)
                assert self.target is not None
                self.style_info = source_code_service.get_style_info(self.target)
                self.caller_info = source_code_service.get_source_code_info(self.target)

            def has_style_apply(self):
                return len(self.record.style_commands) > 0

            def get_style_code(self):
                assert self.target is not None
                style_data = _Helper.create_style_data(
                    self.target, self.record.style_commands
                )
                style_code = source_code_service.create_style_code(style_data)

                if self.apply_type() == "add":
                    return f'.style("{style_code}")'
                else:
                    return f'"{style_code}"'

            def apply_type(self):
                if self.style_info is not None:
                    return "replace"
                return "add"

            def get_start_lineno(self):
                if self.style_info is not None:
                    return self.style_info.lineno
                return self.caller_info.lineno

            def get_end_lineno(self):
                if self.style_info is not None:
                    return self.style_info.end_lineno
                return self.caller_info.end_lineno

            def get_start_col(self):
                if self.style_info is not None:
                    return self.style_info.start_col
                return self.caller_info.start_col

            def get_end_col(self):
                if self.style_info is not None:
                    return self.style_info.end_col
                return self.caller_info.end_col

        models = [
            Model(element_id, record) for element_id, record in tracker.records.items()
        ]

        models_sorted = groupby(
            sorted(models, key=lambda x: x.caller_info.filename),
            lambda x: x.caller_info.filename,
        )

        for filename, models_in_file in models_sorted:
            actions = []
            for model in models_in_file:
                if model.has_style_apply():
                    actions.append(
                        source_code_service.Action(
                            model.get_start_lineno(),
                            model.get_end_lineno(),
                            model.get_start_col(),
                            model.get_end_col(),
                            model.apply_type(),
                            code=model.get_style_code(),
                        )
                    )

            commit = source_code_service.Commit(filename, actions)
            yield commit
