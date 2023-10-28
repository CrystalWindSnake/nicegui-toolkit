from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Dict, List, TYPE_CHECKING, Set
from itertools import groupby, chain
import nicegui as ng_vars
from copy import deepcopy

from dataclasses import dataclass, field
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.utils import codeContext, astCore


if TYPE_CHECKING:
    from niceguiToolkit.utils.codeContext import _T_get_source_code_info


@dataclass
class ComponentInfo:
    typeName: str
    sourceCodeInfo: _T_get_source_code_info
    astInfo: astCore._T_get_ast_infos
    styles: Dict = field(default_factory=dict)
    props: Dict[str, Any] = field(default_factory=dict)
    classes: List[str] = field(default_factory=list)

    stylesHistory: Dict[str, str] = field(default_factory=dict)
    classesHistory: List[str] = field(default_factory=list)

    def create_style_code(self):
        has_style_call = self.astInfo.style.has
        lineno = (
            self.astInfo.style.lineno
            if has_style_call
            else self.sourceCodeInfo.positions.lineno
        )
        col_offset = (
            self.astInfo.style.col_offset
            if has_style_call
            else self.sourceCodeInfo.positions.col_offset
        )
        return astCore._T_apply_code_record("", lineno or 0, col_offset or 0)

    def create_classes_code(self):
        has_classes_call = self.astInfo.classes.has
        lineno = (
            self.astInfo.classes.lineno
            if has_classes_call
            else self.sourceCodeInfo.positions.lineno
        )
        col_offset = (
            self.astInfo.classes.col_offset
            if has_classes_call
            else self.sourceCodeInfo.positions.col_offset
        )
        return astCore._T_apply_code_record("", lineno or 0, col_offset or 0)


class ComponentStore:
    def __init__(self) -> None:
        self.cpMapper: Dict[_TNiceguiComponentId, ComponentInfo] = {}
        self._styles_records: Set[_TNiceguiComponentId] = set()
        self._classes_records: Set[_TNiceguiComponentId] = set()

    def set_componentInfo(self, component: ng_vars.ui.element):
        code_info = codeContext.get_source_code_info()
        ast_info = astCore.get_ast_infos(code_info)
        self.cpMapper[component.id] = ComponentInfo(
            type(component).__name__, code_info, ast_info
        )

    def collect_component_infos(self, client: ng_vars.Client):
        for id, info in self.cpMapper.items():
            ele = client.elements[id]
            info.styles = {**ele._style}
            info.props = deepcopy(ele._props)
            info.classes = [c for c in ele._classes]

    def get_info(self, id: _TNiceguiComponentId):
        return self.cpMapper[id]

    def change_styles(self, id: _TNiceguiComponentId, styles: Dict[str, str]):
        self.get_info(id).stylesHistory.update(styles)
        self._styles_records.add(id)

    def change_classes(self, id: _TNiceguiComponentId, classes: List[str]):
        self.get_info(id).classesHistory.extend(classes)
        self._classes_records.add(id)

    def apply_changed(self):
        style_infos = (self.get_info(id) for id in self._styles_records)
        style_infos = [(info, info.create_style_code()) for info in style_infos]

        classes_infos = (self.get_info(id) for id in self._classes_records)
        classes_infos = [(info, info.create_classes_code()) for info in classes_infos]

        need_infos = chain(style_infos, classes_infos)

        for key, gp in groupby(
            sorted(need_infos, key=lambda m: m[0].sourceCodeInfo.callerSourceCodeFile),
            key=lambda m: m[0].sourceCodeInfo.callerSourceCodeFile,
        ):
            records = (item[1] for item in gp)
            astCore.apply_code(key, records)
