from typing import Any, Dict, List, Optional, Literal
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


@dataclass(**KWONLY_SLOTS)
class TrackBallSetCommandOptions:
    propertyName: str
    values: Dict[str, Any]


@dataclass(**KWONLY_SLOTS)
class TrackBallSetCommandsEventArguments(UiEventArguments):
    id: int
    commands: List[TrackBallSetCommandOptions]


@dataclass(**KWONLY_SLOTS)
class TrackBallResetCommandOptions:
    propertyName: str
    type: Literal["style", "props", "classes"]


@dataclass(**KWONLY_SLOTS)
class TrackBallResetCommandsEventArguments(UiEventArguments):
    id: int
    commands: List[TrackBallResetCommandOptions]
