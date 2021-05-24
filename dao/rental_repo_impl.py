from models.rental import Rental
from dao.rental_repo import RentalRepo
from db_conn.db_conn import DbConn


class RentalRepoImpl(RentalRepo):
    connection = DbConn.make_connect()

    def all_rentals(self):
        sql = "SELECT * FROM reservation.rentals"

        cursor = self.connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        rental_list = []
        for r in rec:
            record = Rental(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7])
            rental_list.append(record.json())

        return rental_list

    def get_rental(self, rental_id):
        sql = "SELECT * FROM reservation.rentals WHERE rental_id=%s"

        cursor = self.connection.cursor()
        cursor.execute(sql, [rental_id])

        rec = cursor.fetchone()
        new_rental = Rental(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7])
        return new_rental

    def create_rental(self, rental):
        sql = "INSERT INTO reservation.rentals VALUES (DEFAULT, %s, %s, %s, %s, %s, %s, %s) RETURNING *"

        cursor = self.connection.cursor()
        cursor.execute(sql, (rental.person_id, rental.skis_count, rental.helmets_count, rental.boots_count,
                             rental.snowboards_count, rental.start_date, rental.end_date))

        rec = cursor.fetchone()
        new_rental = Rental(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7])
        return new_rental
