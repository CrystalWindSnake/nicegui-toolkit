import inspect


def get_frame(level=1):
    current = inspect.currentframe().f_back  # type: ignore

    for _ in range(level):
        current = current.f_back  # type: ignore

    assert current is not None
    return current
