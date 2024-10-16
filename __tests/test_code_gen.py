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
    classes_code_base,
    classes_code_existing,
    classes_code_multi_element_calls,
    classes_code_with_multi_lines,
    classes_code_multi_calls_same_element,
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


class TestClassesCodeGen:
    def test_base(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            classes_code_base.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.move_away_panel()

        actions.click_by_text("foo")
        actions.click_by_text("code")
        actions.add_new_classes_and_confirm("w-full")

        # click apply button
        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("classes_code_base_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_existing_classes(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            classes_code_existing.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.move_away_panel()

        actions.click_by_text("foo")
        actions.click_by_text("code")
        actions.add_new_classes_and_confirm("w-full")

        # click apply button
        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("classes_code_existing_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_with_multi_calls_same_element(
        self, browser: BrowserManager, page_path: str
    ):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            classes_code_multi_calls_same_element.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.move_away_panel()

        actions.click_by_text("foo")
        actions.click_by_text("code")
        actions.add_new_classes_and_confirm("w-full")

        # click apply button
        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("classes_code_multi_calls_same_element_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_with_multi_lines(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            classes_code_with_multi_lines.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.move_away_panel()

        actions.click_by_text("foo")
        actions.click_by_text("code")
        actions.add_new_classes_and_confirm("w-full")

        # click apply button
        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("classes_code_with_multi_lines_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)

    def test_base_multiple_element_calls(self, browser: BrowserManager, page_path: str):
        @ui.page(page_path)
        def _():
            inject_layout_tool(language_locale="en", is_testing=True)
            classes_code_multi_element_calls.create_view()

        page = browser.open(page_path)
        actions = PageActions(page)

        actions.move_away_panel()

        actions.click_by_text("foo")
        actions.click_by_text("code")
        actions.add_new_classes_and_confirm("w-full")

        # other element
        actions.click_by_text("bar long text with spaces")
        actions.click_by_class("nt-classes-add-tag")
        page.locator(".nt-classes-add-tag input").type("w-full")
        page.keyboard.press("Enter")

        # click apply button
        actions.click_apply_command_and_confirm()

        actions.click_by_text("testing")

        exp_code = get_code_gen_exp_str("classes_code_multi_element_calls_exp.txt")
        expect(page.locator("css= .nt-testing-content")).to_contain_text(exp_code)
