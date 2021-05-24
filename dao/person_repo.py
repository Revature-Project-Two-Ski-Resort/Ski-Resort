from abc import ABC, abstractmethod


class PersonRepo(ABC):
    @abstractmethod
    def all_people(self):
        pass

    @abstractmethod
    def get_person(self, person_id):
        pass

    @abstractmethod
    def create_person(self, person):
        pass
