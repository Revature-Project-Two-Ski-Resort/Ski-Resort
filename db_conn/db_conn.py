import psycopg2
from psycopg2 import Error
from cust_logging.my_logger import MyLog
from db_conn.conn_access_point import DatabaseConn as Conn_Cred


class DbConn:

    @staticmethod
    def make_connect(query=None, var_tuple=None):
        # holds the application data
        tuition_app = {}
        tuition_app.clear()
        connection = "No connection made yet!"
        cursor = connection
        try:
            # read connection parameters
            params = Conn_Cred.load_conn()
            # Connect to an existing database
            connection = psycopg2.connect(**params)
            # If you don't specify a query into this function then default to this
            if query is None:
                # Create a cursor to perform database operations
                cursor = connection.cursor()
                # Print PostgreSQL details
                MyLog.info_log("PostgreSQL server information", name="make_connect")
                MyLog.info_log(connection.get_dsn_parameters(), name="make_connect")
                # Executing a SQL query
                cursor.execute("SELECT version();", name="make_connect")
                # Fetch result
                record = cursor.fetchone()
                MyLog.info_log("You are connected to - ", name="make_connect")
                MyLog.info_log(record, name="make_connect")
            else:
                # Create a cursor to perform database operations
                cursor = connection.cursor()
                # Executing a SQL query
                cursor.execute(query, var_tuple)
                # Commit the SQL query
                connection.commit()
                # Fetch result
                record = cursor.fetchall()
                MyLog.info_log("You are connected to Postgre here are your results - ", name="make_connect")
                MyLog.info_log(record, name="make_connect")
                MyLog.info_log(tuition_app, name="make_connect")
                return tuition_app

        except (Exception, Error) as error:
            MyLog.error_log("Error while connecting to PostgreSQL", name="make_connect")
            MyLog.error_log(error, name="make_connect")
            raise error
        finally:
            if connection:
                cursor.close()
                connection.close()
                MyLog.info_log("PostgreSQL connection is closed", name="make_connect")


if __name__ == "__main__":
    DbConn.make_connect()
