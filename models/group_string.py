class GroupString:
    def __init__(self, grp_str_id=0, this_str='', email=''):
        self.grp_str_id = grp_str_id
        self.this_str = this_str
        self.email = email

    def json(self):
        return {
            'grpStrId': self.grp_str_id,
            'thisStr': self.this_str,
            'email': self.email
        }

    @staticmethod
    def parse_json(json):
        group_string = GroupString()
        group_string.grp_str_id = json['grpStrId'] if 'grpStrId' in json else 0
        group_string.this_str = json['thisStr']
        group_string.email = json['email']
        return group_string
