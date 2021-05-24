from models.group_book import GroupBook
from dao.group_book_repo import GroupBookRepo
from db_conn.db_conn import DbConn


class GroupBookRepoImpl(GroupBookRepo):
    connection = DbConn.make_connect()

    def all_group_books(self):
        sql = "SELECT * FROM reservation.group_books"

        cursor = self.connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        new_list = []
        for r in rec:
            record = GroupBook(r[0], r[1], r[2])
            new_list.append(record.json())

        return new_list

    def get_group_book(self, group_book_id):
        sql = "SELECT * FROM reservation.group_books WHERE daycare_id=%s"

        cursor = self.connection.cursor()
        cursor.execute(sql, [group_book_id])

        rec = cursor.fetchone()
        new_book = GroupBook(rec[0], rec[1], rec[2])
        return new_book

    def create_group_book(self, group_book):
        sql = "INSERT INTO reservation.group_books VALUES (DEFAULT, %s, %s) RETURNING *"
        new_book = DbConn.make_connect(sql, (group_book.item_id, group_book.quantity))
        return new_book
