from flask import jsonify, request

from models.group_string import GroupString
from services.group_string_service import GroupStringService


def route(app):
    @app.route("/grpstr", methods=['GET'])
    def all_group_strings():
        return jsonify(GroupStringService.all_group_strings()), 200

    @app.route("/grpstr/<grp_str_id>", methods=['GET'])
    def get_group_string(grp_str_id):
        return jsonify(GroupStringService.get_group_string(grp_str_id)), 200

    @app.route("/grpstr", methods=['POST'])
    def post_group_string():
        print(request.json)
        grp_str = GroupString.parse_json(request.json)
        new_individual = GroupStringService.create_group_string(grp_str)
        return jsonify(new_individual.json()), 201
