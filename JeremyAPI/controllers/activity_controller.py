from flask import jsonify, request

from models.activity import Activity
from services.activity_service import ActivityService


def route(app):
    @app.route("/activity", methods=['GET'])
    def all_activities():
        return jsonify(ActivityService.all_activities()), 200

    @app.route("/activity/<activity_id>", methods=['GET'])
    def get_activity(activity_id):
        return jsonify(ActivityService.get_activity(activity_id)), 200

    @app.route("/activity", methods=['POST'])
    def post_activity():
        activity = Activity.parse_json(request.json)
        new_activity = ActivityService.create_activity(activity)
        return jsonify(new_activity.json()), 201
