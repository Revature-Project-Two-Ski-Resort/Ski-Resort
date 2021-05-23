from abc import ABC, abstractmethod


class SpaBookingRepo(ABC):
    @abstractmethod
    def all_spa_bookings(self):
        pass

    @abstractmethod
    def get_spa_booking(self, spa_id):
        pass

    @abstractmethod
    def create_spa_booking(self, activity):
        pass
