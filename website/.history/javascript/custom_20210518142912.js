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
                    //west trail
                    activities.offseason.trails.bike.info.west_trail = new Object();
                        activities.offseason.trails.bike.info.west_trail.id = 0;
                        activities.offseason.trails.bike.info.west_trail.name = "west trail";
                        activities.offseason.trails.bike.info.west_trail.distance = 13;//in miles
                        activities.offseason.trails.bike.info.west_trail.ages = [16, 200];
                        activities.offseason.trails.bike.info.west_trail.danger = 1;
                        activities.offseason.trails.bike.info.west_trail.price = 0.00;
                    //east trail
                    activities.offseason.trails.bike.info.east_trail = new Object();
                        activities.offseason.trails.bike.info.east_trail.id = 1;
                        activities.offseason.trails.bike.info.east_trail.name = "east trail";
                        activities.offseason.trails.bike.info.east_trail.distance = 11;//in miles
                        activities.offseason.trails.bike.info.east_trail.ages = [12, 200];
                        activities.offseason.trails.bike.info.east_trail.danger = 2;
                        activities.offseason.trails.bike.info.east_trail.price = 0.00;
                    //bear trail
                    activities.offseason.trails.bike.info.bear_trail = new Object();
                        activities.offseason.trails.bike.info.bear_trail.id = 2;
                        activities.offseason.trails.bike.info.bear_trail.name = "bear trail";
                        activities.offseason.trails.bike.info.bear_trail.distance = 3;//in miles
                        activities.offseason.trails.bike.info.bear_trail.ages = [6, 200];
                        activities.offseason.trails.bike.info.bear_trail.danger = 0;
                        activities.offseason.trails.bike.info.bear_trail.price = 0.00;
                    //eagle trail
                    activities.offseason.trails.bike.info.eagle_trail = new Object();
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
                        //west trail
                        activities.offseason.trails.hiking.info.west_trail = new Object();
                            activities.offseason.trails.hiking.info.west_trail.id = 0;
                            activities.offseason.trails.hiking.info.west_trail.name = "west trail";
                            activities.offseason.trails.hiking.info.west_trail.distance = 13;//in miles
                            activities.offseason.trails.hiking.info.west_trail.ages = [16, 200];
                            activities.offseason.trails.hiking.info.west_trail.danger = 1;
                            activities.offseason.trails.hiking.info.west_trail.price = 0.00;
                        //east trail
                        activities.offseason.trails.hiking.info.east_trail = new Object();
                            activities.offseason.trails.hiking.info.east_trail.id = 1;
                            activities.offseason.trails.hiking.info.east_trail.name = "east trail";
                            activities.offseason.trails.hiking.info.east_trail.distance = 11;//in miles
                            activities.offseason.trails.hiking.info.east_trail.ages = [12, 200];
                            activities.offseason.trails.hiking.info.east_trail.danger = 2;
                            activities.offseason.trails.hiking.info.east_trail.price = 0.00;
                        //bear trail
                        activities.offseason.trails.hiking.info.bear_trail = new Object();
                            activities.offseason.trails.hiking.info.bear_trail.id = 2;
                            activities.offseason.trails.hiking.info.bear_trail.name = "bear trail";
                            activities.offseason.trails.hiking.info.bear_trail.distance = 3;//in miles
                            activities.offseason.trails.hiking.info.bear_trail.ages = [6, 200];
                            activities.offseason.trails.hiking.info.bear_trail.danger = 0;
                            activities.offseason.trails.hiking.info.bear_trail.price = 0.00;
                        //eagle trail
                        activities.offseason.trails.hiking.info.eagle_trail = new Object();
                            activities.offseason.trails.hiking.info.eagle_trail.id = 3;
                            activities.offseason.trails.hiking.info.eagle_trail.name = "eagle trail";
                            activities.offseason.trails.hiking.info.eagle_trail.distance = 9;//in miles
                            activities.offseason.trails.hiking.info.eagle_trail.ages = [10, 200];
                            activities.offseason.trails.hiking.info.eagle_trail.danger = 0;
                            activities.offseason.trails.hiking.info.eagle_trail.price = 0.00;
                        //blue trail
                        activities.offseason.trails.hiking.info.blue_trail = new Object();
                            activities.offseason.trails.hiking.info.blue_trail.id = 4;
                            activities.offseason.trails.hiking.info.blue_trail.name = "blue trail";
                            activities.offseason.trails.hiking.info.blue_trail.distance = 4;//in miles
                            activities.offseason.trails.hiking.info.blue_trail.ages = [0, 200];
                            activities.offseason.trails.hiking.info.blue_trail.danger = 0;
                            activities.offseason.trails.hiking.info.blue_trail.price = 0.00;
                        //yellow trail
                        activities.offseason.trails.hiking.info.yellow_trail = new Object();
                            activities.offseason.trails.hiking.info.yellow_trail.id = 5;
                            activities.offseason.trails.hiking.info.yellow_trail.name = "yellow trail";
                            activities.offseason.trails.hiking.info.yellow_trail.distance = 2;//in miles
                            activities.offseason.trails.hiking.info.yellow_trail.ages = [0, 200];
                            activities.offseason.trails.hiking.info.yellow_trail.danger = 0;
                            activities.offseason.trails.hiking.info.yellow_trail.price = 0.00;
                        //green trail
                        activities.offseason.trails.hiking.info.green_trail = new Object();
                            activities.offseason.trails.hiking.info.green_trail.id = 6;
                            activities.offseason.trails.hiking.info.green_trail.name = "green trail";
                            activities.offseason.trails.hiking.info.green_trail.distance = 2;//in miles
                            activities.offseason.trails.hiking.info.green_trail.ages = [0, 200];
                            activities.offseason.trails.hiking.info.green_trail.danger = 0;
                            activities.offseason.trails.hiking.info.green_trail.price = 0.00;
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
                    

//Main user object
let group_book = new Object();
    group_book.id = 0;
    group_book.pin = 0000;
    group_book.activities = new Object();
        group_book.activities.camping = new Object();
            group_book.activities.camping.sites = new Object();
                group_book.activities.camping.sites.greentree = new Object();
                    group_book.activities.camping.sites.greentree.id = 0;
                    group_book.activities.camping.sites.greentree.name = "green tree";
                    group_book.activities.camping.sites.greentree.danger = 3;
                    group_book.activities.camping.sites.greentree.ages = [6, 200];
                    group_book.activities.camping.sites.greentree.price = 20.00;
                    group_book.activities.camping.sites.greentree.startdate = 5/10/2021;
                    group_book.activities.camping.sites.greentree.enddate = 5/11/2021;
    
    group_book.users = new Object();
        group_book.users.primaryuser = new Object();
            group_book.users.primaryuser.id = 0;
            group_book.users.primaryuser.firstname = "steve";
            group_book.users.primaryuser.middlename = "sam";
            group_book.users.primaryuser.lastname = "john";
            group_book.users.primaryuser.price = 20.00;
            group_book.users.primaryuser.activities = new Object();
            group_book.users.primaryuser.activities.greentree = new Object();
                group_book.users.primaryuser.activities.greentree.id = 0;
                group_book.users.primaryuser.activities.greentree.name = "green tree";
                group_book.users.primaryuser.activities.greentree.danger = 3;
                group_book.users.primaryuser.activities.greentree.ages = [6, 200];
                group_book.users.primaryuser.activities.greentree.price = 20.00;
                group_book.users.primaryuser.activities.greentree.startdate = 5/10/2021;
                group_book.users.primaryuser.activities.greentree.enddate = 5/11/2021;
            group_book.users.primaryuser.rentals = new Object();
            group_book.users.primaryuser.lodging = new Object();
            group_book.users.primaryuser.totalprice = getTotalPrice;
        group_book.users.user1 = new Object();
    group_book.totalprice = getTotalPrice;
    
//by calling totalprice it will automatically search itself and pice itself based on all child objects with property of 'price'
let myvalue = group_book.totalprice();
console.log(myvalue);


//ajax simplified--------------

//This is the base url that we are using this base will always be applied it is global scope
let base_url = "http://localhost:5000/";
//caller function: calls an ajax request

function caller() {
    //set the caller_complete to the function that is supposed to receive the response
    let response_func = caller_complete;
    //endpoint: rest api endpoint
    let endpoint = ""
    //set the url by adding base_url + endpoint
    let url = base_url + endpoint;
    //request_type: type of request
    let request_type = "GET";
    //location you want the response to load
    let response_loc = "test_load";
    //optional:location you want the load animation to be generated while awaiting the response
    //can be set for any location but will most often be set to response_loc
    //can be left blank if not needed
    let load_loc = response_loc;
    //optional:json data to send to the server
    //can be left blank if not needed
    let jsonData = activities;

    ajaxCaller(request_type, url, response_func, response_loc, load_loc, jsonData)
}
//caller function: calls an ajax request
function caller_complete(status, response, response_loc, load_loc) {
    //do some logic with the ajax data that was returned
    //do if you are expecting a json object - JSON.parse(response)

    if(status == 200) {
        console.log("the response status was: " + status);
        //load the response into the response_loc
        document.getElementById(response_loc).innerHTML = response;
    } else if(status == 400) {
        console.log("oops there was an issue with status code: " + status);
        //load the response into the response_loc
        document.getElementById(response_loc).innerHTML = response;
    }
}

function ajaxCaller(request_type, url, response_func, response_loc, load_loc, jsonData) {
    //create the loading object dynamically ----------

    //check if load_loc exists
    if(document.getElementById(load_loc)) {
        //play the loading animation until it is done loading
        //resets the load location to nothing
        document.getElementById(load_loc).innerHTML = "";
        //creates loader
        let pre_load_ani = document.createElement("div");
        pre_load_ani.setAttribute("class", "loader");
        //appends loader to loader loc
        document.getElementById(load_loc).appendChild(pre_load_ani);
    }

    //load factory end ------------------------------

    //create the ajax object
    let ajax = new XMLHttpRequest();
    //initiate the ajax function
    ajax.onreadystatechange = function () {
        if (this.readyState == 4) {
            //readystate:4 means the response has come back
            console.log("we are in the ajax func");

            //remove the loading animation
            document.getElementById(load_loc).innerHTML = "";

            //set response_holder to hold the response data
            let response_holder = this.responseText;

            //send the response to this function
            response_func(this.status, response_holder, response_loc, load_loc)

        }
    }

    //request_type:represents the request type: GET, POST, PUT, etc....
    //url:represents the base_url + the endpoint
    ajax.open(request_type, url, true);

    //optional: checks if json data is being passed
    if(jsonData) {
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(jsonData));
    } else {
        ajax.send();
    }
}


//money formatter--------------

// Create our money formatter
// this will output a number value as us dollars
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

//easy way to have a button go to any page
function startbook(newspot) {
    window.location.href = newspot;
}

// sets the date range of an element dynamically based on today
function setDateRange(DateStart, DateEnd, DateElement) {
    if(document.getElementById(DateElement)) {
        let todays_date = new Date();
        let future_date = new Date();
        future_date.setUTCDate(future_date.getUTCDate());
        //to increase the future date just add a number to it ex. +5
        let dd = future_date.getUTCDate();
        let mm = future_date.getUTCMonth()+1; //January is 0!
        let yyyy = future_date.getFullYear()+1;
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

        future_date = yyyy+'-'+mm+'-'+dd;
        document.getElementById(DateElement).setAttribute("min", todays_date);
        document.getElementById(DateElement).setAttribute("max", future_date);
    } else {
        console.log(`${DateElement} does not exist!`);
    }
}

//set a standard for form validation


// Iterates through all forms on a page then cancels the forms default functions
//validates form data based on elements attributes and 'is-valid' class
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    //at least one element does not have a valid value
                    event.stopPropagation();
                    console.log("form is not valid don't move forward!");
                } else {
                    //all elements are valid
                    console.log("form is valid let's move forward!");
                    startbook('lodge-book.html');
                }
                event.preventDefault();
                form.classList.add('was-validated');
            }, false);
            let inputs = form.getElementsByClassName("form-control")
            // Loop over form elements and do custom validation logic
            Array.prototype.filter.call(inputs, function(input) {
                //required email onBlur validation
                if(input.type == "email"){
                    valEmail(input);
                }
            });
        });
    }, false);
})();

//price function to calculate the total price of items added

// Loop through the group object and find everywhere that a price exists and adds them up in total price
function getTotalPrice(iterateObject, price) {
    if(!price) {
        price = 0;
    }
    if(!iterateObject){
        iterateObject = this;
    }
    //Does this object have a price?
    if(iterateObject["price"] != null){
        price += iterateObject["price"];
    }
    Object.keys(iterateObject).forEach(function (itemPrice) {
        if(typeof(iterateObject[itemPrice]) == "object") {
            price += getTotalPrice(iterateObject[itemPrice]);
        }
    });
    return price;
}

// Validate Email
function valEmail(conEmail) {
    const email = conEmail;
    //lambda to compare regex value
    email.addEventListener('blur', ()=>{
        let regex =
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)) {
            //the regex pattern is met
            email.classList.remove(
            'is-invalid');
            console.log("Email is valid!");
        } else{
            //the regex pattern is not met
            email.classList.add(
            'is-invalid');
            console.log("Email is invalid!");
        }
    });
}