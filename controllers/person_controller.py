from flask import jsonify, request

from models.person import Person
from services.person_service import PersonService


def route(app):
    @app.route("/person", methods=['GET'])
    def all_people():
        return jsonify(PersonService.all_people()), 200

    @app.route("/person/<person_id>", methods=['GET'])
    def get_person(person_id):
        return jsonify(PersonService.get_person(person_id)), 200

    @app.route("/person", methods=['POST'])
    def post_person():
        person = Person.parse_json(request.json)
        new_person = PersonService.create_person(person)
        return jsonify(new_person.json()), 201
