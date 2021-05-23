from models.group_book import GroupBook
from repositories.group_book_repo import GroupBookRepo
from util.db_connection import connection


class GroupBookRepoImpl(GroupBookRepo):
    def all_group_books(self):
        sql = "SELECT * FROM reservation.group_books"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        new_list = []
        for r in rec:
            record = GroupBook(r[0], r[1], r[2])
            new_list.append(record.json())

        return new_list

    def get_group_book(self, group_book_id):
        sql = "SELECT * FROM reservation.group_books WHERE daycare_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [group_book_id])

        rec = cursor.fetchone()
        new_book = GroupBook(rec[0], rec[1], rec[2])
        return new_book

    def create_group_book(self, group_book):
        sql = "INSERT INTO reservation.group_books VALUES (DEFAULT, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (group_book.item_id, group_book.quantity))

        rec = cursor.fetchone()
        new_book = GroupBook(rec[0], rec[1], rec[2])
        return new_book
