from models.group_string import GroupString
from dao.group_string_repo import GroupStringRepo
from db_conn.db_conn import DbConn


class GroupStringRepoImpl(GroupStringRepo):
    def all_group_strings(self):
        sql = "SELECT * FROM reservation.group_strings"

        rec = DbConn.make_connect(sql)

        new_list = []
        for r in rec:
            record = GroupString(r[0], r[1], r[2])
            new_list.append(record.json())
        return new_list

    def get_group_string(self, email):
        sql = "SELECT * FROM reservation.group_strings WHERE email=%s"

        rec = DbConn.make_connect(sql, [email])[0]
        new_str = GroupString(rec[0], rec[1], rec[2])
        return new_str

    def create_group_string(self, grp_str):
        sql = "INSERT INTO reservation.group_strings VALUES (DEFAULT,%s,%s) RETURNING *"

        rec = DbConn.make_connect(sql, [grp_str.this_str, grp_str.email])[0]
        new_str = GroupString(rec[0], rec[1], rec[2])
        return new_str
