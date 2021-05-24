from abc import ABC, abstractmethod


class ReservationRepo(ABC):
    @abstractmethod
    def all_reservations(self):
        pass

    @abstractmethod
    def get_reservation(self, reservation_id):
        pass

    @abstractmethod
    def create_reservation(self, reservation):
        pass
