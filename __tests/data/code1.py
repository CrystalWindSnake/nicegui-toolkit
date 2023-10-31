from nicegui import ui
import pandas as pd

# from niceguiToolkit.layout import inject_layout_tool

# inject_layout_tool(mode="penetration")
ui.mermaid("")
ui.label("xxxxx")

table = (
    ui.aggrid.from_pandas(pd.DataFrame({}))
    .props('p1 p2="xx"')
    .classes("w-full h-[50vh]")
    # .style("color:black")
)
