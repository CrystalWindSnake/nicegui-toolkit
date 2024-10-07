import inspect
from pathlib import Path


def get_caller_file():
    back_frame = inspect.currentframe()
    assert back_frame is not None
    back_frame = back_frame.f_back
    assert back_frame is not None
    back_frame = back_frame.f_back
    assert back_frame is not None

    return Path(back_frame.f_code.co_filename)
