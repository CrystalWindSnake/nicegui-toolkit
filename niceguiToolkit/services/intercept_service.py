from typing import List
import nicegui as ng
from niceguiToolkit.systems.caller_system import get_caller_info, CallerInfo
import inspect
from pathlib import Path
from dataclasses import dataclass, field


EXCLUDE_INJECT_NG_CLASSES = ["Query", "TrackBall"]


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
            assert frame is not None
            info = get_caller_info(frame)

            Hooker._mark_element(self, info)

        ng.ui.element.__init__ = wrap_init

    @staticmethod
    def _mark_element(ele: ng.ui.element, info: CallerInfo):
        vscode_url = f"vscode://file/{info.filename}:{info.lineno}:{info.end_col}"

        ele._classes.extend(
            [
                "layout-tool-mark",
                f"layout-tool-id-{ele.id}",
                f"layout-tool-type-{type(ele).__name__}",
                f"layout-tool-file-{vscode_url}",
            ]
        )


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

            for folder in context.include_folders:
                if _Helper.is_descendant_of(file_path, folder):
                    return frame

            frame = frame.f_back
        return None
