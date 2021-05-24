from flask import jsonify, request

from models.service_track import ServiceTrack
from services.service_track_service import ServiceTrackService


def route(app):
    @app.route("/service", methods=['GET'])
    def all_service_tracks():
        return jsonify(ServiceTrackService.all_service_tracks()), 200

    @app.route("/service/<service_id>", methods=['GET'])
    def get_service_track(service_id):
        return jsonify(ServiceTrackService.get_service_track(service_id)), 200

    @app.route("/service", methods=['POST'])
    def post_service_track():
        service = ServiceTrack.parse_json(request.json)
        new_service = ServiceTrackService.create_service_track(service)
        return jsonify(new_service.json()), 201
