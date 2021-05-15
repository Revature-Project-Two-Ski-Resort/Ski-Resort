from controllers import ski_controller, contact_controller


def route(app):
    # Call all other controllers
    ski_controller.route(app)
    contact_controller.route(app)


if __name__ == "__main__":
    print("front-controller")
else:
    print(__name__)
