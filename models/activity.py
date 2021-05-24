class Activity:
    def __init__(self, activity_id=0, lift_tickets=0, trail_users=0, price=0):
        self.activity_id = activity_id
        self.lift_tickets = lift_tickets
        self.trail_users = trail_users
        self.price = price

    def json(self):
        return {
            'activityId': self.activity_id,
            'liftTickets': self.lift_tickets,
            'trailUsers': self.trail_users,
            'price': self.price
        }

    @staticmethod
    def parse_json(json):
        activity = Activity()

        activity.activity_id = json['activityId'] if 'activityId' in json else 0
        activity.lift_tickets = json['liftTickets']
        activity.trail_users = json['trailUsers']
        activity.price = json['price']

        return activity
