from models.person import Person
from repositories.person_repo import PersonRepo
from util.db_connection import connection


class PersonRepoImpl(PersonRepo):
    def all_people(self):
        sql = "SELECT * FROM reservation.people"

        cursor = connection.cursor()
        cursor.execute(sql)

        rec = cursor.fetchall()

        person_list = []
        for r in rec:
            record = Person(r[0], r[1], r[2], r[3], r[4], r[5])
            person_list.append(record.json())

        return person_list

    def get_person(self, person_id):
        sql = "SELECT * FROM reservation.people WHERE person_id=%s"

        cursor = connection.cursor()
        cursor.execute(sql, [person_id])

        rec = cursor.fetchone()
        new_person = Person(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_person

    def create_person(self, person):
        sql = "INSERT INTO reservation.people VALUES (DEFAULT, %s, %s, %s, %s, %s) RETURNING *"

        cursor = connection.cursor()
        cursor.execute(sql, (person.first_name, person.last_name, person.home_address, person.skill, person.birthday))

        rec = cursor.fetchone()
        new_person = Person(rec[0], rec[1], rec[2], rec[3], rec[4], rec[5])
        return new_person
