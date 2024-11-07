from typing import List
from playwright.sync_api import sync_playwright, Page, Locator
from dataclasses import dataclass, field
import json
import shared.consts as consts


HEADLESS = False
TAILWIND_URL = "https://tailwindcss.com/docs"
EXCLUDE_MAIN_TYPES = {
    "Getting Started",
    "Core Concepts",
    "Customization",
    "Base Styles",
    "Official Plugins",
}


@dataclass
class Info:
    main_type: str
    class_type: str
    description: str
    value_rows: List[List[str]] = field(default_factory=list)

    def _extract_records(self):
        header_values = self.value_rows[0]
        class_index = header_values.index("Class")

        result = []
        for row in self.value_rows[1:]:
            value = row[class_index].strip().split(" ")[0]
            result.append(value)

        return result

    def to_dict(self):
        return {
            "main_type": self.main_type,
            "class_type": self.class_type,
            "description": self.description,
            "records": self._extract_records(),
        }


def get_sidebar_links(page: Page):
    lis = page.locator("li.mt-12")

    for li in lis.all():
        title = li.inner_text().splitlines()[0]
        if title in EXCLUDE_MAIN_TYPES:
            continue

        yield from li.get_by_role("link").all()


def extract_info(page: Page, link: Locator):
    link_name = link.inner_text()
    print(f"Extracting info for {link_name}")
    link.click()

    page.locator("#header h1", has_text=link_name).wait_for()

    header_box = page.locator("#header")
    table = header_box.locator("+ *").first.locator("table")

    main_type = header_box.get_by_role("paragraph").nth(0).text_content()
    class_type = header_box.get_by_role("heading").nth(0).text_content()
    description = header_box.get_by_role("paragraph").nth(1).text_content()

    assert main_type and class_type, "main_type or class_name is empty"

    rows = [
        row.get_by_role("cell").all_text_contents()
        for row in table.get_by_role("row").all()
    ]

    info = Info(main_type, class_type, description or "", rows)
    return info


def save_infos(infos: List[Info]):
    with open(consts.TAILWIND_JSON_FILE, "w", encoding="utf-8") as f:
        json.dump([info.to_dict() for info in infos], f, ensure_ascii=False, indent=4)


def extract_from_bowser():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=HEADLESS)
        context = browser.new_context()
        page = context.new_page()

        with browser:
            page.goto(TAILWIND_URL)
            page.wait_for_load_state("domcontentloaded")

            links = list(get_sidebar_links(page))[:2]

            infos = [
                extract_info(page, link)
                for link in links
                if link.inner_text() != "Container"
            ]

    return infos


def fetch_tailwindcss_data():
    infos = extract_from_bowser()
    save_infos(infos)
