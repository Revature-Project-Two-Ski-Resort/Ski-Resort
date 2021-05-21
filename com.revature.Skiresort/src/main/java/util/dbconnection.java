package util;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class dbconnection {
    private static Connection conn = null;

    public static Connection getConnnection() {
        if (conn == null) {
            try {
                FileInputStream input = new FileInputStream(dbconnection.class.getClassLoader().getResource("connection.properties").getFile());

                Properties props = new Properties();
                props.load(input);

                String url = props.getProperty("url");
                String username = props.getProperty("username");
                String password = props.getProperty("password");

                conn = DriverManager.getConnection(url, username, password);
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return conn;
    }
}

