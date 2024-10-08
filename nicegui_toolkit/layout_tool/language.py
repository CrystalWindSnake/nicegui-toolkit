from nicegui_toolkit.layout_tool.types import _T_language_locale

_preset = {
    "locale": "en",
    "messages": {
        "en": {
            "tree.collapse_all": "Collapse All",
            "tree.expand_all": "Expand All",
            "nt.apply_command": "Apply Change",
            "nt.jump2code": "Jump to Code",
            "nt.mainPanel.style": "style",
            "nt.mainPanel.navigator": "navigator",
            "nt.mainPanel.code": "code",
            "nt.mainPanel.cusStyle": "custom style",
            "nt.style.flexitem.header": "flex item",
            "nt.style.flexitem.title.vertical": "vertical align",
            "nt.style.flexitem.title.horizontal": "horizontal align",
            "nt.style.layout.header": "layout",
            "nt.style.layout.display-label": "display",
            "nt.style.layout.direction": "direction",
            "nt.style.layout.justify-title-byRow": "horizontal",
            "nt.style.layout.justify-title-byCol": "vertical",
            "nt.style.layout.align-title-byRow": "vertical",
            "nt.style.layout.align-title-byCol": "horizontal",
            "nt.style.spacing.header": "spacing",
            "nt.style.size.header": "size",
        },
        "zh": {
            "tree.collapse_all": "全部折叠",
            "tree.expand_all": "全部展开",
            "nt.apply_command": "应用更改",
            "nt.jump2code": "跳转到代码",
            "nt.mainPanel.style": "样式",
            "nt.mainPanel.navigator": "导航",
            "nt.mainPanel.code": "代码",
            "nt.mainPanel.cusStyle": "自定义样式",
            "nt.style.flexitem.header": "flex子项",
            "nt.style.flexitem.title.vertical": "垂直对齐",
            "nt.style.flexitem.title.horizontal": "水平对齐",
            "nt.style.layout.header": "布局",
            "nt.style.layout.direction": "方向",
            "nt.style.layout.justify-title-byRow": "水平排列",
            "nt.style.layout.justify-title-byCol": "垂直排列",
            "nt.style.layout.align-title-byRow": "垂直排列",
            "nt.style.layout.align-title-byCol": "水平排列",
            "nt.style.spacing.header": "间距",
            "nt.style.size.header": "尺寸",
        },
    },
}


def get_preset(locale: _T_language_locale):
    return {
        **_preset,
        "locale": locale,
    }
