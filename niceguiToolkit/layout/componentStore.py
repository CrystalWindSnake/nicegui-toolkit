from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Dict, List, TYPE_CHECKING
from niceguiToolkit.utils.types import _TNiceguiComponentId
from niceguiToolkit.utils import codeContext
import nicegui as ng_vars
from copy import deepcopy


from dataclasses import dataclass, field
from niceguiToolkit.utils import astCore

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


class ComponentStore:
    def __init__(self) -> None:
        self.cpMapper: Dict[_TNiceguiComponentId, ComponentInfo] = {}

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
