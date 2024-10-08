from __future__ import annotations

import threading
from playwright.sync_api import Browser, Page, expect
from nicegui import ui, app
from nicegui.server import Server
from . import common

PORT = 3392


class ServerManager:
    def __init__(self, browser: Browser) -> None:
        self.server_thread = None
        self.browser = browser

        self._context = browser.new_context()
        self._context.set_default_timeout(10000)
        self.ui_run_kwargs = {"port": PORT, "show": False, "reload": False}
        self.connected = threading.Event()

        app.on_startup(self.connected.set)

    def start_server(self) -> None:
        """Start the webserver in a separate thread. This is the equivalent of `ui.run()` in a normal script."""
        self.server_thread = threading.Thread(target=ui.run, kwargs=self.ui_run_kwargs)
        self.server_thread.start()

    def stop_server(self) -> None:
        """Stop the webserver."""
        self.browser.close()
        Server.instance.should_exit = True

        if self.server_thread:
            self.server_thread.join()

    def new_page(self):
        if self.server_thread is None:
            self.start_server()

        # self.connected.clear()

        return BrowserManager(self, self.connected)


class BrowserManager:
    def __init__(self, server: ServerManager, connect_event: threading.Event) -> None:
        self.__server = server
        self._page = self.__server._context.new_page()
        self.connected = connect_event

    def open(self, path: str):
        # self._page.wait_for_selector("body", timeout=10000)

        # wait for server to be ready
        is_connected = self.connected.wait(5)
        if not is_connected:
            raise TimeoutError("Failed to connect to server")

        self._page.goto(
            f"http://localhost:{PORT}{path}",
            timeout=5000,
            wait_until="domcontentloaded",
        )

        self._page.wait_for_timeout(600)
        return self._page

    def close(self):
        self._page.close()

    @property
    def pw_page(self):
        return self._page


class PageUtils:
    def __init__(self, playwright_page: Page) -> None:
        self._page = playwright_page

    def pause(self):
        self._page.pause()

    @common.with_signature_from(Page.locator)
    def locator(
        self,
        *args,
        **kwargs,
    ):
        return self._page.locator(*args, **kwargs)

    @common.with_signature_from(Page.press)
    def press(
        self,
        *args,
        **kwargs,
    ):
        return self._page.press(*args, **kwargs)

    @common.with_signature_from(Page.wait_for_timeout)
    def wait(
        self,
        *args,
        **kwargs,
    ):
        return self._page.wait_for_timeout(*args, **kwargs)

    @common.with_signature_from(Page.evaluate)
    def evaluate(
        self,
        *args,
        **kwargs,
    ):
        return self._page.evaluate(*args, **kwargs)

    @common.with_signature_from(Page.query_selector)
    def query_selector(
        self,
        *args,
        **kwargs,
    ):
        target = self._page.query_selector(*args, **kwargs)
        assert target
        target.wait_for_element_state("stable")
        return target

    @common.with_signature_from(Page.get_by_role)
    def get_by_role(
        self,
        *args,
        **kwargs,
    ):
        return self._page.get_by_role(*args, **kwargs)

    @property
    def mouse(self):
        return self._page.mouse

    def should_contain(self, text: str):
        expect(self._page.locator("body")).to_contain_text(text)
        # expect(self.get_by_text(text)).to_contain_text(text)

    def should_not_contain(self, text: str):
        expect(self._page.locator("body")).not_to_contain_text(text)

    def get_by_text(self, text: str):
        return self._page.get_by_text(text)
