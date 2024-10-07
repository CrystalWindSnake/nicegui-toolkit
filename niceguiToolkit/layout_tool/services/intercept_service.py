import types
from typing import List
import nicegui as ng
from niceguiToolkit.layout_tool.services import source_code_service
from niceguiToolkit.systems.caller_system import get_lazy_caller_info, LazyCallerInfo
import inspect
from pathlib import Path
from dataclasses import dataclass, field
from . import utils
import niceguiToolkit.layout_tool.consts as consts

EXCLUDE_INJECT_NG_CLASSES = ["Query", "QueryElement", "TrackBall"]


@dataclass
class HookerContext:
    include_folders: List[Path] = field(default_factory=list)


class Hooker:
    def __init__(self, context: HookerContext):
        self.context = context

    def hook_ui_element_method(self):
        org_init = ng.ui.element.__init__
        context = self.context

        def wrap_init(self: ng.ui.element, *args, **kws):
            # TODO:Exclude own component construction
            org_init(self, *args, **kws)

            if type(self).__name__ in EXCLUDE_INJECT_NG_CLASSES:
                return

            frame = inspect.currentframe()  # type: ignore
            assert frame is not None
            frame = _Helper.get_frame_with_file_name(frame.f_back, context)
            if frame is None:
                return
            info = get_lazy_caller_info(frame)

            Hooker._mark_element(self, info)

            Hooker.inject_style_method(self, context)

        ng.ui.element.__init__ = wrap_init

    @staticmethod
    def _mark_element(ele: ng.ui.element, info: LazyCallerInfo):
        vscode_url = f"vscode://file/{info.filename}:{info.lineno}:{info.end_col}"

        ele._classes.extend(
            [
                consts.SELECTOR_CLASS_NAME,
                f"{consts.MARK_ID_PERFIX}{ele.id}",
                f"{consts.MARK_ELEMENT_TYPE_PERFIX}{type(ele).__name__}",
                f"{consts.MARK_SOURCE_CODE_PERFIX}{vscode_url}",
            ]
        )

        utils.save_source_code_info(ele, info)

    @staticmethod
    def inject_style_method(element: ng.ui.element, context: HookerContext):
        if not isinstance(element.__class__.style, CustomStyleProperty):
            element.__class__.style = None  # type: ignore

        def style(self, *args, **kws):
            frame = inspect.currentframe()  # type: ignore
            assert frame is not None
            frame = _Helper.get_frame_with_file_name(frame.f_back, context)
            if frame is None:
                return
            info = get_lazy_caller_info(frame)
            source_code_service.save_style_info(self, info)
            return self._style(*args, **kws)

        setattr(element, "style", types.MethodType(style, element))


class CustomStyleProperty:
    def __init__(self, context: HookerContext):
        self.context = context

    def __get__(self, instance, owner):
        if instance is None:
            return self
        info = source_code_service.get_source_code_info(instance)

        if info is not None:
            frame = inspect.currentframe()  # type: ignore
            assert frame is not None
            frame = _Helper.get_frame_with_file_name(frame.f_back, self.context)
            if frame is None:
                return
            info = get_lazy_caller_info(frame)
            source_code_service.save_style_info(instance, info)
        return instance._style


class _Helper:
    @staticmethod
    def is_descendant_of(file_path: Path, folder_path: Path) -> bool:
        try:
            return file_path.resolve().is_relative_to(folder_path.resolve())
        except ValueError:
            return False

    @staticmethod
    def get_frame_with_file_name(frame, context: HookerContext):
        while frame is not None:
            file_path = Path(frame.f_code.co_filename)
            if str(file_path).endswith("\\nicegui\\client.py"):
                return None

            for folder in context.include_folders:
                if _Helper.is_descendant_of(file_path, folder):
                    return frame

            frame = frame.f_back
        return None
