import dao.RentalDao;
import models.Rental;
import org.junit.jupiter.api.*;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import services.RentalServices;
import util.dbconnection;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import static org.mockito.Mockito.when;


public class testGetinventory {
public static RentalDao rdao;
public static RentalServices rServ;
public static Connection mockConn;
public static ArrayList<Rental> rentals,rentalactuals,rentalexpected;

public  MockedStatic<dbconnection> mockedStatic;

    @BeforeAll
    static void initAll() throws SQLException {
        rdao = Mockito.mock(RentalDao.class);
        mockConn = Mockito.mock(Connection.class);
        rServ = Mockito.mock(RentalServices.class);

        rentals = new ArrayList<>();
        Rental r1 = new Rental(1, "Mountain Queen", 100.00f, "Room");
        Rental r2 = new Rental(2, "Skii", 150.00f, "Gear");
        rentals.add(r1);
        rentals.add(r2);


    }

    @BeforeEach
    void init() {
    }



    @Test
    public void test() throws SQLException{

        try (MockedStatic<dbconnection> mockedStatic = Mockito.mockStatic(dbconnection.class)) {
            mockedStatic.when(dbconnection::getConnection).thenReturn(mockConn);
            rentalactuals = new ArrayList<Rental>();
            System.out.println(rServ.getRentals());
            when(rdao.getRentals()).thenReturn(rentals);
            System.out.println(rentals.toString());
            rentalexpected = new ArrayList<Rental>();
            Rental r1 = new Rental(1, "Mountain Queen", 100.00f, "Room");
            Rental r2 = new Rental(2, "Skii", 150.00f, "Gear");
            rentalexpected.add(r1);
            rentalexpected.add(r2);
            System.out.println(rentalexpected);
            System.out.println(rentalactuals);
            
            }
        }
    @AfterEach
    void tearDown() {
    }

    @AfterAll
    static void tearDownAll() {
    }


}
