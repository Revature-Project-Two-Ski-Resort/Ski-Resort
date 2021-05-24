from dao.individual_book_repo_impl import IndividualBookRepoImpl


class IndividualBookService:
    individual_book_repo = IndividualBookRepoImpl()

    @classmethod
    def all_individual_books(cls):
        return cls.individual_book_repo.all_individual_books()

    @classmethod
    def get_individual_book(cls, individual_book_id):
        return cls.individual_book_repo.get_individual_book(individual_book_id)

    @classmethod
    def create_individual_book(cls, individual_book):
        return cls.individual_book_repo.create_individual_book(individual_book)
