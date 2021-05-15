from cust_logging.my_logger import MyLog


class AcctDoesNotExist(Exception):

    # message is the return message
    # loc is the location __name__ so you know what level the exception came from
    # within loc please describe what method and variable data that is coming in or going out
    def __init__(self, message=None, loc=""):
        self.message = message
        self.loc = loc
        MyLog().error_log(message=message, name=loc)


def _test():
    try:
        raise AcctDoesNotExist(message="The account does not exist!", loc="_test()")
    except AcctDoesNotExist as e:
        print(e)


if __name__ == '__main__':
    _test()
