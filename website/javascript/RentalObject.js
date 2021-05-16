let rental = new Object();
    // Each rental is made to one person ('s id)
    rental.person = Number;

    // A rental can consist of multiple people's items, so make a count
    rental.items = new Object();
        rental.items.skis_count = Number;
        rental.items.helmets_count = Number;
        rental.items.snowboards_count = Number;
        rental.items.boots_count = Number;

    // These will be constant for all rental objects
    rental.prices = new Object();
        rental.prices.skis = Number;
        rental.prices.helmet = Number;
        rental.prices.snowboard = Number;
        rental.prices.boots = Number;

    // Date/time of rental beginning and end; end defaults to end of current business day
    rental.start = new Date();
    rental.end = new Date();

    rental.totalPrice = rental.items.skis_count * rental.prices.skis + 
        rental.items.helmets_count * rental.prices.helmet + 
        rental.items.snowboards_count * rental.price.snowboard + 
        rental.items.boots_count * rental.price.boots;