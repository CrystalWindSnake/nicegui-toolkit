from functools import cache
from pathlib import Path
from importlib.util import spec_from_file_location, module_from_spec


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


@cache
def get_all_system_builders():
    folder = Path(__file__).parent / "functionals"
    return [md._get_builder() for md in _get_all_functional_module(folder)]
