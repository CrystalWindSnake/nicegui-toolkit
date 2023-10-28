from nicegui import ui
import pandas as pd

ui.mermaid("")
ui.label("xxxxx")

table = (
    ui.aggrid.from_pandas(pd.DataFrame({}))
    .props('p1 p2="xx"')
    .classes("w-full h-[50vh]")
    .style("color:black")
)
