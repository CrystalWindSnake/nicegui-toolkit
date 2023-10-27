from dataclasses import dataclass
from typing import Any, Dict, List
from niceguiToolkit.utils.types import _TNiceguiComponentId
import nicegui as ng_vars
from copy import deepcopy

from dataclasses import dataclass, field


@dataclass
class ComponentInfo:
    typeName: str
    styles: Dict = field(default_factory=dict)
    props: Dict[str, Any] = field(default_factory=dict)
    classes: List[str] = field(default_factory=list)


class ComponentStore:
    def __init__(self) -> None:
        self.cpMapper: Dict[_TNiceguiComponentId, ComponentInfo] = {}

    def set_componentInfo(self, component: ng_vars.ui.element):
        self.cpMapper[component.id] = ComponentInfo(type(component).__name__)

    def collect_component_infos(self, client: ng_vars.Client):
        for id, info in self.cpMapper.items():
            ele = client.elements[id]
            info.styles = {**ele._style}
            info.props = deepcopy(ele._props)
            info.classes = [c for c in ele._classes]

    def get_info(self, id: _TNiceguiComponentId):
        return self.cpMapper[id]
