

//activities obj
let activities = new Object();
    //off-season activities
    activities.offseason = new Object();
        //trails
        activities.offseason.trails = new Object();
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
                        activities.offseason.trails.bike.info.west_trail.ages = "16 and up";
                        activities.offseason.trails.bike.info.west_trail.danger = 1;
                        activities.offseason.trails.bike.info.west_trail.price = 0.00;
                        //west trail
                        activities.offseason.trails.bike.info.east_trail.id = 1;
                        activities.offseason.trails.bike.info.east_trail.name = "east trail";
                        activities.offseason.trails.bike.info.east_trail.distance = 11;//in miles
                        activities.offseason.trails.bike.info.east_trail.ages = "12 and up";
                        activities.offseason.trails.bike.info.east_trail.danger = 2;
                        activities.offseason.trails.bike.info.east_trail.price = 0.00;
                        //bear trail
                        activities.offseason.trails.bike.info.bear_trail.id = 1;
                        activities.offseason.trails.bike.info.bear_trail.name = "bear trail";
                        activities.offseason.trails.bike.info.bear_trail.distance = 3;//in miles
                        activities.offseason.trails.bike.info.bear_trail.ages = "6 and up";
                        activities.offseason.trails.bike.info.bear_trail.danger = 0;
                        activities.offseason.trails.bike.info.bear_trail.price = 0.00;
                        //eagle trail
                        activities.offseason.trails.bike.info.eagle_trail.id = 1;
                        activities.offseason.trails.bike.info.eagle_trail.name = "eagle trail";
                        activities.offseason.trails.bike.info.eagle_trail.distance = 9;//in miles
                        activities.offseason.trails.bike.info.eagle_trail.ages = "10 and up";
                        activities.offseason.trails.bike.info.eagle_trail.danger = 0;
                        activities.offseason.trails.bike.info.eagle_trail.price = 0.00;
                activities.offseason.trails.bike.totalprice = 0;
            //hiking trails
            activities.offseason.trails.hiking = new Object();
        //camping
        activities.offseason.camping = new Object();