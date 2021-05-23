from abc import ABC, abstractmethod


class GroupBookRepo(ABC):
    @abstractmethod
    def all_group_books(self):
        pass

    @abstractmethod
    def get_group_book(self, group_book_id):
        pass

    @abstractmethod
    def create_group_book(self, group_book):
        pass
