let lodging = new Object();

lodging.reservation = new Object();

//Reservation id
lodging.reservation.id = 0;
//number of rooms
lodging.reservation.grouprooms = 0;
//new room in reservation
lodging.reservation.grouprooms.room = new Object();
    lodging.reservation.grouprooms.room.id = 0;
    lodging.reservation.grouprooms.room.viewtype = "nonMountian";
    lodging.reservation.grouprooms.room.roomSize = "double Queen";
    lodging.reservation.grouprooms.room.occupants = 4;
    lodging.reservation.grouprooms.room.children = 2;
    lodging.reservation.grouprooms.room.adults = 2;
    lodging.reservation.grouprooms.room.price =0.00;
