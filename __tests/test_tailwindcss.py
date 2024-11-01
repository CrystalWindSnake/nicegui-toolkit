from nicegui import ui
from .screen import BrowserManager
from .utils import PageActions


def test_add_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.add_new_class("w-full")

    actions.expect_exists_equal_text("w-full")
    actions.expect_contains_class(get_by_text="Hello World", class_name="w-full")


def test_add_classes_click_and_quit_with_changes(
    browser: BrowserManager, page_path: str
):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.adding_new_class("w-[50vw]")

    actions.click_by_text("classes")

    actions.expect_exists_equal_text("w-[50vw]")
    actions.expect_contains_class(get_by_text="Hello World", class_name="w-[50vw]")

    actions.expect_apply_command_button_visible()


def test_add_classes_click_and_quit_with_no_changes(
    browser: BrowserManager, page_path: str
):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.click_new_class_tag()

    actions.click_by_text("classes")

    actions.expect_apply_command_button_not_visible()


def test_edit_classes_click_and_quit_with_no_changes(
    browser: BrowserManager, page_path: str
):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").classes("w-full")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    actions.click_by_text("w-full")

    actions.expect_not_exists_equal_text("w-full")

    actions.click_by_text("classes")
    actions.expect_exists_equal_text("w-full")

    actions.expect_apply_command_button_not_visible()


def test_edit_classes_click_and_quit_with_changes(
    browser: BrowserManager, page_path: str
):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").classes("w-full")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.editing_class("w-full", "w-[50vw]")

    actions.click_by_text("classes")
    actions.expect_exists_equal_text("w-[50vw]")

    actions.expect_apply_command_button_visible()


def test_edit_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").classes("w-full")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.edit_class("w-full", "w-[50vw]")

    actions.expect_exists_equal_text("w-[50vw]")
    actions.expect_contains_class(get_by_text="Hello World", class_name="w-[50vw]")


def test_list_suggesions_for_editing_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").classes("w-full")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.editing_class("w-full", "w-")

    actions.expect_exists_equal_text("w-0")
    actions.click_by_text("w-0")
    tw_actions.wait_for_options_panel_hidden()
    actions.expect_contains_class(get_by_text="Hello World", class_name="w-0")
    actions.expect_not_contains_class(get_by_text="Hello World", class_name="w-full")


def test_list_suggesions_for_adding_classes(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World").classes("w-full")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.adding_new_class("h-fu")

    actions.expect_exists_equal_text("h-full")

    actions.click_by_text("h-full")
    tw_actions.wait_for_options_panel_hidden()

    # actions.expect_exists_equal_text("h-full")
    actions.expect_contains_class(get_by_text="Hello World", class_name="h-full")


def test_list_suggesions_search_by_word(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.adding_new_class("width")

    actions.expect_exists_equal_text("w-0")


def test_list_suggesions_search_by_zh_word(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.adding_new_class("宽度")

    actions.expect_exists_equal_text("w-0")


def test_list_suggesions_for_hover_leave(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        ui.label("Hello World")

    page = browser.open(page_path)
    actions = PageActions(page)
    tw_actions = actions.tailwind_classes()

    actions.click_by_text("Hello World")

    tw_actions.goto_code_panel()
    tw_actions.adding_new_class("w-")

    actions.expect_exists_equal_text("w-0")
    actions.hover_by_text("w-0")

    page.mouse.click(500, 500)

    actions.expect_not_exists_equal_text("w-0")
    actions.expect_exists_equal_text("w-")
    actions.expect_contains_class(get_by_text="Hello World", class_name="w-")
