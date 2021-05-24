import unittest
from dao.activity_repo import ActivityRepo
from cust_exceptions.invalid_value import InvalidValue



# ########################## TESTS ##############################################################
from dao.activity_repo_impl import ActivityRepoImpl
from dao.daycare_booking_repo_impl import DaycareBookingRepoImpl
from dao.individual_book_repo_impl import IndividualBookRepoImpl
from dao.person_repo_impl import PersonRepoImpl
from dao.rental_repo_impl import RentalRepoImpl
from models.activity import Activity


class TestMethods(unittest.TestCase):

    def test_bad_create_activity1(self):
        test = Activity(-5, 3, 5, 20)
        try:
            print(test)
            ActivityRepoImpl().create_activity(test)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "ID is is negative"

    def test_bad_create_activity2(self):
        test1 = Activity(5, -3, 5, 20)
        test2 = Activity(5, 1000000, 5, 20)
        try:
            ActivityRepoImpl().create_activity(test1)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "Number of tickets are out of bounds"

        try:
            ActivityRepoImpl().create_activity(test2)
            raise AssertionError("Invalid ID number")
        except InvalidValue as x:
            assert x.message == "Number of tickets are out of bounds"

    def test_all_individuals(self):
        test = IndividualBookRepoImpl().all_individual_books()
        assert len(test) != 0

    def test_all_day_care_bookings(self):
        test = DaycareBookingRepoImpl().all_daycare_bookings()
        assert len(test) != 0

    def test_all_people(self):
        test = PersonRepoImpl().all_people()
        assert len(test) != 0

    def test_all_rental(self):
        test = RentalRepoImpl().all_rental()
        assert len(test) != 0

    def test_all_activities(self):
        test = ActivityRepoImpl().all_activities()
        assert len(test) != 0

if __name__ == '__main__':
    unittest.main()
