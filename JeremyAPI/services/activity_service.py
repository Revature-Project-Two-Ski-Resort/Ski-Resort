from repositories.activity_repo_impl import ActivityRepoImpl


class ActivityService:
    activity_repo = ActivityRepoImpl()

    @classmethod
    def all_activities(cls):
        return cls.activity_repo.all_activities()

    @classmethod
    def get_activity(cls, activity_id):
        return cls.activity_repo.get_activity(activity_id)

    @classmethod
    def create_activity(cls, activity):
        return cls.activity_repo.create_activity(activity)
