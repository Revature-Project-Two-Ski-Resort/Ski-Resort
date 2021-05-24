package app;

import controllers.rentalController;
import io.javalin.Javalin;

public class App {
    public static void main(String[] args) {


        Javalin app = Javalin.create(config -> config.enableCorsForAllOrigins());
        establishRoutes(app);

        app.start(7001);

    }

    private static void establishRoutes(Javalin app) {
        //just need to add correct path based on url
        rentalController rc = new rentalController();
        app.get("",rc.getAllInventory);
        app.get("/lodging",rc.getRoomList);
    }

}
