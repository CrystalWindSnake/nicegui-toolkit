from pathlib import Path
from playwright.sync_api import Page, expect
import re

DATA_ROOT = Path("__tests/code_gen_exps")


def get_data_file(file: str):
    return DATA_ROOT / file


def get_code_gen_exp_str(file: str):
    return get_data_file(file).read_text(encoding="utf-8")


class PageActions:
    def __init__(self, page: Page):
        self.pw_page = page

    def move_away_panel(self, move_x=500, move_y=500):
        self.pw_page.locator(".cursor-move").hover()
        self.pw_page.mouse.down()
        self.pw_page.mouse.move(move_x, move_y)
        self.pw_page.mouse.up()

    def open_style_panel(self, first_target_text: str, auto_move_away=True):
        if auto_move_away:
            self.move_away_panel()

        self.click_by_text(first_target_text)
        self.click_by_text("style")

    def click_by_text(self, text: str, delay=600):
        self.pw_page.get_by_text(text, exact=True).click(delay=delay)

    def click_by_class(self, class_name: str, delay=600):
        self.pw_page.locator(f"css= .{class_name}").click(delay=delay)

    def expect_contains_class(self, *, get_by_text: str, class_name: str):
        expect(self.pw_page.get_by_text(get_by_text, exact=True)).to_have_class(
            re.compile(class_name)
        )

    def expect_class_str_start_with(self, *, get_by_text: str, class_str: str):
        expect(self.pw_page.get_by_text(get_by_text, exact=True)).to_have_class(
            re.compile(f"^{class_str}")
        )

    def click_apply_command_and_confirm(self):
        self.pw_page.locator(".nt-apply-command").first.click()
        self.pw_page.get_by_role("button", name="Apply").click()

    def click_options_button(self, text: str, nth_button_box, nth_button: int):
        box = self.pw_page.locator(".grid", has_text=text)
        box.locator("css = >*").nth(nth_button_box).locator("button").nth(
            nth_button
        ).click()

    def add_new_classes_and_confirm(self, new_classes: str):
        self.click_by_class("nt-classes-add-tag")
        self.pw_page.locator(".nt-classes-add-tag input").type(new_classes)
        self.pw_page.keyboard.press("Enter")
