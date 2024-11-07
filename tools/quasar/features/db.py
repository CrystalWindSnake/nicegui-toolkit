from pathlib import Path
import sqlite3
from typing import List, Optional, Union
import jieba
import shared.consts as consts
import shared.utils as utils
import shared.models as models


class SqliteSystems:
    def create_db(self, items: List[models.InfoItem], db_file: Union[str, Path]):
        db_file = Path(db_file)
        if Path(db_file).exists():
            Path(db_file).unlink()

        conn = sqlite3.connect(db_file)
        c = conn.cursor()

        # main_type
        c.execute("DROP TABLE IF EXISTS main_type")

        c.execute("""
        CREATE TABLE main_type (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
        """)

        # class_type
        c.execute("DROP TABLE IF EXISTS class_type")
        c.execute("""
        CREATE TABLE class_type (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
        """)

        # description
        c.execute("DROP TABLE IF EXISTS description")
        c.execute("""
        CREATE TABLE description (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL UNIQUE,
            description_zh TEXT NOT NULL
        )
        """)

        # description_fts
        c.execute("""
        CREATE VIRTUAL TABLE description_fts USING fts5(
            content ,
            id UNINDEXED, 
            content_rowid=id  
        )
        """)

        # item table
        c.execute("DROP TABLE IF EXISTS item")
        c.execute("""
        CREATE TABLE item (
            main_type_id INTEGER,
            class_type_id INTEGER,
            description_id INTEGER,
            record TEXT NOT NULL,
            FOREIGN KEY (main_type_id) REFERENCES main_type(id),
            FOREIGN KEY (class_type_id) REFERENCES class_type(id),
            FOREIGN KEY (description_id) REFERENCES description(id)
        )
        """)

        main_types = remove_duplicates([item.main_type for item in items])

        for name in main_types:
            c.execute("INSERT OR IGNORE INTO main_type (name) VALUES (?)", (name,))

        for item in items:
            c.execute(
                "INSERT OR IGNORE INTO class_type (name) VALUES (?)", (item.class_type,)
            )

            c.execute(
                "INSERT OR IGNORE INTO description (description, description_zh) VALUES (?, ?)",
                (item.description, item.description_zh),
            )

            c.execute("SELECT id FROM main_type WHERE name = ?", (item.main_type,))
            main_type_id = c.fetchone()[0]

            c.execute("SELECT id FROM class_type WHERE name = ?", (item.class_type,))
            class_type_id = c.fetchone()[0]

            c.execute(
                "SELECT id FROM description WHERE description = ?", (item.description,)
            )
            description_id = c.fetchone()[0]

            c.execute(
                "INSERT INTO description_fts (content, id) VALUES (?, ?)",
                (
                    item.description
                    + " "
                    + (to_text_by_jieba(item.description_zh) or ""),
                    description_id,
                ),
            )

            for record in item.records:
                c.execute(
                    """
                INSERT INTO item (main_type_id, class_type_id, description_id, record) VALUES (?, ?, ?, ?)
                """,
                    (main_type_id, class_type_id, description_id, record),
                )

        conn.commit()
        conn.close()


def to_text_by_jieba(text: Optional[str]) -> Optional[str]:
    if text is None:
        return None
    return " ".join(jieba.cut_for_search(text))


# 去重复
def remove_duplicates(data: List[str]) -> List[str]:
    return list(dict.fromkeys(data))


def create_db():
    utils.throw_if_file_does_not_exist(consts.TAILWIND_TRANSLATE_FILE)

    items = models.InfoItem.load_items(consts.TAILWIND_TRANSLATE_FILE, has_zh=True)
    sqlite_system = SqliteSystems()
    sqlite_system.create_db(items, consts.TAILWIND_DB_FILE)
