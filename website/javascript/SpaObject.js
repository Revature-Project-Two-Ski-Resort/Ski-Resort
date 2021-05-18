let spa = new Object();
    spa.id = 0;
    
    // Spa treatment booked on a by-person basis
    spa.personId = 0;

    // Array with prices for services
    spa.prices = [];

    // Array with booleans set to whether customer is getting the corresponding treatment
    spa.treatments = [];

    spa.totalPrice = function() {
        var price = 0;
        for(var i = 0; i < spa.prices.length; ++i) {
            if(spa.treatments[i]) {
                price += spa.treatments[i];
            }
        }
        return price;
    };