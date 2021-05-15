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
                        //east trail
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
                        activities.offseason.trails.hiking.info.eagle_trail.id = 3;
                        activities.offseason.trails.hiking.info.eagle_trail.name = "eagle trail";
                        activities.offseason.trails.hiking.info.eagle_trail.distance = 9;//in miles
                        activities.offseason.trails.hiking.info.eagle_trail.ages = [10, 200];
                        activities.offseason.trails.hiking.info.eagle_trail.danger = 0;
                        activities.offseason.trails.hiking.info.eagle_trail.price = 0.00;
                        //blue trail
                        activities.offseason.trails.hiking.info.eagle_trail.id = 4;
                        activities.offseason.trails.hiking.info.eagle_trail.name = "blue trail";
                        activities.offseason.trails.hiking.info.eagle_trail.distance = 4;//in miles
                        activities.offseason.trails.hiking.info.eagle_trail.ages = [0, 200];
                        activities.offseason.trails.hiking.info.eagle_trail.danger = 0;
                        activities.offseason.trails.hiking.info.eagle_trail.price = 0.00;
                        //yellow trail
                        activities.offseason.trails.hiking.info.eagle_trail.id = 5;
                        activities.offseason.trails.hiking.info.eagle_trail.name = "yellow trail";
                        activities.offseason.trails.hiking.info.eagle_trail.distance = 2;//in miles
                        activities.offseason.trails.hiking.info.eagle_trail.ages = [0, 200];
                        activities.offseason.trails.hiking.info.eagle_trail.danger = 0;
                        activities.offseason.trails.hiking.info.eagle_trail.price = 0.00;
                        //green trail
                        activities.offseason.trails.hiking.info.eagle_trail.id = 6;
                        activities.offseason.trails.hiking.info.eagle_trail.name = "green trail";
                        activities.offseason.trails.hiking.info.eagle_trail.distance = 2;//in miles
                        activities.offseason.trails.hiking.info.eagle_trail.ages = [0, 200];
                        activities.offseason.trails.hiking.info.eagle_trail.danger = 0;
                        activities.offseason.trails.hiking.info.eagle_trail.price = 0.00;
                    activities.offseason.trails.hiking.totalprice = 0;
        //camping
        activities.offseason.camping = new Object();
            //denotes its danger level is affected by weather
            //will be inherited to all child objects
            activities.offseason.camping.weather = true;
            //camping sites parameters
            activities.offseason.camping.sites = new Object();
                //different camping sites
                activities.offseason.camping.sites.info = new Object();
                //greentree site
                activities.offseason.camping.sites.info.greentree = new Object();
                    activities.offseason.camping.sites.info.greentree.id = 0;
                    activities.offseason.camping.sites.info.greentree.name = "green tree";
                    activities.offseason.camping.sites.info.greentree.danger = 3;
                    activities.offseason.camping.sites.info.greentree.ages = [6, 200];
                    activities.offseason.camping.sites.info.greentree.price = 20.00;
                    activities.offseason.camping.sites.info.greentree.startdate = 5/10/2021;
                    activities.offseason.camping.sites.info.greentree.enddate = 5/11/2021;
                    





//ajax simplified--------------
function ajaxCaller() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(loading_container).innerHTML = "";

            let employees = JSON.parse(this.responseText);
            console.log("load emp by email:");
            console.log(employees);

            for (let i = 0; i < employees.length; i++) {
                if (employees[i].Email) {
                    //Create a list below of selectable emails as you type your email in
                    document.getElementById(result_load).style.display = "inline";
                    let node = document.createElement("a");
                    node.setAttribute("href", `${send_me}${employees[i]["Employee ID"]}`);
                    node.setAttribute("id", `help_email${i}`);
                    let textnode = document.createTextNode(employees[i].Email);
                    node.appendChild(textnode);
                    document.getElementById(loading_container).appendChild(node);
                }
            }
        } else if (this.readyState == 4 && this.status == 400) {
        document.getElementById(loading_container).innerHTML = `<p>${this.responseText}</p>`
    } else {
        let pre_load_ani = document.createElement("div");
        pre_load_ani.setAttribute("class", "loader");
        document.getElementById(loading_container).appendChild(pre_load_ani);
    }

    url = "http://localhost:5000/search/" + search_query;
    ajax.open("GET", url, true);
    ajax.send();
    }
}


//money formatter--------------

// Create our number formatter.
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});