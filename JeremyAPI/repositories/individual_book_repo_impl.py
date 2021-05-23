from models.individual_book import IndividualBook
from repositories.individual_book_repo import IndividualBookRepo
from util.db_connection import connection


class IndividualBookRepoImpl(IndividualBookRepo):
    def all_individual_books(self):
        sql = "SELECT * FROM reservation.individual_books"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        new_list = []
        for r in rec:
            record = IndividualBook(r[0], r[1], r[2], r[3])
            new_list.append(record.json())

        return new_list

    def get_individual_book(self, individual_book_id):
        sql = "SELECT * FROM reservation.individual_books WHERE daycare_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [individual_book_id])

        rec = cursor.fetchone()
        new_book = IndividualBook(rec[0], rec[1], rec[2], rec[3])
        return new_book

    def create_individual_book(self, individual_book):
        sql = "INSERT INTO reservation.individual_books VALUES (DEFAULT, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (individual_book.activity_id, individual_book.quantity, individual_book.group_id))

        rec = cursor.fetchone()
        new_book = IndividualBook(rec[0], rec[1], rec[2], rec[3])
        return new_book
