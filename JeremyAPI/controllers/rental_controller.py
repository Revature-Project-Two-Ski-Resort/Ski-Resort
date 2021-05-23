from flask import jsonify, request

from models.rental import Rental
from services.rental_service import RentalService


def route(app):
    @app.route("/rental", methods=['GET'])
    def all_rentals():
        return jsonify(RentalService.all_rentals()), 200

    @app.route("/rental/<rental_id>", methods=['GET'])
    def get_rental(rental_id):
        return jsonify(RentalService.get_rental(rental_id)), 200

    @app.route("/rental", methods=['POST'])
    def post_rental():
        rental = Rental.parse_json(request.json)
        new_rental = RentalService.create_rental(rental)
        return jsonify(new_rental.json()), 201
