import re
from typing import List
from playwright.sync_api import sync_playwright, BrowserContext
from urllib.parse import quote
import shared.consts as consts
import shared.utils as utils
import shared.models as models


class TranslateSystem:
    def translate_description(self, infos: List[models.InfoItem]):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=False)
            context = browser.new_context()

            with browser:
                for idx, info in enumerate(infos, 1):
                    print(f"[{idx}/{len(infos)}] Translating {info.description}")
                    translated_text = self.query_on_new_page(context, info.description)
                    info.description_zh = translated_text

            return infos

    def query_on_new_page(self, browser: BrowserContext, text: str):
        page = browser.new_page()
        url = self.create_url(text)
        page.goto(url)
        page.wait_for_load_state("networkidle")
        prev = page.locator('[aria-hidden="true"]', has_text=re.compile("^翻译$"))
        box = prev.locator("~ *").last
        text = box.locator("> *").first.locator("> *").first.inner_text()
        page.close()
        return text

    def create_url(self, text: str):
        return rf"https://translate.google.com/?hl=zh-CN&sl=auto&tl=zh-CN&text={self.url_encode(text)}&op=translate"

    def url_encode(self, text):
        return quote(text, safe="")


def translate():
    utils.throw_if_file_does_not_exist(consts.TAILWIND_JSON_FILE)
    items = models.InfoItem.load_items(consts.TAILWIND_JSON_FILE)

    translate_system = TranslateSystem()
    translated_infos = translate_system.translate_description(items)

    models.InfoItem.save_to_json(translated_infos)
