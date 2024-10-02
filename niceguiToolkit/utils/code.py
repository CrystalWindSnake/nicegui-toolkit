from nicegui.element import Element


def create_props_code(element: Element):
    items = (
        name if isinstance(value, bool) else f"{name}={value}"
        for name, value in element._props.items()
    )

    return " ".join(items)


def create_style_code(element: Element):
    return " ".join(f"{name}:{value};" for name, value in element._style.items())
