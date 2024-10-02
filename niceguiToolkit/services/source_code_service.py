from __future__ import annotations
from typing import TYPE_CHECKING
import subprocess

if TYPE_CHECKING:
    from niceguiToolkit.systems.caller_system import CallerInfo


def jump_to_source_code(info: CallerInfo, config):
    # vscode_url = f"vscode://file/{info.filename}:{info.lineno}:{info.end_col}"
    command = [
        "code",
        "--reuse-window",
        "--goto",
        f"{info.filename}:{info.lineno}:{info.end_col}",
    ]

    try:
        subprocess.Popen(command, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error opening file in VSCode: {e}")
    except FileNotFoundError:
        print(
            "VSCode CLI 'code' not found. Make sure VSCode is installed and the 'code' command is available in your PATH."
        )
