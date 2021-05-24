from abc import ABC, abstractmethod


class RentalRepo(ABC):
    @abstractmethod
    def all_rentals(self):
        pass

    @abstractmethod
    def get_rental(self, rental_id):
        pass

    @abstractmethod
    def create_rental(self, rental):
        pass
