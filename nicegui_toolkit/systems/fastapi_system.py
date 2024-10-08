import fastapi


def is_zh_client_language(request: fastapi.Request):
    accept_language = request.headers.get("accept-language")
    if not accept_language:
        return False
    languages = accept_language.split(",")

    return any("zh" in lang for lang in languages)
