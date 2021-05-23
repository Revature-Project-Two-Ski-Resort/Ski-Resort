from abc import ABC, abstractmethod


class IndividualBookRepo(ABC):
    @abstractmethod
    def all_individual_books(self):
        pass

    @abstractmethod
    def get_individual_book(self, individual_book_id):
        pass

    @abstractmethod
    def create_individual_book(self, individual_book):
        pass
