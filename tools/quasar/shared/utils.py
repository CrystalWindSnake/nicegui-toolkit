from . import consts
from pathlib import Path


def create_file_folder_if_not_exists():
    consts.FILE_FOLDER.mkdir(exist_ok=True)


def throw_if_file_does_not_exist(file_path: Path):
    if not file_path.exists():
        raise FileNotFoundError(f"File {file_path} must exist.")
