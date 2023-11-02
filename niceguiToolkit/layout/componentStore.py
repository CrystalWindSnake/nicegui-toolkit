from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Dict, List, TYPE_CHECKING, Set
from itertools import groupby, chain
import nicegui as ng_vars
from pathlib import Path
from dataclasses import dataclass, field
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.utils import astCore


if TYPE_CHECKING:
    from niceguiToolkit.libs.trackBall import TrackBall


@dataclass
class ComponentInfo:
    id: _TNiceguiComponentId
    typeName: str
    sourceCodeInfo: astCore._T_source_code_info
    styles: Dict = field(default_factory=dict)
    props: Dict[str, Any] = field(default_factory=dict)
    classes: List[str] = field(default_factory=list)

    stylesHistory: Dict[str, str] = field(default_factory=dict)
    classesHistory: List[str] = field(default_factory=list)

    def create_style_code(self):
        has_style_call = self.sourceCodeInfo.style.has
        lineno = (
            self.sourceCodeInfo.style.lineno
            if has_style_call
            else self.sourceCodeInfo.entry_point.positions.lineno
        ) or 0
        end_lineno = (
            self.sourceCodeInfo.style.end_lineno
            if has_style_call
            else self.sourceCodeInfo.entry_point.positions.end_lineno
        ) or 0
        col_offset = (
            self.sourceCodeInfo.style.col_offset + 1
            if has_style_call
            else self.sourceCodeInfo.entry_point.positions.end_col_offset
        ) or 0
        end_col_offset = (
            (self.sourceCodeInfo.style.end_col_offset or 0) - 1
            if has_style_call
            else self.sourceCodeInfo.entry_point.positions.end_col_offset
        ) or col_offset

        code = ";".join(f"{name}:{value}" for name, value in self.stylesHistory.items())
        if not has_style_call:
            code = f'.style("{code}")'

        return astCore._T_apply_code_record(
            code, lineno, end_lineno, col_offset, end_col_offset
        )

    def create_classes_code(self):
        has_classes_call = self.sourceCodeInfo.classes.has
        lineno = (
            self.sourceCodeInfo.classes.lineno
            if has_classes_call
            else self.sourceCodeInfo.entry_point.positions.lineno
        ) or 0
        end_lineno = (
            self.sourceCodeInfo.classes.end_lineno
            if has_classes_call
            else self.sourceCodeInfo.entry_point.positions.end_lineno
        ) or 0
        col_offset = (
            self.sourceCodeInfo.classes.col_offset
            if has_classes_call
            else self.sourceCodeInfo.entry_point.positions.end_col_offset
        ) or 0
        end_col_offset = (
            self.sourceCodeInfo.classes.end_col_offset
            if has_classes_call
            else self.sourceCodeInfo.entry_point.positions.end_col_offset
        ) or col_offset

        code = " ".join(self.classesHistory)

        return astCore._T_apply_code_record(
            code, lineno, end_lineno, col_offset, end_col_offset
        )


@dataclass
class _T_create_changed_records:
    file: Path
    code: str


class ComponentStore:
    def __init__(self) -> None:
        self.cpMapper: Dict[_TNiceguiComponentId, ComponentInfo] = {}
        self._styles_records: Set[_TNiceguiComponentId] = set()
        self._classes_records: Set[_TNiceguiComponentId] = set()

    def _set_componentInfo(
        self,
        component_type_name: str,
        component_id: _TNiceguiComponentId,
        code_info: astCore._T_source_code_info,
    ):
        cp_info = ComponentInfo(component_id, component_type_name, code_info)
        self.cpMapper[component_id] = cp_info

        if code_info.style.has:
            style_str = astCore.get_call_content(code_info, code_info.style)
            cp_info.stylesHistory.update(ng_vars.ui.element._parse_style(style_str))

        if code_info.classes.has:
            classes_str = astCore.get_call_content(code_info, code_info.classes)
            cp_info.classesHistory = ng_vars.ui.element._update_classes_list(
                cp_info.classesHistory, classes_str
            )

    def set_componentInfo(
        self, component: ng_vars.ui.element, code_info: astCore._T_source_code_info
    ):
        self._set_componentInfo(type(component).__name__, component.id, code_info)

    def _collect_component_info(
        self, component_info: ComponentInfo, styles: Dict[str, str], cleasses: List[str]
    ):
        component_info.styles = {**styles}
        component_info.classes = [c for c in cleasses]

    def collect_component_infos(self, client: ng_vars.Client):
        for id, info in self.cpMapper.items():
            ele = client.elements[id]
            self._collect_component_info(info, ele._style, ele._classes)

    def get_info(self, id: _TNiceguiComponentId):
        return self.cpMapper[id]

    def change_styles(self, id: _TNiceguiComponentId, styles: Dict[str, str]):
        self.get_info(id).stylesHistory.update(styles)
        self._styles_records.add(id)

    def remove_styles(self, id: _TNiceguiComponentId, style_names: List[str]):
        stylesHistory = self.get_info(id).stylesHistory
        for name in style_names:
            if name in stylesHistory:
                del stylesHistory[name]
        self._styles_records.add(id)

    def change_classes(self, id: _TNiceguiComponentId, classes: List[str]):
        self.get_info(id).classesHistory.extend(classes)
        self._classes_records.add(id)

    def create_changed_records(self):
        style_infos = (self.get_info(id) for id in self._styles_records)
        style_infos = [(info, info.create_style_code()) for info in style_infos]

        classes_infos = (self.get_info(id) for id in self._classes_records)
        classes_infos = [(info, info.create_classes_code()) for info in classes_infos]

        need_infos = chain(style_infos, classes_infos)

        for file_path, gp in groupby(
            sorted(need_infos, key=lambda m: m[0].sourceCodeInfo.entry_point.file),
            key=lambda m: m[0].sourceCodeInfo.entry_point.file,
        ):
            records = (item[1] for item in gp)
            code_lines = astCore.apply_code(file_path, records)

            code = "\n".join(code_lines)
            yield _T_create_changed_records(file_path, code)

    def clear_records(self):
        self._styles_records.clear()
        self._classes_records.clear()

    def clear_all_data(self):
        self.cpMapper.clear()
        self.clear_records()


class StoreManager:
    def __init__(self) -> None:
        self.map: Dict[str, ComponentStore] = {}
        self.shadow_store_map: Dict[str, ComponentStore] = {}
        self.track_ball_map: Dict[str, TrackBall] = {}

    def build_store_from_shadow(self, client_id: str):
        if client_id in self.map:
            return self.map[client_id]
        store = self.shadow_store_map[client_id]
        self.map[client_id] = store
        del self.shadow_store_map[client_id]
        return store

    def try_get_shadow_store(self, client_id: str):
        store = self.shadow_store_map.get(client_id)
        if store is None:
            store = ComponentStore()
            self.shadow_store_map[client_id] = store
        return store

    def get_store(self, client_id: str):
        return self.map[client_id]

    def remove_resource(self, client_id: str):
        self.map[client_id].clear_all_data()
        del self.map[client_id]

    def exists_track_ball(self, client_id: str):
        return client_id in self.track_ball_map

    def save_track_ball(self, client_id: str, ball: TrackBall):
        self.track_ball_map[client_id] = ball
