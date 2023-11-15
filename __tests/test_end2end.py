from typing import Optional
from nicegui import ui
from .screen import ScreenPage
from playwright.sync_api import expect, Page
from niceguiToolkit.layout import inject_layout_tool


def move_away_panel(page: Page):
    page.locator(".cursor-move").hover()
    page.mouse.down()
    page.mouse.move(500, 500)
    page.mouse.up()


def assert_hover_type_name(page: Page, testid: str, expect_typeName: str):
    page.locator(f".testid-{testid}").hover()

    typeName = page.locator(".vis-type-name").inner_text()
    assert typeName == expect_typeName


def assert_hover_rect(
    page: Page,
):
    hover_rect = page.locator("svg.vis-hover > rect").bounding_box()
    assert hover_rect
    assert hover_rect["width"] > 10 and hover_rect["height"] > 10


class ElementAssert:
    def __init__(self, screenPage: ScreenPage) -> None:
        self._screenPage = screenPage

    def assert_element(self, testid: str, type_name: Optional[str] = None):
        type_name = type_name or testid.capitalize()
        page = self._screenPage
        page.wait()
        assert_hover_type_name(page._page, testid, type_name)
        assert_hover_rect(page._page)


def test_hover(page: ScreenPage, page_path: str):
    @ui.page(page_path)
    def _():
        inject_layout_tool()

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

    page.open(page_path)

    move_away_panel(page._page)

    ele_assert = ElementAssert(page)

    for testid in testids:
        ele_assert.assert_element(testid)
