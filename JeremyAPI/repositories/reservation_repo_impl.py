from models.reservation import Reservation
from repositories.reservation_repo import ReservationRepo
from util.db_connection import connection


class ReservationRepoImpl(ReservationRepo):
    def all_reservations(self):
        sql = "SELECT * FROM reservation.reservations"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        reservation_list = []
        for r in rec:
            record = Reservation(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9])
            reservation_list.append(record.json())

        return reservation_list

    def get_reservation(self, reservation_id):
        sql = "SELECT * FROM reservation.reservations WHERE reservation_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [reservation_id])

        rec = cursor.fetchone()
        new_reservation = Reservation(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7], rec[8], rec[9])
        return new_reservation

    def create_reservation(self, reservation):
        sql = "INSERT INTO reservation.reservations VALUES (DEFAULT, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (reservation.num_adults, reservation.num_children, reservation.num_rooms,
                             reservation.room1_type, reservation.room1_size, reservation.room2_type,
                             reservation.room2_size, reservation.price, reservation.total_price))

        rec = cursor.fetchone()
        new_reservation = Reservation(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7], rec[8], rec[9])
        return new_reservation
