from __future__ import annotations
from typing import Dict, List, Optional, Tuple
import nicegui as ng_vars
from dataclasses import dataclass, field
from nicegui_toolkit.layout_tool import consts
from collections import deque


def get_tree_data() -> List[Dict]:
    root = ng_vars.context.client.content
    top_node = ElementNode(id=-1, title="top_node")
    # list of (parent node, element)
    stack: deque[Tuple[ElementNode, ng_vars.ui.element]] = deque([(top_node, root)])

    while stack:
        parent_node, element = stack.pop()

        current_node = _ng_element_to_tree_node(element)
        parent_node.children.append(current_node)
        has_parent = parent_node is not None

        if has_parent:
            for child in _get_children(element):
                if consts.SELECTOR_CLASS_NAME not in child._classes:
                    continue
                stack.append((current_node, child))
        else:
            pass

    ng_content_node = top_node.children[0]
    ng_content_node.id = -1
    ng_content_node.selectable = False
    ng_content_node.title = "nicegui content"
    return [ng_content_node.to_dict()]


def _get_children(element: ng_vars.ui.element):
    return reversed(list(element))


def _ng_element_to_tree_node(element: ng_vars.ui.element):
    return ElementNode(id=element.id, title=element.__class__.__name__)


@dataclass
class ElementNode:
    id: int
    title: str
    children: List[ElementNode] = field(default_factory=list)
    selectable: Optional[bool] = None

    def to_dict(self):
        data = {
            "key": self.id,
            "title": self.title,
            "children": [child.to_dict() for child in self.children],
        }

        if self.selectable is not None:
            data["selectable"] = self.selectable

        return data
