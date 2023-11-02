from typing import Optional
from nicegui.dataclasses import KWONLY_SLOTS
from nicegui.events import UiEventArguments
from dataclasses import dataclass


@dataclass(**KWONLY_SLOTS)
class FlexInfo:
    isFlex: bool
    direction: Optional[str]


@dataclass(**KWONLY_SLOTS)
class TrackBallSelectdEventArguments(UiEventArguments):
    id: Optional[int]
    parentBoxId: Optional[int]
    flexInfo: FlexInfo
    parentFlexInfo: FlexInfo
