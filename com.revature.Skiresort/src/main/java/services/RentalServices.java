package services;

import dao.RentalDao;
import models.Rental;
import util.dbconnection;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public class RentalServices {
RentalDao rdao = new RentalDao();
    public ArrayList<Rental> getRentals() throws SQLException {
        ArrayList<Rental> rentals = rdao.getRentals();

        return rentals;
    }

    ;
    public ArrayList<Rental> getRooms() throws SQLException {
        ArrayList<Rental> rentals = rdao.getRooms();

        return rentals;
    }

    public void testConnection() throws SQLException {
        try (Connection con = dbconnection.getConnnection()) {

            System.out.println(con);

            if (con == null) {
                System.out.println("Connection not made");
            }

        }
    }
}

