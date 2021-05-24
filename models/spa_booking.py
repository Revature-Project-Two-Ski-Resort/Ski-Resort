class SpaBooking:
    def __init__(self, spa_id=0, reservation_id=0, is_spa_pkg=False, is_spa_massage=False, is_couples_pkg=False,
                 is_warmup_pkg=False):
        self.spa_id = spa_id
        self.reservation_id = reservation_id
        self.is_spa_pkg = is_spa_pkg
        self.is_spa_massage = is_spa_massage
        self.is_couples_pkg = is_couples_pkg
        self.is_warmup_pkg = is_warmup_pkg

    def json(self):
        return {
            'spaId': self.spa_id,
            'reservationId': self.reservation_id,
            'isSpaPkg': self.is_spa_pkg,
            'isSpaMassage': self.is_spa_massage,
            'isCouplesPkg': self.is_couples_pkg,
            'isWarmupPkg': self.is_warmup_pkg
        }

    @staticmethod
    def parse_json(json):
        spa = SpaBooking()

        spa.spa_id = json['spaId'] if 'spaId' in json else 0
        spa.reservation_id = json['reservationId']
        spa.is_spa_pkg = json['isSpaPkg']
        spa.is_spa_massage = json['isSpaMassage']
        spa.is_couples_pkg = json['isCouplesPkg']
        spa.is_warmup_pkg = json['isWarmupPkg']

        return spa