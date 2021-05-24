class Reservation:
    def __init__(self, reservation_id=0, num_adults=0, num_children=0, num_rooms=0, room1_type='', room1_size='',
                 room2_type='', room2_size='', price=0, total_price=0):
        self.reservation_id = reservation_id
        self.num_adults = num_adults
        self.num_children = num_children
        self.num_rooms = num_rooms
        self.room1_type = room1_type
        self.room1_size = room1_size
        self.room2_type = room2_type
        self.room2_size = room2_size
        self.price = price
        self.total_price = total_price

    def json(self):
        return {
            'reservationId': self.reservation_id,
            'numAdults': self.num_adults,
            'numChildren': self.num_children,
            'numRooms': self.num_rooms,
            'room1Type': self.room1_type,
            'room1Size': self.room1_size,
            'room2Type': self.room2_type,
            'room2Size': self.room2_size,
            'price': self.price,
            'totalPrice': self.total_price
        }

    @staticmethod
    def parse_json(json):
        reservation = Reservation()

        reservation.reservation_id = json['reservationId'] if 'reservationId' in json else 0
        reservation.num_adults = json['numAdults']
        reservation.num_children = json['numChildren']
        reservation.num_rooms = json['numRooms']
        reservation.room1_type = json['room1Type']
        reservation.room1_size = json['room1Size']
        reservation.room2_type = json['room2Type']
        reservation.room2_size = json['room2Size']
        reservation.price = json['price']
        reservation.total_price = json['totalPrice']

        return reservation
