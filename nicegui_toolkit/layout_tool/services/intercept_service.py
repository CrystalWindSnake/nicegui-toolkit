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
from collections import UserList


EXCLUDE_INJECT_NG_CLASSES = ["Query", "QueryElement", "TrackBall"]

_STYLE_INJECT_FLAG = "__ng_inject_style__"
_CLASS_INJECT_FLAG = "__ng_inject_classes__"


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
        class_obj = element.__class__
        if _STYLE_INJECT_FLAG in class_obj.__dict__:
            return

        org_style = class_obj.style

        def new_style(self):
            if source_code_service.has_source_code_info(self):
                return StyleInjector(self, org_style, context)
            return org_style.__get__(self, class_obj)

        class_obj.style = property(new_style)  # type: ignore

        setattr(class_obj, _STYLE_INJECT_FLAG, None)

    @staticmethod
    def inject_classes_method(element: ng.ui.element, context: HookerContext):
        class_obj = element.__class__
        if _CLASS_INJECT_FLAG in class_obj.__dict__:
            return

        org_classes = class_obj.classes

        def new_classes(self):
            if source_code_service.has_source_code_info(self):
                return ClassesInjector(self, org_classes, context)
            return org_classes.__get__(self, class_obj)

        class_obj.classes = property(new_classes)  # type: ignore

        setattr(class_obj, _STYLE_INJECT_FLAG, None)


class StyleInjector:
    def __init__(
        self, element: ng.ui.element, org_style_property, context: HookerContext
    ):
        self.org_style_property = org_style_property
        self.context = context
        self.element = element
        self._class = element.__class__

    def __call__(self, *args, **kws):
        frame = inspect.currentframe()  # type: ignore
        assert frame is not None
        frame = _Helper.get_frame_with_file_name(frame.f_back, self.context)
        if frame is None:
            return
        info = get_lazy_caller_info(frame)
        source_code_service.save_style_info(self.element, info)
        return self.element._style(*args, **kws)


class ClassesInjector(UserList):
    def __init__(
        self, element: ng.ui.element, org_classes_property, context: HookerContext
    ):
        super().__init__(element._classes)
        self.org_classes_property = org_classes_property
        self.context = context
        self.element = element
        self._class = element.__class__

    def __call__(self, add, *args, **kws):
        frame = inspect.currentframe()  # type: ignore
        assert frame is not None
        frame = _Helper.get_frame_with_file_name(frame.f_back, self.context)
        if frame is None:
            return
        info = get_lazy_caller_info(frame)
        source_code_service.save_classes_info(self.element, add, info)

        return self.element._classes(add, *args, **kws)


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
