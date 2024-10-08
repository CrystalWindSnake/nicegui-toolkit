import types
from typing import List
import nicegui as ng
from nicegui_toolkit.layout_tool.services import source_code_service
from nicegui_toolkit.systems.caller_system import get_lazy_caller_info, LazyCallerInfo
import inspect
from pathlib import Path
from dataclasses import dataclass, field
import nicegui_toolkit.layout_tool.consts as consts
import nicegui_toolkit.layout_tool.types as tools_types
import os


EXCLUDE_INJECT_NG_CLASSES = ["Query", "QueryElement", "TrackBall"]


@dataclass
class HookerContext:
    include_folders: List[Path] = field(default_factory=list)
    IDE: tools_types._T_IDE = "vscode"


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

            Hooker._mark_element(self, info, context)

            Hooker.inject_style_method(self, context)
            Hooker.inject_classes_method(self, context)

        ng.ui.element.__init__ = wrap_init

    @staticmethod
    def _mark_element(ele: ng.ui.element, info: LazyCallerInfo, context: HookerContext):
        if context.IDE == "vscode":
            url = f"vscode://file/{info.filename}:{info.lineno}:{info.end_col+1}"
        elif context.IDE == "pycharm":
            url = f"pycharm://open?file={info.filename}&line={info.lineno}&column={info.end_col+1}"
        else:
            url = ""

        ele._classes.extend(
            [
                consts.SELECTOR_CLASS_NAME,
                f"{consts.MARK_ID_PERFIX}{ele.id}",
                f"{consts.MARK_ELEMENT_TYPE_PERFIX}{type(ele).__name__}",
                f"{consts.MARK_SOURCE_CODE_PERFIX}{url}",
            ]
        )

        source_code_service.save_source_code_info(ele, info)

    @staticmethod
    def inject_style_method(element: ng.ui.element, context: HookerContext):
        def style(self, *args, **kws):
            frame = inspect.currentframe()  # type: ignore
            assert frame is not None
            frame = _Helper.get_frame_with_file_name(frame.f_back, context)
            if frame is None:
                return
            info = get_lazy_caller_info(frame)
            source_code_service.save_style_info(self, info)
            return self._style(*args, **kws)

        element.__dict__["style"] = types.MethodType(style, element)

    @staticmethod
    def inject_classes_method(element: ng.ui.element, context: HookerContext):
        def classes(self, add, *args, **kws):
            frame = inspect.currentframe()  # type: ignore
            assert frame is not None
            frame = _Helper.get_frame_with_file_name(frame.f_back, context)
            if frame is None:
                return
            info = get_lazy_caller_info(frame)
            source_code_service.save_classes_info(self, add, info)
            return self._classes(add, *args, **kws)

        element.__dict__["classes"] = types.MethodType(classes, element)


class _Helper:
    @staticmethod
    def is_descendant_of(file_path: Path, folder_path: Path) -> bool:
        directory = os.path.abspath(folder_path)
        file = os.path.abspath(file_path)
        try:
            common_path = os.path.commonpath([directory, file])
            return common_path == directory
        except ValueError:
            return False

    @staticmethod
    def is_in_special_folder(file_path: Path) -> bool:
        return ".venv" in file_path.parts

    @staticmethod
    def get_frame_with_file_name(frame, context: HookerContext):
        while frame is not None:
            file_path = Path(frame.f_code.co_filename)
            if str(file_path).endswith("\\nicegui\\client.py"):
                return None

            for folder in context.include_folders:
                if _Helper.is_descendant_of(file_path, folder) and (
                    not _Helper.is_in_special_folder(file_path)
                ):
                    return frame

            frame = frame.f_back
        return None
