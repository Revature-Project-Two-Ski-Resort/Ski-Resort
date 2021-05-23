import psycopg2
from jproperties import Properties
from psycopg2._psycopg import OperationalError


def create_connection():
    try:
        conn_prop = Properties()
        conn_prop.load(open("../resources/connection.properties", "rb"))
        conn = psycopg2.connect(
            database=conn_prop.get("database"),
            user=conn_prop.get("user"),
            password=conn_prop.get("password"),
            host=conn_prop.get("host"),
            port=conn_prop.get("port")
        )
        return conn
    except OperationalError as e:
        print(f'{e}')
        return conn


connection = create_connection()
