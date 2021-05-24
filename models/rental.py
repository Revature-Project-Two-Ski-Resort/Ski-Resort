class Rental:
    def __init__(self, rental_id=0, person_id=0, skis_count=0, helmets_count=0, boots_count=0, snowboards_count=0,
                 start_date=0, end_date=0):
        self.rental_id = rental_id
        self.person_id = person_id
        self.skis_count = skis_count
        self.helmets_count = helmets_count
        self.boots_count = boots_count
        self.snowboards_count = snowboards_count
        self.start_date = start_date
        self.end_date = end_date

    def json(self):
        return {
            'rentalId': self.rental_id,
            'personId': self.person_id,
            'skisCount': self.skis_count,
            'helmetsCount': self.helmets_count,
            'bootsCount': self.boots_count,
            'snowboardsCount': self.snowboards_count,
            'startDate': self.start_date,
            'endDate': self.end_date
        }

    @staticmethod
    def parse_json(json):
        rental = Rental()

        rental.rental_id = json['rentalId'] if 'rentalId' in json else 0
        rental.person_id = json['personId']
        rental.skis_count = json['skisCount']
        rental.helmets_count = json['helmetsCount']
        rental.boots_count = json['bootsCount']
        rental.snowboards_count = json['snowboardsCount']
        rental.start_date = json['startDate']
        rental.end_date = json['endDate']

        return rental
