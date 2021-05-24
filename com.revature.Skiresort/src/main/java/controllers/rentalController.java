package controllers;

import com.google.gson.Gson;
import io.javalin.http.Handler;
import models.Rental;
import services.RentalServices;

import java.util.ArrayList;

public class rentalController {
    private Gson gson = new Gson();
    RentalServices rentalserv = new RentalServices();

    public Handler getAllInventory = (context) -> {
        ArrayList<Rental> inv = rentalserv.getRentals();
        String invJson =gson.toJson(inv);
        context.result(invJson);

    };
    public Handler getRoomList = (context) -> {
        ArrayList<Rental> inv = rentalserv.getRooms();
        String invJson =gson.toJson(inv);
         context.status(200);
        context.result(invJson);

    };
}
