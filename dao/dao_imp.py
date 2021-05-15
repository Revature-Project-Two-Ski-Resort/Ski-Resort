import cust_exceptions
from cust_logging.my_logger import MyLog
from db_conn.db_conn import DbConn as Apps


class Dao:

    # File a new Application
    @classmethod
    def file_application(cls, new_app):
        MyLog().info_log(message=new_app, name="file_application()")
        Apps.make_connect()


if __name__ == "__main__":
    Dao.file_application("ski-dao")
else:
    print(__name__)
