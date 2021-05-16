let rental = new Object();
    rental.id = 0;
    
    // Each rental is made to one person ('s id)
    rental.person = 0;

    // A rental can consist of multiple people's items, so make a count
    rental.items = new Object();
        rental.items.skis_count = 0;
        rental.items.helmets_count = 0;
        rental.items.snowboards_count = 0;
        rental.items.boots_count = 0;

    // These will be constant for all rental objects
    rental.prices = new Object();
        rental.prices.skis = 0;
        rental.prices.helmet = 0;
        rental.prices.snowboard = 0;
        rental.prices.boots = 0;

    // Date/time of rental beginning and end; end defaults to end of current business day
    rental.start = new Date();
    rental.end = new Date();

    rental.totalPrice = rental.items.skis_count * rental.prices.skis + 
        rental.items.helmets_count * rental.prices.helmet + 
        rental.items.snowboards_count * rental.price.snowboard + 
        rental.items.boots_count * rental.price.boots;