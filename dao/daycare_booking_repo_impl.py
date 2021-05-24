from models.daycare_booking import DaycareBooking
from dao.daycare_booking_repo import DaycareBookingRepo
from db_conn.db_conn import DbConn


class DaycareBookingRepoImpl(DaycareBookingRepo):
    def all_daycare_bookings(self):
        sql = "SELECT * FROM reservation.daycare_bookings"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        new_list = []
        for r in rec:
            record = DaycareBooking(r[0], r[1], r[2], r[3], r[4], r[5])
            new_list.append(record.json())

        return new_list

    def get_daycare_booking(self, daycare_id):
        sql = "SELECT * FROM reservation.daycare_bookings WHERE daycare_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [daycare_id])

        rec = cursor.fetchone()
        new_booking = DaycareBooking(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_booking

    def create_daycare_booking(self, daycare):
        sql = "INSERT INTO reservation.daycare_bookings VALUES (DEFAULT, %s, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (daycare.reservation_id, daycare.guardian_name, daycare.guardian2_name, daycare.start_time,
                             daycare.end_time))

        rec = cursor.fetchone()
        new_booking = DaycareBooking(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_booking
