from abc import ABC, abstractmethod


class ServiceTrackRepo(ABC):
    @abstractmethod
    def all_service_tracks(self):
        pass

    @abstractmethod
    def get_service_tracks(self, service_id):
        pass

    @abstractmethod
    def create_service_track(self, service):
        pass
