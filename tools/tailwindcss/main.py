import features
import shared.utils as utils

used = {"fetch": False, "translate": False, "db": True}

utils.create_file_folder_if_not_exists()

if used["fetch"]:
    features.fetch_tailwindcss_data()

if used["translate"]:
    features.translate()

if used["db"]:
    features.create_db()


