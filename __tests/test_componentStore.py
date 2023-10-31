from niceguiToolkit.layout.componentStore import ComponentStore
from pathlib import Path
from niceguiToolkit.utils import codeContext
from utils import get_data_file
import dis


def test_create_new_style_call():
    mock_code_file = get_data_file("code1.py")
    exp_file = get_data_file("code1_exp.txt")

    store = ComponentStore()

    code_info = codeContext._T_source_code_info(
        mock_code_file,
        dis.Positions(lineno=8, end_lineno=8, col_offset=4, end_col_offset=43),
    )

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code

    exp = exp_file.read_text()

    assert act == exp


def test_replace_style():
    mock_code_file = get_data_file("code2.py")
    exp_file = get_data_file("code2_exp.txt")

    store = ComponentStore()

    code_info = codeContext._T_source_code_info(
        mock_code_file,
        dis.Positions(lineno=8, end_lineno=8, col_offset=4, end_col_offset=43),
    )

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code
    exp = exp_file.read_text()

    assert act == exp


def test_multiple_style():
    mock_code_file = get_data_file("code3.py")
    exp_file = get_data_file("code3_exp.txt")

    store = ComponentStore()

    code_info = codeContext._T_source_code_info(
        mock_code_file,
        dis.Positions(lineno=8, end_lineno=8, col_offset=4, end_col_offset=43),
    )

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code
    exp = exp_file.read_text()

    assert act == exp


def test_has_no_str_style():
    mock_code_file = get_data_file("code4.py")
    exp_file = get_data_file("code4_exp.txt")

    store = ComponentStore()

    code_info = codeContext._T_source_code_info(
        mock_code_file,
        dis.Positions(lineno=10, end_lineno=10, col_offset=4, end_col_offset=43),
    )

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code
    exp = exp_file.read_text()

    assert act == exp
