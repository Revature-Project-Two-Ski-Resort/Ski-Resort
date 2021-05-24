class ServiceTrack:
    def __init__(self, service_id=0, ski_rentals=0, snowboard_rentals=0, spa_day_pkg=0, spa_massage_pkg=0,
                 couples_pkg=0, warmup_pkg=0, daycare_children=0, price=0):
        self.service_id = service_id
        self.ski_rentals = ski_rentals
        self.snowboard_rentals = snowboard_rentals
        self.spa_day_pkg = spa_day_pkg
        self.spa_massage_pkg = spa_massage_pkg
        self.couples_pkg = couples_pkg
        self.warmup_pkg = warmup_pkg
        self.daycare_children = daycare_children
        self.price = price

    def json(self):
        return {
            'serviceId': self.service_id,
            'skiRentals': self.ski_rentals,
            'snowboardRentals': self.snowboard_rentals,
            'spaDayPkg': self.spa_day_pkg,
            'spaMassagePkg': self.spa_massage_pkg,
            'couplesPkg': self.couples_pkg,
            'warmupPkg': self.warmup_pkg,
            'daycareChildren': self.daycare_children,
            'price': self.price
        }

    @staticmethod
    def parse_json(json):
        service = ServiceTrack()

        service.service_id = json['serviceId'] if 'serviceId' in json else 0
        service.ski_rentals = json['skiRentals']
        service.snowboard_rentals = json['snowboardRentals']
        service.spa_day_pkg = json['spaDayPkg']
        service.spa_massage_pkg = json['spaMassagePkg']
        service.couples_pkg = json['couplesPkg']
        service.warmup_pkg = json['warmupPkg']
        service.daycare_children = json['daycareChildren']
        service.price = json['price']

        return service
