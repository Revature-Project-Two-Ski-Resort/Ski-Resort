from flask import jsonify, request

from models.spa_booking import SpaBooking
from services.spa_booking_service import SpaBookingService


def route(app):
    @app.route("/spa", methods=['GET'])
    def all_spa_bookings():
        return jsonify(SpaBookingService.all_spa_bookings()), 200

    @app.route("/spa/<spa_id>", methods=['GET'])
    def get_spa(spa_id):
        return jsonify(SpaBookingService.get_spa(spa_id)), 200

    @app.route("/spa", methods=['POST'])
    def post_spa():
        spa = SpaBooking.parse_json(request.json)
        new_spa = SpaBookingService.create_spa(spa)
        return jsonify(new_spa.json()), 201
