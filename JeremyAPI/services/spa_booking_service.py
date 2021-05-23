from repositories.spa_booking_repo_impl import SpaBookingRepoImpl


class SpaBookingService:
    spa_booking_repo = SpaBookingRepoImpl()

    @classmethod
    def all_spa_bookings(cls):
        return cls.spa_booking_repo.all_spa_bookings()

    @classmethod
    def get_spa_booking(cls, spa_id):
        return cls.spa_booking_repo.get_spa_booking(spa_id)

    @classmethod
    def create_spa_booking(cls, spa):
        return cls.spa_booking_repo.create_spa_booking(spa)
