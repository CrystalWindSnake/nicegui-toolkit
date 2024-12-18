from nicegui import ui
from .screen import BrowserManager
from .utils import PageActions
from playwright.sync_api import expect


def test_element_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("test")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.move_away_panel()
    actions.expect_class_str_start_with(
        get_by_text="test",
        class_str="layout-tool-mark layout-tool-id-4 layout-tool-type-Label layout-tool-file-vscode:",
    )


def test_element_hidden(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("hello").set_visibility(False)

    page = browser.open(page_path)
    expect(page.get_by_text("hello")).to_be_hidden()
