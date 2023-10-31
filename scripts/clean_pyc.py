from pathlib import Path
import shutil

root = Path(".").absolute()
target = root / "niceguiToolkit"

for t in target.rglob("__pycache__"):
    shutil.rmtree(t)
