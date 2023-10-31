from niceguiToolkit.layout.componentStore import ComponentStore
from niceguiToolkit.utils import astCore
from .utils import get_data_file


def test_create_new_style_call():
    mock_code_file = get_data_file("code1.py")
    exp_file = get_data_file("code1_exp.txt")

    store = ComponentStore()

    entry_info = astCore._T_entry_point_info(
        mock_code_file,
        function_name="from_pandas",
        positions=astCore._T_entry_point_position(
            lineno=11, end_lineno=11, col_offset=4, end_col_offset=43
        ),
    )

    style_info = astCore._T_ast_info(
        has=False, lineno=0, end_lineno=None, col_offset=0, end_col_offset=None
    )

    classes_info = astCore._T_ast_info(
        has=True, lineno=13, end_lineno=13, col_offset=13, end_col_offset=30
    )

    code_info = astCore._T_source_code_info(entry_info, style_info, classes_info)

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

    entry_info = astCore._T_entry_point_info(
        mock_code_file,
        function_name="from_pandas",
        positions=astCore._T_entry_point_position(
            lineno=11, end_lineno=11, col_offset=4, end_col_offset=43
        ),
    )

    style_info = astCore._T_ast_info(
        has=True, lineno=14, end_lineno=14, col_offset=11, end_col_offset=24
    )

    classes_info = astCore._T_ast_info(
        has=True, lineno=13, end_lineno=13, col_offset=13, end_col_offset=30
    )

    code_info = astCore._T_source_code_info(entry_info, style_info, classes_info)

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code

    exp = exp_file.read_text()

    assert act == exp


#
def test_multiple_style():
    mock_code_file = get_data_file("code3.py")
    exp_file = get_data_file("code3_exp.txt")

    store = ComponentStore()

    entry_info = astCore._T_entry_point_info(
        mock_code_file,
        function_name="from_pandas",
        positions=astCore._T_entry_point_position(
            lineno=11, end_lineno=11, col_offset=4, end_col_offset=43
        ),
    )

    style_info = astCore._T_ast_info(
        has=True, lineno=14, end_lineno=14, col_offset=11, end_col_offset=27
    )

    classes_info = astCore._T_ast_info(
        has=True, lineno=13, end_lineno=13, col_offset=13, end_col_offset=30
    )

    code_info = astCore._T_source_code_info(entry_info, style_info, classes_info)

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code

    exp = exp_file.read_text()

    assert act == exp


def test_has_not_str_style():
    mock_code_file = get_data_file("code4.py")
    exp_file = get_data_file("code4_exp.txt")

    store = ComponentStore()

    entry_info = astCore._T_entry_point_info(
        mock_code_file,
        function_name="from_pandas",
        positions=astCore._T_entry_point_position(
            lineno=14, end_lineno=14, col_offset=4, end_col_offset=43
        ),
    )

    style_info = astCore._T_ast_info(
        has=True, lineno=18, end_lineno=18, col_offset=11, end_col_offset=27
    )

    classes_info = astCore._T_ast_info(
        has=True, lineno=16, end_lineno=16, col_offset=13, end_col_offset=30
    )

    code_info = astCore._T_source_code_info(entry_info, style_info, classes_info)

    cp_id = 5

    store._set_componentInfo("Aggrid", cp_id, code_info)

    store.change_styles(cp_id, {"color": "red"})

    act = list(store.create_changed_records())[0].code

    exp = exp_file.read_text()

    assert act == exp
