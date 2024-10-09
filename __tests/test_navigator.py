from typing import Optional
from nicegui import ui
from .screen import BrowserManager
from nicegui_toolkit import inject_layout_tool
from .utils import PageActions
from playwright.sync_api import Page


def assert_hover_type_name(page: Page, testid: str, expect_typeName: str):
    target = page.locator(f".testid-{testid}")

    target.hover(position={"x": 10, "y": 0})

    typeName = page.locator(".vis-type-name").inner_text()
    assert typeName == expect_typeName


def assert_hover_rect(
    page: Page,
):
    hover_rect = page.locator("svg.vis-hover > rect").bounding_box()
    assert hover_rect
    assert hover_rect["width"] > 10 and hover_rect["height"] > 10


class ElementAssert:
    def __init__(self, page: Page) -> None:
        self._page = page

    def assert_element(self, testid: str, type_name: Optional[str] = None):
        type_name = type_name or testid.capitalize()

        self._page.wait_for_timeout(1000)
        assert_hover_type_name(self._page, testid, type_name)
        assert_hover_rect(self._page)


def test_hover(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        inject_layout_tool(language_locale="en")
        with ui.row():
            ui.input("test").classes("testid-input")
            ui.select(["a"]).classes("testid-select")
            ui.row().classes("testid-row w-[10rem] h-[10rem] outline")
            ui.column().classes("testid-column w-[10rem] h-[10rem] outline")
            ui.element("div").classes("testid-element w-[10rem] h-[10rem] outline")
            ui.date().classes("testid-date")
            ui.slider(min=0, max=100).classes("testid-slider")
            ui.button("test").classes("testid-button")

    testids = [
        "input",
        "select",
        "row",
        "column",
        "element",
        "date",
        "slider",
        "button",
    ]

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.move_away_panel()

    ele_assert = ElementAssert(page)

    for testid in testids:
        ele_assert.assert_element(testid)
