from nicegui import ui
from .screen import BrowserManager
from nicegui_toolkit import inject_layout_tool
from .utils import PageActions


def test_element_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        inject_layout_tool(language_locale="en", is_testing=True)
        ui.label("test")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.move_away_panel()
    actions.expect_class_str_start_with(
        get_by_text="test",
        class_str="layout-tool-mark layout-tool-id-4 layout-tool-type-Label layout-tool-file-vscode:",
    )
