from dao.group_string_repo_impl import GroupStringRepoImpl


class GroupStringService:
    group_string_repo = GroupStringRepoImpl()

    @classmethod
    def all_group_strings(cls):
        return cls.group_string_repo.all_group_strings()

    @classmethod
    def get_group_string(cls, grp_str_id):
        return cls.group_string_repo.get_group_string(grp_str_id)

    @classmethod
    def create_group_string(cls, group_string):
        return cls.group_string_repo.create_group_string(group_string)