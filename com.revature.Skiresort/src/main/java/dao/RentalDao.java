package dao;

import models.Rental;
import util.dbconnection;

import javax.xml.transform.Result;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class RentalDao {

    public ArrayList<Rental> getRentals()  throws SQLException {
        Connection dbc = dbconnection.getConnection();
        ArrayList<Rental> rentalList = new ArrayList<Rental>();
        String sql = "Select * from reservation.inventory";

        PreparedStatement pstmt = dbc.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        while (rs.next()) {
            rentalList.add(buildRental(rs));
        }

        return rentalList;
    }

    public ArrayList<Rental> getRooms()  throws SQLException {
        Connection dbc = dbconnection.getConnection();
        ArrayList<Rental> rentalList = new ArrayList<Rental>();
        String sql = "Select * from reservation.inventory where typerental = 'Room';";

        PreparedStatement pstmt = dbc.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        while (rs.next()) {
            rentalList.add(buildRental(rs));
        }

        return rentalList;
    }
//    public ArrayList<Rental> getGear()  throws SQLException {
//        Connection dbc = dbconnection.getConnnection();
//        ArrayList<Rental> rentalList = new ArrayList<Rental>();
//        String sql = "Select * from reservation.inventory where typerental = 'Gear';";
//
//        PreparedStatement pstmt = dbc.prepareStatement(sql);
//        ResultSet rs = pstmt.executeQuery();
//        while (rs.next()) {
//            rentalList.add(buildRental(rs));
//        }
//
//        return rentalList;
//    }

    public Rental buildRental(ResultSet rs) throws SQLException{
        Rental r = new Rental();
        r.setId(rs.getInt("id"));
        r.setName(rs.getString("rentalName"));
        r.setQuantity(rs.getInt("numcount"));
        r.setType(rs.getString("typerental"));

        return r;
    }
}
