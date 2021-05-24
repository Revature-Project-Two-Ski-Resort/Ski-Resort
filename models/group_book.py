class GroupBook:
    def __init__(self, group_id=0, item_id=0, quantity=0):
        self.group_id = group_id
        self.item_id = item_id
        self.quantity = quantity

    def json(self):
        return {
            'groupId': self.group_id,
            'itemId': self.item_id,
            'quantity': self.quantity
        }

    @staticmethod
    def parse_json(json):
        group_book = GroupBook()

        group_book.group_id = json['groupId'] if 'groupId' in json else 0
        group_book.item_id = json['itemId']
        group_book.quantity = json['quantity']

        return group_book
