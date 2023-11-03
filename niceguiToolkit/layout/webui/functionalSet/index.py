from __future__ import annotations
from functools import lru_cache
from pathlib import Path
from importlib.util import spec_from_file_location, module_from_spec

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .model import T_Builder


def _get_all_functional_module(folder: Path):
    files = folder.glob("*.py")

    modules = [
        str(f.resolve()) for f in files if f.is_file() and f.name != "__init__.py"
    ]

    for location in modules:
        spec = spec_from_file_location("", location)
        assert spec
        md = module_from_spec(spec)
        assert spec.loader
        spec.loader.exec_module(md)
        yield md


@lru_cache
def get_all_system_builders():
    folder = Path(__file__).parent / "functionals"
    builders = [
        md._get_builder()
        for md in _get_all_functional_module(folder)
        if hasattr(md, "_get_builder")
    ]  # type:list[T_Builder]
    return sorted(builders, key=lambda b: b.order, reverse=True)
