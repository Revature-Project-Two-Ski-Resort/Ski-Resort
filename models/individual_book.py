class IndividualBook:
    def __init__(self, individual_id=0, activity_id=0, quantity=0, group_id=0):
        self.individual_id = individual_id
        self.activity_id = activity_id
        self.quantity = quantity
        self.group_id = group_id

    def json(self):
        return {
            'individualId': self.individual_id,
            'activityId': self.activity_id,
            'quantity': self.quantity,
            'groupId': self.group_id
        }

    @staticmethod
    def parse_json(json):
        individual_book = IndividualBook()

        individual_book.individual_id = json['individualId'] if 'individualId' in json else 0
        individual_book.activity_id = json['activityId']
        individual_book.quantity = json['quantity']
        individual_book.group_id = json['groupId']

        return individual_book
