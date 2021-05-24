from abc import ABC, abstractmethod


class DaycareBookingRepo(ABC):
    @abstractmethod
    def all_daycare_bookings(self):
        pass

    @abstractmethod
    def get_daycare_booking(self, daycare_id):
        pass

    @abstractmethod
    def create_daycare_booking(self, activity):
        pass
