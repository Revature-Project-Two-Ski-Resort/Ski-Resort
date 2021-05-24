from abc import ABC, abstractmethod


class GroupStringRepo(ABC):
    @abstractmethod
    def all_group_strings(self):
        pass

    @abstractmethod
    def get_group_string(self, grp_str_id):
        pass

    @abstractmethod
    def create_group_string(self, grp_str):
        pass