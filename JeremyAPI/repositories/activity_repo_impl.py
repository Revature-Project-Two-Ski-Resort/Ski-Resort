from models.activity import Activity
from repositories.activity_repo import ActivityRepo
from util.db_connection import connection


class ActivityRepoImpl(ActivityRepo):
    def all_activities(self):
        sql = "SELECT * FROM reservation.activities"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        activity_list = []
        for r in rec:
            record = Activity(r[0], r[1], r[2], r[3])
            activity_list.append(record.json())

        return activity_list

    def get_activity(self, activity_id):
        sql = "SELECT * FROM reservation.activities WHERE activity_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [activity_id])

        rec = cursor.fetchone()
        new_activity = Activity(rec[0], rec[1], rec[2], rec[3])
        return new_activity

    def create_activity(self, activity):
        sql = "INSERT INTO reservation.activities VALUES (DEFAULT, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (activity.lift_tickets, activity.trail_users, activity.price))

        rec = cursor.fetchone()
        new_activity = Activity(rec[0], rec[1], rec[2], rec[3])
        return new_activity
