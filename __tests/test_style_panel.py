from nicegui import ui
from .screen import BrowserManager
from .utils import PageActions
from playwright.sync_api import expect


def test_style_panel_actives(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("Hello World")

    expect(page.get_by_text("layout")).to_be_visible()


def test_layout_display_value(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

        ui.card().classes("test-card w-[100px] h-[100px]")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("Hello World")

    actions.click_by_text("layout")
    actions.expect_contains_class(get_by_text="block", class_name="arco-tag-checked")

    actions.click_by_class("test-card")
    actions.expect_contains_class(get_by_text="flex", class_name="arco-tag-checked")


def test_set_style(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")
        ui.element("input").classes("test-input")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("Hello World", auto_move_away=False)

    actions.click_by_text("size")

    page.get_by_placeholder("auto").first.fill("500")
    page.get_by_placeholder("auto").first.press("Enter")

    page.get_by_text("Hello World", exact=True).evaluate(
        r'(element) => {document.querySelector(".test-input").value = element.getAttribute("style");}'
    )

    expect(page.locator(".test-input")).to_have_value("width: 500px;")


def test_verify_preset_style(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").style("width: 500px;")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("Hello World", auto_move_away=False)

    actions.click_by_text("size")

    expect(page.get_by_text("500")).to_be_visible()


def test_reset_style(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").style("width: 500px;")
        ui.element("input").classes("test-input")

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("Hello World", auto_move_away=False)

    actions.click_by_text("size")

    actions.click_by_text("Width")
    actions.click_by_text("Reset")

    page.get_by_text("Hello World", exact=True).evaluate(
        r'(element) => {document.querySelector(".test-input").value = element.getAttribute("style");}'
    )

    expect(page.locator(".test-input")).to_have_value("")
