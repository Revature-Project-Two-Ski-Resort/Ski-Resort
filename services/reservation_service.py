from dao.reservation_repo_impl import ReservationRepoImpl


class ReservationService:
    reservation_repo = ReservationRepoImpl()

    @classmethod
    def all_reservations(cls):
        return cls.reservation_repo.all_reservations()

    @classmethod
    def get_reservation(cls, reservation_id):
        return cls.reservation_repo.get_reservation(reservation_id)

    @classmethod
    def create_activity(cls, reservation):
        return cls.reservation_repo.create_reservation(reservation)
