from models.service_track import ServiceTrack
from dao.service_track_repo import ServiceTrackRepo
from db_conn.db_conn import DbConn


class ServiceTrackRepoImpl(ServiceTrackRepo):
    connection = DbConn.make_connect()

    def all_service_tracks(self):
        sql = "SELECT * FROM reservation.services"

        cursor = self.connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        service_list = []
        for r in rec:
            record = ServiceTrack(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8])
            service_list.append(record.json())

        return service_list

    def get_service_tracks(self, service_id):
        sql = "SELECT * FROM reservation.services WHERE reservation_id=%s"

        cursor = self.connection.cursor()
        cursor.execute(sql, [service_id])

        rec = cursor.fetchone()
        new_service = ServiceTrack(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7], rec[8])
        return new_service

    def create_service_track(self, service):
        sql = "INSERT INTO reservation.services VALUES (DEFAULT, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING *"

        cursor = self.connection.cursor()
        cursor.execute(sql, (service.ski_rentals, service.snowboard_rentals, service.spa_day_pkg,
                             service.spa_massage_pkg, service.couples_pkg, service.warmup_pkg, service.daycare_children,
                             service.price))

        rec = cursor.fetchone()
        new_service = ServiceTrack(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5], rec[6], rec[7], rec[8])
        return new_service
