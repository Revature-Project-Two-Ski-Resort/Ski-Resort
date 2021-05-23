from repositories.service_track_repo_impl import ServiceTrackRepoImpl


class RentalService:
    service_track_repo = ServiceTrackRepoImpl()

    @classmethod
    def all_service_tracks(cls):
        return cls.service_track_repo.all_service_tracks()

    @classmethod
    def get_service_track(cls, service_id):
        return cls.service_track_repo.get_service_track(service_id)

    @classmethod
    def create_service_track(cls, service):
        return cls.service_track_repo.create_service_track(service)
