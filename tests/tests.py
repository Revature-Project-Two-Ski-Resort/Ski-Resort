import unittest
from dao.dao_imp import TuitionDao as TDTest


# ########################## TESTS ##############################################################
class TestMethods(unittest.TestCase):

    # Return all employees should be more than 1
    def test_all_employees_1(self):
        out = TDTest.get_emps()
        # Test more than one value is returned
        assert len(out[0]) > 0


if __name__ == '__main__':
    unittest.main()
