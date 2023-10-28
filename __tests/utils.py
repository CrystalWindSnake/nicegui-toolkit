from pathlib import Path

DATA_ROOT = Path("__tests/data")


def get_data_file(file: str):
    return DATA_ROOT / file
