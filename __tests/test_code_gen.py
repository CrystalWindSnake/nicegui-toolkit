from nicegui import ui
from nicegui_toolkit import inject_layout_tool
from .screen import BrowserManager
from .utils import PageActions, get_code_gen_exp_str
from playwright.sync_api import expect

from .code_gen_exps import (
    style_code_base,
    style_code_existing,
    style_code_with_var,
    style_code_with_multi_lines,
)
import pytest


class TestStyleCodeGen:
    def test_base(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            style_code_base.create_view()

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

        exp_code = get_code_gen_exp_str("style_code_base_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_existing_styles(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            style_code_existing.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.open_style_panel("foo")
        actions.click_by_text("flex item")
        actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("style_code_existing_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    @pytest.mark.skip(reason="not implemented yet")
    def test_with_style_variable(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            style_code_with_var.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.open_style_panel("foo")
        actions.click_by_text("flex item")
        actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("style_code_with_var_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_with_multi_lines(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            style_code_with_multi_lines.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.open_style_panel("foo")
        actions.click_by_text("flex item")
        actions.click_options_button("horizontal align", nth_button_box=1, nth_button=1)

        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("style_code_with_multi_lines_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)
