from controllers import activity_controller, daycare_booking_controller, group_book_controller, \
    individual_book_controller, person_controller, rental_controller, reservation_controller, service_track_controller, \
    spa_booking_controller


def route(app):
    activity_controller.route(app)
    daycare_booking_controller.route(app)
    group_book_controller.route(app)
    individual_book_controller.route(app)
    person_controller.route(app)
    rental_controller.route(app)
    reservation_controller.route(app)
    service_track_controller.route(app)
    spa_booking_controller.route(app)