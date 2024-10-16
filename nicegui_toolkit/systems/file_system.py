from pathlib import Path


def str_to_file(path: Path, content: str):
    path.write_text(content, encoding="utf-8")
