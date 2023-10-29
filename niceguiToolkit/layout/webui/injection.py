from __future__ import annotations

from dataclasses import dataclass

from typing import TYPE_CHECKING

from nicegui import ui

if TYPE_CHECKING:
    from niceguiToolkit.layout.componentStore import ComponentStore, ComponentInfo
    from niceguiToolkit.libs.trackBall import TrackBall


@dataclass
class Provider:
    track_ball: TrackBall
    store: ComponentStore
    message_zone: ui.refreshable
    functional_zone: ui.refreshable
    apply_zone: ui.refreshable
