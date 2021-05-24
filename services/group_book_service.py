from dao.group_book_repo_impl import GroupBookRepoImpl


class GroupBookService:
    group_book_repo = GroupBookRepoImpl()

    @classmethod
    def all_group_books(cls):
        return cls.group_book_repo.all_group_books()

    @classmethod
    def get_group_book(cls, group_book_id):
        return cls.group_book_repo.get_group_book(group_book_id)

    @classmethod
    def create_group_book(cls, group_book):
        return cls.group_book_repo.create_group_book(group_book)
