from typing import Dict, List, Optional, Literal
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
class TrackBallCommandOptions:
    action: Literal["style", "props"]
    commandType: Literal["set", "del"]
    values: Dict


@dataclass(**KWONLY_SLOTS)
class TrackBallCommandsEventArguments(UiEventArguments):
    id: int
    commands: List[TrackBallCommandOptions]
