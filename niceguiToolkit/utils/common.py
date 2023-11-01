import re

# cus
_RE_replace_chinese_with_x = re.compile(r"[\u4e00-\u9fa5]|[：，。、《》；‘·【】]")


def replace_chinese_with_x(text):
    return _RE_replace_chinese_with_x.sub("x", text)
