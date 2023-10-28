from nicegui import ui
import pandas as pd

ui.mermaid("")
ui.label("xxxxx")

style_str = "font-size:12px"

table = (
    ui.aggrid.from_pandas(pd.DataFrame({}))
    .props('p1 p2="xx"')
    .classes("w-full h-[50vh]")
    .style(style_str)
    .style("display:block;")
    .style("color:black")
)
