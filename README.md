# niceguiToolkit

toolkit for nicegui

## 📦 Install

```
pip install niceguiToolkit -U
```

## layout development tool

![layout development tool](./asset/layout_dev_tool.gif)

- [x] Jump to source code
- [x] Visual layout style settings
- [x] Automatically generate style code to the source file
- [ ] generate props settings for each component
- [ ] Support for tailwindcss
- [ ] Custom settings


In your program's entry file, call the `inject_layout_tool` method
```python
from nicegui import ui
from nicegui_toolkit import inject_layout_tool

# Just call it once
inject_layout_tool()


ui.label("label")
ui.label("label with style").style("width:80%;")

with ui.card(), ui.card().style(""):
    ui.input("user name", placeholder="enter your name:")
    ui.label("xxxx").style("width:500px;")
ui.input("password", placeholder="enter your password:").style(
    "font-size:1.7rem;color:#a12d2d"
)

ui.run()

```

If you are using PyCharm:
```python
from nicegui import ui
from nicegui_toolkit import inject_layout_tool


inject_layout_tool(ide="pycharm")

...

```

