from cust_logging.my_logger import MyLog
from dao.dao_imp import Dao


class SkiService:

    # first method
    @classmethod
    def hello(cls):
        MyLog().info_log(message="The test log was successful!", name="hello()")


if __name__ == "__main__":
    print("ski-Service")
else:
    print(__name__)
