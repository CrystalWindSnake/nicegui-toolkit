from nicegui_toolkit.layout_tool.types import _T_language_locale

_preset = {
    "locale": "en",
    "messages": {
        "en": {
            "tree.collapse_all": "Collapse All",
            "tree.expand_all": "Expand All",
        },
        "zh": {
            "tree.collapse_all": "全部折叠",
            "tree.expand_all": "全部展开",
        },
    },
}


def get_preset(locale: _T_language_locale):
    return {
        **_preset,
        "locale": locale,
    }
