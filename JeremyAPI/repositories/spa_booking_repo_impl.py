from models.spa_booking import SpaBooking
from repositories.spa_booking_repo import SpaBookingRepo
from util.db_connection import connection


class SpaBookingRepoImpl(SpaBookingRepo):
    def all_spa_bookings(self):
        sql = "SELECT * FROM reservation.spa_bookings"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        new_list = []
        for r in rec:
            record = SpaBooking(r[0], r[1], r[2], r[3], r[4], r[5])
            new_list.append(record.json())

        return new_list

    def get_spa_booking(self, spa_id):
        sql = "SELECT * FROM reservation.spa_bookings WHERE spa_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [spa_id])

        rec = cursor.fetchone()
        new_booking = SpaBooking(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_booking

    def create_spa_booking(self, spa):
        sql = "INSERT INTO reservation.spa_bookings VALUES (DEFAULT, %s, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (spa.reservation_id, spa.guardian_name, spa.guardian2_name, spa.start_time,
                             spa.end_time))

        rec = cursor.fetchone()
        new_booking = SpaBooking(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_booking
