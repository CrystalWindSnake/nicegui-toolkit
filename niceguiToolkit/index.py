from pathlib import Path
from typing import Literal
from niceguiToolkit.services.intercept_service import (
    Hooker,
    HookerContext,
)
from niceguiToolkit.services.caller_service import get_caller_file
# from niceguiToolkit.services.intercept_service import (
#     intercept_element_constructor,
#     InterceptConfig,
# )
# from niceguiToolkit.systems.frame_system import get_frame


_T_inject_mode = Literal["save", "penetration"]


def inject_layout_tool(
    mode: _T_inject_mode = "save",
):
    project_path = get_caller_file().parent
    Hooker(HookerContext(include_folders=[project_path])).hook_ui_element_method()

    # config = InterceptConfig(current_project_path=Path(get_frame().f_code.co_filename))
    # intercept_element_constructor(config)
