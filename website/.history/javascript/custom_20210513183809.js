["east trail", "bear trail", "eagle trail"]

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
                        activities.offseason.trails.bike.info.west_trail.id = 0;
                        activities.offseason.trails.bike.info.west_trail.name = "west trail";
                        activities.offseason.trails.bike.info.west_trail.distance = 13;//in miles
                        activities.offseason.trails.bike.info.west_trail.ages = "6 and up";//in miles
                activities.offseason.trails.bike.totalprice = 0;
            //hiking trails
            activities.offseason.trails.hiking = new Object();
        //camping
        activities.offseason.camping = new Object();