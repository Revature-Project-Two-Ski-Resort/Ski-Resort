from repositories.rental_repo_impl import RentalRepoImpl


class RentalService:
    rental_repo = RentalRepoImpl()

    @classmethod
    def all_rentals(cls):
        return cls.rental_repo.all_rentals()

    @classmethod
    def get_rental(cls, rental_id):
        return cls.rental_repo.get_rental(rental_id)

    @classmethod
    def create_activity(cls, rental):
        return cls.rental_repo.create_rental(rental)
