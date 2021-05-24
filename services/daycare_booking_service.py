from dao.daycare_booking_repo_impl import DaycareBookingRepoImpl


class DaycareBookingService:
    daycare_booking_repo = DaycareBookingRepoImpl()

    @classmethod
    def all_daycare_bookings(cls):
        return cls.daycare_booking_repo.all_daycare_bookings()

    @classmethod
    def get_daycare_booking(cls, daycare_id):
        return cls.daycare_booking_repo.get_daycare_booking(daycare_id)

    @classmethod
    def create_daycare_booking(cls, daycare):
        return cls.daycare_booking_repo.create_daycare_booking(daycare)
