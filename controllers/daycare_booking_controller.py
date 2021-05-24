from flask import jsonify, request

from models.daycare_booking import DaycareBooking
from services.daycare_booking_service import DaycareBookingService


def route(app):
    @app.route("/daycare", methods=['GET'])
    def all_daycare_bookings():
        return jsonify(DaycareBookingService.all_daycare_bookings()), 200

    @app.route("/daycare/<daycare_id>", methods=['GET'])
    def get_daycare(daycare_id):
        return jsonify(DaycareBookingService.get_daycare(daycare_id)), 200

    @app.route("/daycare", methods=['POST'])
    def post_daycare():
        daycare = DaycareBooking.parse_json(request.json)
        new_daycare = DaycareBookingService.create_daycare(daycare)
        return jsonify(new_daycare.json()), 201
