from flask import jsonify, request

from models.group_book import GroupBook
from services.group_book_service import GroupBookService


def route(app):
    @app.route("/group", methods=['GET'])
    def all_group_books():
        return jsonify(GroupBookService.all_group_books()), 200

    @app.route("/group/<group_id>", methods=['GET'])
    def get_group(group_id):
        return jsonify(GroupBookService.get_group_book(group_id)), 200

    @app.route("/group", methods=['POST'])
    def post_group():
        group = GroupBook.parse_json(request.json)
        new_group = GroupBookService.create_group_book(group)
        return jsonify(new_group), 201
