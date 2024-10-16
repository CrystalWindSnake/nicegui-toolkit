from nicegui import ui
from nicegui_toolkit import inject_layout_tool
from .screen import BrowserManager
from .utils import PageActions, get_code_gen_exp_str
from playwright.sync_api import expect

from .code_gen_exps import code1, code2


def test_style_code_gen(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        inject_layout_tool(language_locale="en", is_testing=True)
        code1.create_view()

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("foo")
    actions.click_by_text("flex item")
    actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

    # other element
    actions.click_by_text("bar long text with spaces")
    actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

    # click apply button
    actions.click_apply_command_and_confirm()

    actions.click_by_text("testing")

    exp_code = get_code_gen_exp_str("exp1.txt")
    expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)


def test_existing_styles_code_gen(browser: BrowserManager, page_path: str):
    @ui.page(page_path)
    def _():
        inject_layout_tool(language_locale="en", is_testing=True)
        code2.create_view()

    page = browser.open(page_path)
    actions = PageActions(page)

    actions.open_style_panel("foo")
    actions.click_by_text("flex item")
    actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

    actions.click_apply_command_and_confirm()

    actions.click_by_text("testing")

    exp_code = get_code_gen_exp_str("exp2.txt")
    expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)
