import itertools
from pathlib import Path
import tokenize
import dis
from types import CodeType, FrameType
from typing import List, Union
from collections import namedtuple
from functools import lru_cache

CallerInfo = namedtuple(
    "CallerInfo", "filename method_name lineno start_col end_lineno end_col"
)

_Positions = namedtuple(
    "Positions",
    [
        "lineno",
        "end_lineno",
        "col_offset",
        "end_col_offset",
    ],
    defaults=[None] * 4,
)


def get_caller_info(frame: FrameType):
    """Get the caller information of a frame.

    Args:
        frame (FrameType):  The frame object.

    """
    filename = frame.f_code.co_filename
    lineno = frame.f_lineno

    frame_position = _utils.get_frame_position(frame)
    assert frame_position.lineno
    assert frame_position.end_lineno

    return _create_caller_info(Path(filename), lineno, frame_position)


def _create_caller_info(
    filename: Path,
    lineno: int,
    frame_position: _Positions,
):
    code_lines, tokens = _utils.get_token_info(
        filename, frame_position.lineno, frame_position.end_lineno
    )

    (
        method_name,
        start_col,
        end_col,
    ) = _utils.get_token_position_by_frame_position(code_lines, tokens, frame_position)

    return CallerInfo(
        filename, method_name, lineno, start_col, frame_position.end_lineno, end_col
    )


class LazyCallerInfo:
    def __init__(
        self,
        filename: str,
        org_lineno,
        frame_position: _Positions,
    ) -> None:
        self.filename = Path(filename)
        self._org_lineno = org_lineno
        self._frame_position = frame_position

        self._caller_info = None

    @property
    def caller_info(self):
        if self._caller_info is None:
            self._caller_info = _create_caller_info(
                self.filename, self._org_lineno, self._frame_position
            )
        return self._caller_info

    @property
    def lineno(self):
        return self.caller_info.lineno

    @property
    def start_col(self):
        return self.caller_info.start_col

    @property
    def end_lineno(self):
        return self.caller_info.end_lineno

    @property
    def end_col(self):
        return self.caller_info.end_col


def get_lazy_caller_info(frame: FrameType):
    filename = frame.f_code.co_filename
    lineno = frame.f_lineno

    frame_position = _utils.get_frame_position(frame)
    assert frame_position.lineno
    assert frame_position.end_lineno

    return LazyCallerInfo(filename, lineno, frame_position)


def clear_cache():
    _utils.get_token_info.cache_clear()
    _utils.try_get_frame_position.cache_clear()


class _utils:
    @lru_cache
    @staticmethod
    def get_token_info(file: str, lineno: int, end_lineno: int):
        lines = _utils._get_lines_from_file(file, lineno, end_lineno)

        """
        last line may not be complete, so we need to remove the last character of the last line if it's incomplete.
        ```python
        ui.input("密 码", placeholder="请输入密码:").style(
                        "font-size:1.7rem;color:#a12d2d"
                    )
        ```

        lines is like:
        ```
        ['ui.input("密 码", placeholder="请输入密码:")style(\n']
        ```

        and when tokenize.tokenize(lines_reader), it will raise TokenError:
        ```
        TokenError: ('EOF in multi-line string', (2, 0))
        ```

        so we need to remove the last character of the last line if it's incomplete:
        ```python
        ['ui.input("密 码", placeholder="请输入密码:")style(']
        ```
            
        """
        while len(lines) > 0:
            try:
                iter_lines = iter(lines)

                def lines_reader():
                    return next(iter_lines).encode("utf-8")

                tokens = list(tokenize.tokenize(lines_reader))
                return lines, tokens
            except tokenize.TokenError as e:
                lines[-1] = lines[-1][: -e.args[1][0]]

        raise ValueError("Cannot get token info from file")

    @lru_cache
    @staticmethod
    def _get_lines_from_file(
        file_path: Union[str, Path],
        start_line: int,
        end_line: int,
    ) -> List[str]:
        """
        Get the lines from the specified file within the specified range of text.
        """
        with open(file_path, "r", encoding="utf-8") as file:
            # Skip lines until the start_line
            for _ in range(start_line - 1):
                next(file)
            lines = list(itertools.islice(file, end_line - start_line + 1))

        return lines

    @staticmethod
    def get_frame_position(frame: FrameType) -> _Positions:
        return _utils.try_get_frame_position(
            frame.f_code, id(frame.f_code), frame.f_lasti
        )  # type: ignore

    @lru_cache
    @staticmethod
    def try_get_frame_position(f_code: CodeType, code_id: int, f_lasti: int):
        bc_list = list(dis.get_instructions(f_code, show_caches=True))

        while _utils.opname(bc_list, f_lasti) == "CACHE":
            f_lasti -= 2

        node = _utils.instruction(bc_list, f_lasti)
        position = node.positions
        assert position is not None
        assert position.lineno is not None
        assert position.col_offset is not None

        return position

    @staticmethod
    def get_token_position_by_frame_position(
        codes: List[str],
        tokens: List[tokenize.TokenInfo],
        frame_position: _Positions,
    ):
        for idx, token in enumerate(tokens):
            # cal token offset byte
            token_offset_byte = _utils.byte_count(
                codes[token.end[0] - 1][: token.end[1]]
            )

            line_no = token.end[0] + frame_position.lineno - 1  # type: ignore

            if (
                token_offset_byte == frame_position.end_col_offset
                and line_no == frame_position.end_lineno
            ):  # type: ignore
                left_parenthesis, target_idx = _utils.find_preceding_left_parenthesis(
                    tokens, idx
                )

                assert (
                    left_parenthesis is not None and target_idx is not None
                ), "Cannot find the left parenthesis"

                return (
                    tokens[target_idx - 1].string,
                    left_parenthesis.start[1]
                    + 1,  # add 1 for method call like `.style(`
                    token.end[1] - 1,
                )

        raise ValueError("Cannot find the token position by frame position")

    @staticmethod
    def byte_count(text: str, encoding: str = "utf-8") -> int:
        return len(text.encode(encoding))

    @staticmethod
    def instruction(bc_list, index: int) -> dis.Instruction:
        return bc_list[index // 2]

    @staticmethod
    def opname(bc_list, index: int) -> str:
        return _utils.instruction(bc_list, index).opname

    @staticmethod
    def cal_token_end_col(
        tokens: List[tokenize.TokenInfo], current_token_idx: int
    ) -> int:
        open_parens = 0

        for token in tokens[current_token_idx + 1 :]:
            if token.type == tokenize.OP and token.string == "(":
                open_parens += 1
            elif token.type == tokenize.OP and token.string == ")":
                open_parens -= 1
                if open_parens == 0:
                    return token.end[1]
        return -1

    @staticmethod
    def find_preceding_left_parenthesis(
        tokens: List[tokenize.TokenInfo], current_token_idx: int
    ):
        open_parens = 1  # current token is a right parenthesis

        for i in range(current_token_idx - 1, -1, -1):
            if tokens[i].type == tokenize.OP and tokens[i].string == ")":
                open_parens += 1
            elif tokens[i].type == tokenize.OP and tokens[i].string == "(":
                open_parens -= 1
                if open_parens == 0:
                    return tokens[i], i

        return None, None
