from flask import jsonify, request

from models.individual_book import IndividualBook
from services.individual_book_service import IndividualBookService


def route(app):
    @app.route("/individual", methods=['GET'])
    def all_individual_books():
        return jsonify(IndividualBookService.all_individual_books()), 200

    @app.route("/individual/<individual_id>", methods=['GET'])
    def get_individual(individual_id):
        return jsonify(IndividualBookService.get_individual_book(individual_id)), 200

    @app.route("/individual", methods=['POST'])
    def post_individual():
        individual = IndividualBook.parse_json(request.json)
        new_individual = IndividualBookService.create_individual_book(individual)
        return jsonify(new_individual.json()), 201
