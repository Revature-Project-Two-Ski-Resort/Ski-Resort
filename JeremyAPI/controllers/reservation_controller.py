from flask import jsonify, request

from models.reservation import Reservation
from services.reservation_service import ReservationService


def route(app):
    @app.route("/reservation", methods=['GET'])
    def all_activities():
        return jsonify(ReservationService.all_activities()), 200

    @app.route("/reservation/<reservation_id>", methods=['GET'])
    def get_reservation(reservation_id):
        return jsonify(ReservationService.get_reservation(reservation_id)), 200

    @app.route("/reservation", methods=['POST'])
    def post_reservation():
        reservation = Reservation.parse_json(request.json)
        new_reservation = ReservationService.create_reservation(reservation)
        return jsonify(new_reservation.json()), 201
