class Person:
    def __init__(self, person_id=0, first_name='', last_name='', home_address='', skill='', birthday=''):
        self.person_id = person_id
        self.first_name = first_name
        self.last_name = last_name
        self.home_address = home_address
        self.skill = skill
        self.birthday = birthday

    def json(self):
        return {
            'personId': self.person_id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'homeAddress': self.home_address,
            'skill': self.skill,
            'birthday': self.birthday
        }

    @staticmethod
    def parse_json(json):
        person = Person()

        person.person_id = json['personId'] if 'personId' in json else 0
        person.first_name = json['firstName']
        person.last_name = json['lastName']
        person.home_address = json['homeAddress']
        person.skill = json['skill']
        person.birthday = json['birthday']

        return person
