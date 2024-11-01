from pathlib import Path
from playwright.sync_api import Page, expect
import re

DATA_ROOT = Path("__tests/code_gen_exps")


def get_data_file(file: str):
    return DATA_ROOT / file


def get_code_gen_exp_str(file: str):
    return get_data_file(file).read_text(encoding="utf-8")


def escape_text(text: str):
    return re.escape(text)


def escape_equal_text(text: str, ignore_case=True):
    text_normalized = escape_text(text)
    return re.compile(f"^{text_normalized}$", re.IGNORECASE if ignore_case else 0)


class PageActions:
    _APPLY_COMMAND_CLASS = "nt-apply-command"
    _TW_CLASS_ADD_TAG_CLASS = "nt-classes-add-tag"

    def __init__(self, page: Page):
        self.pw_page = page

    def tailwind_classes(self):
        return TailwindClassesActions(self)

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

    def click_by_text(self, text: str, delay=600, ignore_case=True):
        self.pw_page.get_by_text(escape_equal_text(text, ignore_case)).click(
            delay=delay
        )

    def click_by_class(self, class_name: str, delay=600):
        self.pw_page.locator(f"css= .{class_name}").click(delay=delay)

    def expect_exists_equal_text(self, text: str, ignore_case=True):
        expect(
            self.pw_page.get_by_text(escape_equal_text(text, ignore_case))
        ).to_be_visible()

    def expect_not_exists_equal_text(self, text: str, ignore_case=True):
        expect(
            self.pw_page.get_by_text(escape_equal_text(text, ignore_case))
        ).not_to_be_visible()

    def expect_contains_class(self, *, get_by_text: str, class_name: str):
        expect(self.pw_page.get_by_text(get_by_text, exact=True)).to_have_class(
            re.compile(escape_text(class_name))
        )

    def expect_class_str_start_with(self, *, get_by_text: str, class_str: str):
        expect(self.pw_page.get_by_text(get_by_text, exact=True)).to_have_class(
            re.compile(f"^{escape_text(class_str)}")
        )

    def expect_has_element_by_class(self, class_name: str):
        expect(self.pw_page.locator(f"css= .{class_name}")).to_be_visible()

    def expect_not_has_element_by_class(self, class_name: str):
        expect(self.pw_page.locator(f"css= .{class_name}")).not_to_be_visible()

    def expect_apply_command_button_visible(self):
        self.expect_has_element_by_class(self._APPLY_COMMAND_CLASS)

    def expect_apply_command_button_not_visible(self):
        self.expect_not_has_element_by_class(self._APPLY_COMMAND_CLASS)

    def click_apply_command_and_confirm(self):
        self.pw_page.locator(".nt-apply-command").first.click()
        self.pw_page.get_by_role("button", name="Apply").click()

    def click_options_button(self, text: str, nth_button_box, nth_button: int):
        box = self.pw_page.locator(".grid", has_text=text)
        box.locator("css = >*").nth(nth_button_box).locator("button").nth(
            nth_button
        ).click()

    def add_new_classes_and_confirm(self, new_classes: str):
        self.click_by_class(self._TW_CLASS_ADD_TAG_CLASS)
        self.pw_page.locator(f".{self._TW_CLASS_ADD_TAG_CLASS} input").type(new_classes)
        self.pw_page.keyboard.press("Enter")

    def hover_by_text(self, text: str):
        escaped_text = escape_equal_text(text, ignore_case=True)
        element_locator = self.pw_page.get_by_text(escaped_text)
        expect(element_locator).to_be_visible()
        element_locator.hover(position={"x": 10, "y": 10})


class TailwindClassesActions:
    def __init__(self, page_actions: PageActions):
        self._page_actions = page_actions
        self._page = page_actions.pw_page

    def goto_code_panel(self):
        self._page_actions.click_by_text("code")

    def edit_class(self, class_name: str, new_class_name: str):
        self.editing_class(class_name, new_class_name)
        self._page.keyboard.press("Enter")

    def editing_class(self, class_name: str, new_class_name: str):
        self._page_actions.click_by_text(class_name, ignore_case=False)
        self._page.keyboard.press("Control+a")
        self._page.keyboard.press("Backspace")
        self._page.keyboard.type(new_class_name)

    def add_new_class(self, new_class_name: str):
        self.adding_new_class(new_class_name)
        self._page.keyboard.press("Enter")

    def adding_new_class(self, new_class_name: str):
        self._page_actions.click_by_class(self._page_actions._TW_CLASS_ADD_TAG_CLASS)
        self._page.keyboard.type(new_class_name)

    def click_new_class_tag(self):
        self._page_actions.click_by_class(self._page_actions._TW_CLASS_ADD_TAG_CLASS)
