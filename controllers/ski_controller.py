from psycopg2 import Error
from flask import jsonify, request
from cust_logging.my_logger import MyLog
from services.ski_service import SkiService

# welcome message in the logger
MyLog.info_log(
    message="Ski Resort Program Started!", name=f"{__name__}")  # Would replace using print("Program Started")


def route(app):
    # Welcome message
    @app.route('/', methods=["GET", "POST"])
    def hello_world():
        MyLog.info_log(message="Ski Resort Program Started!", name="hello_world()")
        return "Welcome to the ski Resort!", 200

    # Page not found message
    @app.errorhandler(404)
    def page_not_found(e):
        MyLog.info_log(message="This page is not found!", name="page_not_found()")
        # how to load a custom page not found template doc
        # return render_template('404.html'), 404
        return "Page Not Found!", 404


if __name__ == "__main__":
    print("ski-controller")
else:
    print(__name__)
