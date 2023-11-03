from __future__ import annotations
from typing import Callable, Dict, TYPE_CHECKING, List, Union
from nicegui import context
from functools import lru_cache

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentInfo
    from niceguiToolkit.layout.webui.injection import Provider
    from niceguiToolkit.layout.events import FlexInfo


from dataclasses import dataclass


class T_BuilderContext:
    def __init__(
        self,
        flex_info: FlexInfo,
        parent_flex_info: FlexInfo,
        provider: Provider,
        info: ComponentInfo,
    ) -> None:
        self.flex_info = flex_info
        self.parent_flex_info = parent_flex_info
        self._provider = provider
        self._info = info

    @property
    @lru_cache
    def element(self):
        return context.get_client().elements[self._info.id]

    def apply_styles(self, styles: Dict[str, str]):
        cp = self.element
        cp._style.update(styles)
        self._provider.store.change_styles(self._info.id, styles)
        cp.update()
        self._provider.apply_zone.refresh(enable=True)

    def remove_styles(self, style_names: Union[List[str], str]):
        style_names = [style_names] if isinstance(style_names, str) else style_names
        cp = self.element

        for name in style_names:
            if name in cp._style:
                del cp._style[name]

        self._provider.store.remove_styles(self._info.id, style_names)
        cp.update()
        self._provider.apply_zone.refresh(enable=True)


@dataclass
class T_Builder:
    title: str
    is_show_fn: Callable[[T_BuilderContext], bool]
    build_fn: Callable[[T_BuilderContext], None]
    order: int = 1
