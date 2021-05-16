let daycare = new Object();
    // Daycare booking is made on a group basis (linked to a group id)
    daycare.groupId = Number;

    // Up to two adults in the group will be assigned as the guardian (linked to a person id)
    daycare.guardianId = Number;
    daycare.guardianId2 = Number;

    // List of child ids who will be attending
    daycare.children = [];

    // List of ages of children, indexes match to above
    daycare.childAges = [];

    // Fixed prices; age ranges: Baby = 0-1, Toddler = 2-4, Child = 5-8
    daycare.prices = new Object();
        daycare.prices.baby = Number;
        daycare.prices.toddler = Number;
        daycare.prices.child = Number;

    // Date/time of rental beginning and end; end defaults to end of current business day
    daycare.start = new Date();
    daycare.end = new Date();
    
    daycare.totalPrice = function() {
        var rate = 0;
        for(var i = 0; i < children.length; ++i) {
            switch(daycare.childAges[i]) {
                case 0:
                case 1:
                    rate += daycare.prices.baby;
                    break;
                
                case 2:
                case 3:
                case 4:
                    rate += daycare.prices.toddler;
                    break;
                
                case 5:
                case 6:
                case 7:
                case 8:
                    rate += daycare.prices.child;
                    break;

                default:
                    console.log("This individual is outside of our age range.");
                    return -1;
            }
        }
        // Assumes that time is stored in seconds; can change divisor if date is in a different time unit
        return rate*((rental.end-rental.start)/3600);
    };