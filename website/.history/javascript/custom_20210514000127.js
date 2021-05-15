//every main object will have main values and functions to assist in calculating and attaching their functionality
//price: will have a positive float value to represent the raw cost of the item
//totalprice: a function that will calculate the total price of all objects in the child objects by adding all the "price" values together
//id: uniquely identifies the item
//name: names the item
//ages: array-gives an age range from 0min-200max(200means all ages)
//weather: boolean-notes that this activity is affected by the weather(true) or not(false:default)

//certain properties can be inherited down the line and will be applied to all the child objects
    //inheritable properties
    //weather

//activities obj
let activities = new Object();
    //off-season activities
    activities.offseason = new Object();
        //trails
        activities.offseason.trails = new Object();
            //denotes its danger level is affected by weather
            //will be inherited to all child objects
            activities.offseason.trails.weather = true;
            //bike trails
            activities.offseason.trails.bike = new Object();
                //bike trail - parameters
                activities.offseason.trails.bike.id = 0;
                //different bike trails
                activities.offseason.trails.bike.info = new Object();
                    //info of a different bike trail
                    activities.offseason.trails.bike.info.west_trail = new Object();
                    //west trail
                    activities.offseason.trails.bike.info.west_trail.id = 0;
                    activities.offseason.trails.bike.info.west_trail.name = "west trail";
                    activities.offseason.trails.bike.info.west_trail.distance = 13;//in miles
                    activities.offseason.trails.bike.info.west_trail.ages = [16, 200];
                    activities.offseason.trails.bike.info.west_trail.danger = 1;
                    activities.offseason.trails.bike.info.west_trail.price = 0.00;
                    //west trail
                    activities.offseason.trails.bike.info.east_trail.id = 1;
                    activities.offseason.trails.bike.info.east_trail.name = "east trail";
                    activities.offseason.trails.bike.info.east_trail.distance = 11;//in miles
                    activities.offseason.trails.bike.info.east_trail.ages = [12, 200];
                    activities.offseason.trails.bike.info.east_trail.danger = 2;
                    activities.offseason.trails.bike.info.east_trail.price = 0.00;
                    //bear trail
                    activities.offseason.trails.bike.info.bear_trail.id = 2;
                    activities.offseason.trails.bike.info.bear_trail.name = "bear trail";
                    activities.offseason.trails.bike.info.bear_trail.distance = 3;//in miles
                    activities.offseason.trails.bike.info.bear_trail.ages = [6, 200];
                    activities.offseason.trails.bike.info.bear_trail.danger = 0;
                    activities.offseason.trails.bike.info.bear_trail.price = 0.00;
                    //eagle trail
                    activities.offseason.trails.bike.info.eagle_trail.id = 3;
                    activities.offseason.trails.bike.info.eagle_trail.name = "eagle trail";
                    activities.offseason.trails.bike.info.eagle_trail.distance = 9;//in miles
                    activities.offseason.trails.bike.info.eagle_trail.ages = [10, 200];
                    activities.offseason.trails.bike.info.eagle_trail.danger = 0;
                    activities.offseason.trails.bike.info.eagle_trail.price = 0.00;
                activities.offseason.trails.bike.totalprice = 0;
                //hiking trails
                activities.offseason.trails.hiking = new Object();
                    //hiking trail - parameters
                    activities.offseason.trails.hiking.id = 1;
                    //different hiking trails
                    activities.offseason.trails.hiking.info = new Object();
                        //info of a different hiking trail
                        activities.offseason.trails.hiking.info.west_trail = new Object();
                        //west trail
                        activities.offseason.trails.hiking.info.west_trail.id = 0;
                        activities.offseason.trails.hiking.info.west_trail.name = "west trail";
                        activities.offseason.trails.hiking.info.west_trail.distance = 13;//in miles
                        activities.offseason.trails.hiking.info.west_trail.ages = [16, 200];
                        activities.offseason.trails.hiking.info.west_trail.danger = 1;
                        activities.offseason.trails.hiking.info.west_trail.price = 0.00;
                        //west trail
                        activities.offseason.trails.hiking.info.east_trail.id = 1;
                        activities.offseason.trails.hiking.info.east_trail.name = "east trail";
                        activities.offseason.trails.hiking.info.east_trail.distance = 11;//in miles
                        activities.offseason.trails.hiking.info.east_trail.ages = [12, 200];
                        activities.offseason.trails.hiking.info.east_trail.danger = 2;
                        activities.offseason.trails.hiking.info.east_trail.price = 0.00;
                        //bear trail
                        activities.offseason.trails.hiking.info.bear_trail.id = 2;
                        activities.offseason.trails.hiking.info.bear_trail.name = "bear trail";
                        activities.offseason.trails.hiking.info.bear_trail.distance = 3;//in miles
                        activities.offseason.trails.hiking.info.bear_trail.ages = [6, 200];
                        activities.offseason.trails.hiking.info.bear_trail.danger = 0;
                        activities.offseason.trails.hiking.info.bear_trail.price = 0.00;
                        //eagle trail
                        activities.offseason.trails.bike.info.eagle_trail.id = 3;
                        activities.offseason.trails.bike.info.eagle_trail.name = "eagle trail";
                        activities.offseason.trails.bike.info.eagle_trail.distance = 9;//in miles
                        activities.offseason.trails.bike.info.eagle_trail.ages = [10, 200];
                        activities.offseason.trails.bike.info.eagle_trail.danger = 0;
                        activities.offseason.trails.bike.info.eagle_trail.price = 0.00;
                    activities.offseason.trails.bike.totalprice = 0;
        //camping
        activities.offseason.camping = new Object();