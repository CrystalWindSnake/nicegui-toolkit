import json
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Union
import shared.consts as consts


@dataclass
class InfoItem:
    main_type: str
    class_type: str
    description: str
    records: List[str]
    description_zh: Optional[str] = None

    @classmethod
    def load_items(cls, file: Union[str, Path], has_zh: bool = False):
        file = Path(file)
        with open(file, "r", encoding="utf-8") as f:
            data = json.load(f)
        items = []
        for item_data in data:
            item = cls(
                main_type=item_data["main_type"],
                class_type=item_data["class_type"],
                description=item_data["description"],
                records=item_data["records"],
            )

            if has_zh and "description_zh" in item_data:
                item.description_zh = item_data["description_zh"]
            items.append(item)
        return items

    @staticmethod
    def save_to_json(infos: List["InfoItem"]):
        with open(consts.TAILWIND_TRANSLATE_FILE, "w", encoding="utf-8") as f:
            json.dump(
                [item.to_dict() for item in infos], f, ensure_ascii=False, indent=4
            )

    def to_dict(self):
        return {
            "main_type": self.main_type,
            "class_type": self.class_type,
            "description": self.description,
            "records": self.records,
            "description_zh": self.description_zh,
        }
