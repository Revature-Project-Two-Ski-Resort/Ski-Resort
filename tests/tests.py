import unittest

from cust_exceptions.invalid_value import InvalidValue
from dao.dao_imp import TuitionDao as TDTest


# ########################## TESTS ##############################################################
class TestMethods(unittest.TestCase):

    # Return all employees should be more than 1
    def test_all_employees_1(self):
        out = TDTest.get_emps()
        # Test more than one value is returned
        assert len(out[0]) > 0

    def test_bad_update_activity1(self):
        test = Activity(-5, 3, 5, 20)
        try:
            create_activity(test)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "ID is is negative"

    def test_bad_update_activity2(self):
        test1 = Activity(5, -3, 5, 20)
        test2 = Activity(5, 1000000, 5, 20)
        try:
            create_activity(test1)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "Number of tickets are out of bounds"

        try:
            create_activity(test2)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "Number of tickets are out of bounds"

    def test_all_individuals(self):
        test = all_individual_books()
        assert len(test) != 0

    def test_all_individuals(self):
        test = all_daycare_bookings()
        assert len(test) != 0

    def test_all_people(self):
        test = all_people()
        assert len(test) != 0

    def test_all_rental(self):
        test = all_rental()
        assert len(test) != 0

    def test_all_activities(self):
        test = all_activities()
        assert len(test) != 0

if __name__ == '__main__':
    unittest.main()
