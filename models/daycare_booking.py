class DaycareBooking:
    def __init__(self, daycare_id=0, reservation_id=0, guardian_name='', guardian2_name='', start_time=0, end_time=0):
        self.daycare_id = daycare_id
        self.reservation_id = reservation_id
        self.guardian_name = guardian_name
        self.guardian2_name = guardian2_name
        self.start_time = start_time
        self.end_time = end_time

    def json(self):
        return {
            'daycareId': self.daycare_id,
            'reservationId': self.reservation_id,
            'guardianName': self.guardian_name,
            'guardian2Name': self.guardian2_name,
            'startTime': self.start_time,
            'endTime': self.end_time
        }

    @staticmethod
    def parse_json(json):
        daycare = DaycareBooking()

        daycare.daycare_id = json['daycareId'] if 'daycareId' in json else 0
        daycare.reservation_id = json['reservationId']
        daycare.guardian_name = json['guardianName']
        daycare.guardian2_name = json['guardian2Name']
        daycare.start_time = json['startTime']
        daycare.end_time = json['endTime']

        return daycare
