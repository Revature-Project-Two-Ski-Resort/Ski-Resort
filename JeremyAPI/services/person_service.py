from repositories.person_repo_impl import PersonRepoImpl


class PersonService:
    person_repo = PersonRepoImpl()

    @classmethod
    def all_people(cls):
        return cls.person_repo.all_people()

    @classmethod
    def get_person(cls, person_id):
        return cls.person_repo.get_person(person_id)

    @classmethod
    def create_activity(cls, person):
        return cls.person_repo.create_person(person)
