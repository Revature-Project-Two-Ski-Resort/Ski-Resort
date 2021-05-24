from abc import ABC, abstractmethod


class ActivityRepo(ABC):
    @abstractmethod
    def all_activities(self):
        pass

    @abstractmethod
    def get_activity(self, activity_id):
        pass

    @abstractmethod
    def create_activity(self, activity):
        pass
