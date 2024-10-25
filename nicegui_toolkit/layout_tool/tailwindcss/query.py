import sqlite3
from contextlib import contextmanager
from pathlib import Path
from functools import lru_cache

DB_FILE = Path(__file__).parent / "tailwindcss.db"


@lru_cache(maxsize=1)
def get_db():
    return SQLiteQuery(DB_FILE)


def search_by_full_text(input: str):
    query_item_sql = """
    SELECT record
    FROM item
    WHERE record LIKE ?
    ORDER BY LENGTH(record) ASC, record
    """

    results = get_db().execute_query(query_item_sql, (f"%{input}%",))
    if results:
        return [row[0] for row in results]

    search_fts_sql = """
    SELECT i.record
    FROM description_fts dft
    JOIN description d ON d.id = dft.id
    JOIN item i ON i.description_id = d.id
    WHERE dft.content MATCH ?
    ORDER BY dft.rank
    """

    fts_results = get_db().execute_query(search_fts_sql, (input,))
    if fts_results:
        return [row[0] for row in fts_results]

    return []


class SQLiteQuery:
    def __init__(self, db_name):
        self.db_name = db_name

    @contextmanager
    def _get_connection(self):
        conn = sqlite3.connect(self.db_name)
        try:
            yield conn
        finally:
            conn.close()

    def execute_query(self, query, params=None):
        with self._get_connection() as conn:
            cursor = conn.cursor()
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            return cursor.fetchall()


if __name__ == "__main__":
    print(search_by_full_text("宽度"))
