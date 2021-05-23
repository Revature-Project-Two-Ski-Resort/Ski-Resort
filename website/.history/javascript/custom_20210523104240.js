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
    //west trail
    activities.west_trail = new Object();
        activities.west_trail.id = 0;
        activities.west_trail.name = "west_trail";
        activities.west_trail.distance = 13;//in miles
        activities.west_trail.ages = [16, 200];
        activities.west_trail.danger = 1;
        activities.west_trail.price = 0.00;
    //east trail
    activities.east_trail = new Object();
        activities.east_trail.id = 1;
        activities.east_trail.name = "east_trail";
        activities.east_trail.distance = 11;//in miles
        activities.east_trail.ages = [12, 200];
        activities.east_trail.danger = 2;
        activities.east_trail.price = 0.00;
    //bear trail
    activities.bear_trail = new Object();
        activities.bear_trail.id = 2;
        activities.bear_trail.name = "bear_trail";
        activities.bear_trail.distance = 3;//in miles
        activities.bear_trail.ages = [6, 200];
        activities.bear_trail.danger = 0;
        activities.bear_trail.price = 0.00;
    //eagle trail
    activities.eagle_trail = new Object();
        activities.eagle_trail.id = 3;
        activities.eagle_trail.name = "eagle_trail";
        activities.eagle_trail.distance = 9;//in miles
        activities.eagle_trail.ages = [10, 200];
        activities.eagle_trail.danger = 0;
        activities.eagle_trail.price = 0.00;
    //blue trail
    activities.blue_trail = new Object();
        activities.blue_trail.id = 4;
        activities.blue_trail.name = "blue_trail";
        activities.blue_trail.distance = 4;//in miles
        activities.blue_trail.ages = [0, 200];
        activities.blue_trail.danger = 0;
        activities.blue_trail.price = 0.00;
    //yellow trail
    activities.yellow_trail = new Object();
        activities.yellow_trail.id = 5;
        activities.yellow_trail.name = "yellow trail";
        activities.yellow_trail.distance = 2;//in miles
        activities.yellow_trail.ages = [0, 200];
        activities.yellow_trail.danger = 0;
        activities.yellow_trail.price = 0.00;
    //green trail
    activities.green_trail = new Object();
        activities.green_trail.id = 6;
        activities.green_trail.name = "green_trail";
        activities.green_trail.distance = 2;//in miles
        activities.green_trail.ages = [0, 200];
        activities.green_trail.danger = 0;
        activities.green_trail.price = 0.00;
    //green tree camp site
    activities.greentree = new Object();
        activities.greentree.id = 0;
        activities.greentree.name = "greentree";
        activities.greentree.danger = 3;
        activities.greentree.ages = [6, 200];
        activities.greentree.price = 23.00;
    //lift ticket info
    activities.lift_tickets = new Object();
        activities.lift_tickets.name = "lift_tickets";
        activities.lift_tickets.price = 15.00;


let lodging = new Object();
        //room name
    lodging["King Suite"] = new Object();
        lodging["King Suite"].id = 0;
        lodging["King Suite"].name = "King Suite";
        lodging["King Suite"].price = 105.00;
        lodging["King Suite"].viewtype = "non-mountain";
    //room name
    lodging["Single King"] = new Object();
        lodging["Single King"].id = 1;
        lodging["Single King"].name = "Single King";
        lodging["Single King"].price = 80.00;
        lodging["Single King"].viewtype = "non-mountain";
    //room name
    lodging["Double Queen"] = new Object();
        lodging["Double Queen"].id = 2;
        lodging["Double Queen"].name = "Double Queen";
        lodging["Double Queen"].price = 70.00;
        lodging["Double Queen"].viewtype = "non-mountain";
    //room name
    lodging["Mountain View King Suite"] = new Object();
        lodging["Mountain View King Suite"].id = 3;
        lodging["Mountain View King Suite"].name = "Mountain View King Suite";
        lodging["Mountain View King Suite"].price = 160.00;
        lodging["Mountain View King Suite"].viewtype = "mountain";
    //room name
    lodging["Mountain View Single King"] = new Object();
        lodging["Mountain View Single King"].id = 4;
        lodging["Mountain View Single King"].name = "Mountain View Single King";
        lodging["Mountain View Single King"].price = 140.00;
        lodging["Mountain View Single King"].viewtype = "mountain";
    //room name
    lodging["Mountain View Double Queen"] = new Object();
        lodging["Mountain View Double Queen"].id = 5;
        lodging["Mountain View Double Queen"].name = "Mountain View Double Queen";
        lodging["Mountain View Double Queen"].price = 120.00;
        lodging["Mountain View Double Queen"].viewtype = "mountain";

//Services data model
let services = new Object();
    services.Helmet = new Object();
        services.Helmet.name = "Helmet";
        services.Helmet.price = 5.00;
    services.Skis = new Object();
        services.Skis.name = "Skis";
        services.Skis.price = 12.00;
    services.Boots = new Object();
        services.Boots.name = "Boots";
        services.Boots.price = 6.50;
    services.Boards = new Object();
        services.Boards.name = "Boards";
        services.Boards.price = 27.00;
    services.Jackets = new Object();
        services.Jackets.name = "Jackets";
        services.Jackets.price = 25.00;
    services.couples_massage = new Object();
        services.couples_massage.name = "couples_massage";
        services.couples_massage.price = 79.00;
    services.standard_massage = new Object();
        services.standard_massage.name = "standard_massage";
        services.standard_massage.price = 42.39;
    services.warmup_pkg = new Object();
        services.warmup_pkg.name = "warmup_pkg";
        services.warmup_pkg.price = 15.10;
    services.num_kids = new Object();
        services.num_kids.name = "num_kids";
        services.num_kids.price = 10.00;


//Main user object
let group_book = new Object();
    group_book.id = 0;
    group_book.pin = "0000";
    group_book.lastcompleted = "start-book.html";
    group_book.activities = new Object();
    group_book.services = new Object();
    group_book.startdate = new Date();
    group_book.enddate = new Date();    
    group_book.users = new Object();
        group_book.users.primaryuser = new Object();
            group_book.users.primaryuser.firstname = "";
            group_book.users.primaryuser.middlename = "";
            group_book.users.primaryuser.lastname = "";
            group_book.users.primaryuser.email = "";
            group_book.users.primaryuser.age = 18;
            group_book.users.primaryuser.lvl = 1;
            group_book.users.primaryuser.price = 20.00;
            group_book.users.primaryuser.rentals = new Object();
            group_book.users.primaryuser.lodging = new Object();
            group_book.users.primaryuser.totalprice = getTotalPrice;
            group_book.users.totalprice = getTotalPrice;
    group_book.totalprice = getTotalPrice;
    group_book.lodging = new Object();
        group_book.lodging.totalprice = getTotalPrice;
    
//by calling totalprice it will automatically search itself and price itself based on all child objects with property of 'price'
let myvalue = group_book.totalprice();
console.log(myvalue);


//ajax simplified--------------

//This is the base url that we are using this base will always be applied it is global scope
let base_url = "http://localhost:5000/";
//caller function: calls an ajax request

//This function will be called during the confirmation process
function groupIDSubmit() {
    //set the caller_complete to the function that is supposed to receive the response
    let response_func = groupIDSubmit_complete;
    //endpoint: rest api endpoint
    let endpoint = "/booking"
    //set the url by adding base_url + endpoint
    let url = base_url + endpoint;
    //request_type: type of request
    let request_type = "POST";
    //location you want the response to load
    let response_loc = "loadResult";
    //optional:location you want the load animation to be generated while awaiting the response
    //can be set for any location but will most often be set to response_loc
    //can be left blank if not needed
    let load_loc = response_loc;
    //optional:json data to send to the server
    //can be left blank if not needed
    let jsonData = group_book;

    ajaxCaller(request_type, url, response_func, response_loc, load_loc, jsonData)
}
//caller function: calls an ajax request
function groupIDSubmit_complete(status, response, response_loc, load_loc) {
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
//This function will be called to get all of the available rooms
function getAllRooms() {
    //set the caller_complete to the function that is supposed to receive the response
    let response_func = getAllRooms_complete;
    //endpoint: rest api endpoint
    let endpoint = "/lodging"
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
function getAllRooms_complete(status, response, response_loc, load_loc) {
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
//This function will be called to get all of the available Services
//This inludes rental equipment, spa services, and daycare service
function getAllService() {
    //set the caller_complete to the function that is supposed to receive the response
    let response_func = getAllService_complete;
    //endpoint: rest api endpoint
    let endpoint = "/services"
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
function getAllService_complete(status, response, response_loc, load_loc) {
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
//This function will be called to get all of the available Activities
//This includes both on and off Season Activities
//Ski/Snowboard slopes, SnowTubing slopes, Walkable/Bikable Trails, Camping Sites
function getAllActivites() {
    //set the caller_complete to the function that is supposed to receive the response
    let response_func = getAllActivites_complete;
    //endpoint: rest api endpoint
    let endpoint = "/activities"
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
function getAllActivites_complete(status, response, response_loc, load_loc) {
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
//preload the 
function preloadTickets() {
    tickets = 0;
    if (group_book.activities.lift_tickets.quantity != null) {
        tickets = group_book.activities.lift_tickets.quantity;
    }
    return tickets
}
function saveTickets(tickets) {
    if(!tickets) {
        tickets = 0;
    }
    if (group_book.activities.lift_tickets == null) {
        group_book.activities.lift_tickets = new Object();
    }
    group_book.activities.lift_tickets.quantity = tickets;
    group_book.activities.lift_tickets.name = "Lift Tickets";
    group_book.activities.lift_tickets.price = 15;
    saveSession();
    return tickets
}/**
 * Extracts form elements and maps to passed in object
 */
function extractObjectFromForm($fieldContainer,objectType, services) {
    var innerArray=[];
    var obj = $.map($fieldContainer.find(":input"), function(n, i)
    {
        var o = {};
        if($(n).is("input:text") 
                || $(n).is("textarea") 
                || $(n).is("input:hidden") 
                || $(n).is("input:password"))
            o[n.name] = $(n).val();
        else if($(n).is("input:checkbox"))
            o[n.name] = ($(n).is(":checked") ? true:false);
        else if(n.type == 'radio') {
            if(innerArray.indexOf(n.name)==-1) {
                innerArray.push(n.name);
            }
        }
        else
            o[n.name] = $(n).val();
        return o;
    });
    $.each(innerArray,function(index,item){
        var iobj={};
        iobj[item]=$("input[name='"+item+"']:checked").val();
        obj.push(iobj);
    });
    return getObjectFromObject(obj,objectType, services);
}

/**
 * Takes a object created from a form scour and
 * converts it to an Object type
 */
function getObjectFromObject(formObject,outputObject, services) {
    $.each(formObject,function(index,item){
        $.each(item,function(key,value){
            if(key) {
                outputObject[key] = services[key];
                if(typeof(value) == "boolean") {
                    outputObject[key].quantity = 1;
                    outputObject[key].isselected = value;
                } else {
                    outputObject[key].quantity = value;
                }
                if(value == "" || value == false) {
                    delete outputObject[key];
                }
            }
        });
    });
    console.log(outputObject);
    return outputObject;
}
//pre-load both the services page and the activities page
function preloadService(formObject) {
    $.each(formObject,function(index,item){
        if(document.getElementById(index)) {
            if(typeof(formObject[index].isselected) == 'boolean') {
                $('#'+index).prop('checked', true);
            } else {
                document.getElementById(index).value = formObject[index].quantity;
            }
        }
    });
}
//camping save
function offSeasonPick(radioPicked) {
    group_book.camping = activities.offseason.camping.sites.info[radioPicked];
    saveSession();
}
//trail save
function trailPick(radioPicked) {
    group_book.trails = activities.offseason.trails.hiking.info[radioPicked];
    saveSession();
}
//update the group object by adding a person
//if the person already exists then update it
function addPerson(person, personId, prop) {
    if (group_book.users[personId] == null) {
        group_book.users[personId] = new Object;
        group_book.users[personId].price = 20.00;
    }
    group_book.users[personId][prop] = person;
    saveSession();
}
//physically add a new person element to the html form
function addpersonelement(iterateObject, elemID) {
    let itemcounter = 1;
    while(document.getElementById("firstname"+itemcounter)) {
        itemcounter++;
    }
    if(!elemID){
        elemID = `user${itemcounter}`;
    }
    let firstname = "";
    let middlename = "";
    let lastname = "";
    let age = "";
    let lvl = "";
    if(iterateObject){
        if(iterateObject.firstname){
            firstname = iterateObject.firstname;
        }
        if(iterateObject.middlename){
            middlename = iterateObject.middlename;
        }
        if(iterateObject.lastname){
            lastname = iterateObject.lastname;
        }
        if(iterateObject.age){
            age = iterateObject.age;
        }
        if(iterateObject.lvl){
            lvl = iterateObject.lvl;
        }
    }
    let newEl = `
    <div class="form-row">
        <div class="form-group col-md-4">
            <label for="firstname${itemcounter}">*First Name</label>
            <input value="${firstname}" maxlength=35 oninput="addPerson(this.value, '${elemID}', 'firstname');" type="text" class="form-control form-element" id="firstname${itemcounter}" name="firstname${itemcounter}" required>
            <div class="invalid-feedback">
                Please type a valid First Name.
            </div>
        </div>
        <div class="form-group col-md-4">
            <label for="middlename${itemcounter}">M. Initial</label>
            <input value="${middlename}" maxlength=4 oninput="addPerson(this.value, '${elemID}', 'middlename');" type="text" class="form-control form-element" id="middlename${itemcounter}" name="middlename${itemcounter}">
            <div class="invalid-feedback">
                Please type a valid middle name.
            </div>
        </div>
        <div class="form-group col-md-4">
            <label for="lastname${itemcounter}">*Last Name</label>
            <input value="${lastname}" type="text" oninput="addPerson(this.value, '${elemID}', 'lastname');" maxlength=35 class="form-control form-element" id="lastname${itemcounter}" name="lastname${itemcounter}" required>
            <div class="invalid-feedback">
                Please type a valid Last name.
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-3">
            <label for="primaryAge${itemcounter}">*Age</label>
            <input value="${age}" type="number" oninput="addPerson(this.value, '${elemID}', 'age');" min=0 max=150 step="1" placeholder="Age" class="form-control form-element" id="primaryAge${itemcounter}" name="primaryAge${itemcounter}" aria-label="Please enter your age" required />
            <div class="invalid-feedback">
                Please enter a valid age.
            </div>
        </div>
        <div class="form-group col-sm-9">
            <label for="primarySkill${itemcounter}">Skill Level(1-5)</label>
            <div class="form-row">
                <input value="${lvl}" type="number" oninput="addPerson(this.value, '${elemID}', 'lvl');" min=1 max=5 step="1" placeholder="5=expert" value=1 class="form-control col-md-7 form-element" id="primarySkill${itemcounter}" name="primarySkill${itemcounter}" aria-label="Please enter your skill level" />
                <div class="col-md-5">
                    <button onclick="removepersonelement('nextperson${itemcounter}', '${elemID}', 'person_price');" type="button" class="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                            <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                        </svg>
                        Remove Person
                    </button>
                </div>
                <div class="invalid-feedback">
                    Please enter a valid skill level.
                </div>
            </div>
        </div>
    </div>`;
    let makeDiv = document.createElement("div");
    makeDiv.setAttribute("class", "form-group newElem p-3");
    makeDiv.setAttribute("id", `nextperson${itemcounter}`);
    document.getElementById("newpersonspace").appendChild(makeDiv);
    document.getElementById(`nextperson${itemcounter}`).innerHTML = newEl;
}
//removes a person element
function removepersonelement(roomitem, roomId, myformPrice){
    delete group_book.users[roomId];
    document.getElementById(myformPrice).innerHTML = formatter.format(group_book.users.totalprice());
    document.getElementById(roomitem).parentNode.removeChild(document.getElementById(roomitem));
    saveSession();
}

//update the group object by adding a room
//if the room already exists then update it
function addLodge(room, roomId) {
    group_book.lodging[roomId] = lodging[room];
    saveSession();
    console.log(group_book);
}
//physically add the room element to the html form
function addroomelement(iterateObject, elemID) {
    itemcounter = 1;
    while(document.getElementById("mtn-bed"+itemcounter)) {
        itemcounter++;
    }
    let roomelem = `room${itemcounter}`;
    if(iterateObject != null){
        if(elemID) {
            roomelem = elemID;
        }
    }
    let newEl = `
    <div id="nextroom${itemcounter}" class="form-group">
        <label for="mtn-bed${itemcounter}">Rooms</label>
        <div class="form-row">
            <select onchange="addLodge(this.value, '${roomelem}')" class="custom-select col-sm-9 form-element" id="mtn-bed${itemcounter}" name="mtn-bed${itemcounter}" aria-label="Choose a suite" required>
                <option selected="selected" value="">Choose a suite</option>
                <option>King Suite</option>
                <option>Single King</option>
                <option>Double Queen</option>
                <option>Mountain View King Suite</option>
                <option>Mountain View Single King</option>
                <option>Mountain View Double Queen</option>
            </select>
            <div class="col-md-3">
                <button onclick="removeroomelement('nextroom${itemcounter}', '${roomelem}', 'lodge_price');" type="button" class="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                    </svg>
                    remove Room
                </button>
            </div>
            <div id="roomerror${itemcounter}" class="invalid-feedback">
                Please select a room.
            </div>
        </div>
    </div>`;
    let makeDiv = document.createElement("div");
    makeDiv.setAttribute("class", "form-group");
    makeDiv.setAttribute("id", `nextroom${itemcounter}`);
    document.getElementById("newroomspace").appendChild(makeDiv);
    document.getElementById(`nextroom${itemcounter}`).innerHTML = newEl;
    if(iterateObject != null) {
        document.getElementById(`mtn-bed${itemcounter}`).value = iterateObject.name;
    }
}
//removes a room element
function removeroomelement(roomitem, roomId, myformPrice){
    delete group_book.lodging[roomId];
    document.getElementById(myformPrice).innerHTML = formatter.format(group_book.lodging.totalprice());
    document.getElementById(roomitem).parentNode.removeChild(document.getElementById(roomitem));
    saveSession();
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
function setDateRange(DateElement, startdate, enddate) {
    if(document.getElementById(DateElement)) {
        let todays_date = new Date();
        if(startdate){
            todays_date = new Date(startdate);
        }
        document.getElementById(DateElement).setAttribute("min", getDateFormat(todays_date, 0, 0, 0));
        document.getElementById(DateElement).setAttribute("max", getDateFormat(todays_date, 0, 0, 1));
        if(enddate == null){
            enddate = todays_date;
        }
        document.getElementById(DateElement).value = getDateFormat(new Date(setfutureminDate(startdate, enddate)), 0, 0, 0);
    } else {
        console.log(`${DateElement} does not exist!`);
    }
}
//this sets the date ranges allowed for a form input["date"] element
function getDateFormat(myDate, addDay, addMonth, addYear) {
    myDate.setUTCDate(myDate.getUTCDate());
    //to increase the future date just add a number to it ex. +5
    let n = myDate.getUTCHours()+4;
    let dd = myDate.getUTCDate()+addDay;
    let mm = myDate.getUTCMonth()+1+addMonth; //January is 0!
    let yyyy = myDate.getFullYear()+addYear;
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    myDate = yyyy+'-'+mm+'-'+dd;
    return myDate;
}

// finds the difference between 2 dates in days
function dateDiff(date1, date2) {
    let diff = (date2 - date1)/1000;
    diff = Math.abs(Math.floor(diff));
    dateDiffHolder = Math.floor(diff/(24*60*60));
    if(date1 > date2) {
        dateDiffHolder = 0;
    }
    return dateDiffHolder+1;
}
function setfutureminDate(date1, date2) {
    if(date2) {
        if(date1 > date2) {
            return date1;
        } else {
            return date2
        }
    } else {
        return date1;
    }
}

//set a standard for form validation


// Iterates through all forms on a page then cancels the forms default functions
//validates form data based on elements attributes and 'is-valid' class
(function() {
    'use strict';
    window.addEventListener('load', function() {
        populateExists();
        //check if you have items in your cart
        if(group_book.totalprice() > 20) {
            $("#cartItems").html(`
            <button class="btn btn-warning" onclick="startbook('confirm-book.html');"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg><p class="m-0 p-0">Cart</p>
            </button>
            
          `);
        }
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.stopPropagation();
                event.preventDefault();
                if (form.checkValidity() === false) {
                    //at least one element does not have a valid value
                    console.log("form is not valid don't move forward!");
                } else {
                    //all elements are valid
                    console.log("form is valid let's move forward!");
                    startbook(nextpage);
                }
                form.classList.add('was-validated');
            }, false);
            let inputs = form.getElementsByClassName("form-element")
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
        if(iterateObject["quantity"]) {
            price += iterateObject["price"]*iterateObject["quantity"];
        } else if(group_book.startdate && group_book.enddate) {
            price += iterateObject["price"]*dateDiff(group_book.startdate, group_book.enddate);
        } else {
            price += iterateObject["price"];
        }
    }
    //go through object and find other layers to search
    Object.keys(iterateObject).forEach(function (itemPrice) {
        if(typeof(iterateObject[itemPrice]) == "object" && itemPrice != "startdate" && itemPrice != "enddate" && typeof(iterateObject[itemPrice]) != "function") {
            price += getTotalPrice(iterateObject[itemPrice]);
        }
    });
    return price;
}
//prints a recipt
function reciptController() {
    if(group_book.users != null) {
        let makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "row m-2");
        makeDiv.setAttribute("id", "Users");
        document.getElementById("confirm-data").appendChild(makeDiv);
        Object.keys(group_book.users).forEach(function (item) {
            if(typeof(group_book.users[item]) != "function") {
                myEmail = "";
                if(group_book.users[item].email){
                    myEmail = `<p class="col-4">Email: ${group_book.users[item].email}</p>`;
                }
                makeDiv.innerHTML += `
                    <div class="row m-3" style="border-bottom:1px #000000 solid">
                        <h4 class="col-12">Customer Information</h4>
                        <p class="col-4">First Name: ${group_book.users[item].firstname}</p>
                        <p class="col-4">Middle Initial: ${group_book.users[item].middlename}</p>
                        <p class="col-4">Last Name: ${group_book.users[item].lastname}</p>
                        ${myEmail}
                        <p class="col-4">Age: ${group_book.users[item].age}</p>
                        <p class="col-4">Skill Level: ${group_book.users[item].lvl}</p>
                        <p class="col-12">Total Price: <b>${formatter.format(group_book.users[item].totalprice())}</b></p>
                    </div>`;
            }
        });
    }
    if(group_book.lodging != null) {
        let makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "row m-2");
        makeDiv.setAttribute("id", "Lodging");
        makeDiv.setAttribute("style","border-bottom:1px #000000 solid");
        document.getElementById("confirm-data").appendChild(makeDiv);
        makeDiv.innerHTML = `<h4 class="col-12">Lodging Information</h4>`;
        Object.keys(group_book.lodging).forEach(function (item) {
            if(typeof(group_book.lodging[item]) != "function") {
                makeDiv.innerHTML += `<div class="col-6">
                        <h6 class="col-12">${group_book.lodging[item].name}</h6>
                        <p class="col-12">Price Per night: ${formatter.format(group_book.lodging[item].price)}</p>
                        </div>`;
            }
        });
        
        makeDiv.innerHTML += `
        <p class="col-4">Total Nights: <b>${dateDiff(group_book.startdate, group_book.enddate)}</b></p>
        <p class="col-4">Total Price: <b>${formatter.format(group_book.lodging.totalprice())}</b></p>`;
    }
    if(group_book.services != null) {
        let makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "row m-2");
        makeDiv.setAttribute("id", "Sevices");
        makeDiv.setAttribute("style","border-bottom:1px #000000 solid");
        document.getElementById("confirm-data").appendChild(makeDiv);
        makeDiv.innerHTML = `<h4 class="col-12">Services Choosen</h4>`;
        Object.keys(group_book.services).forEach(function (item) {
            if(typeof(group_book.services[item]) != "function") {
                makeDiv.innerHTML += `<div class="col-6">
                        <h6 class="col-12">${group_book.services[item].name}</h6>
                        <p class="col-12">Cost = ${formatter.format(group_book.services[item].price)}X${group_book.services[item].quantity}</p>
                        </div>`;
            }
        });
        
        makeDiv.innerHTML += `
        <p class="col-12">Total Price: <b>${formatter.format(group_book.services.totalprice())}</b></p>`;
    }
    if(group_book.activities != null) {
        let makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "row m-2");
        makeDiv.setAttribute("id", "Sevices");
        makeDiv.setAttribute("style","border-bottom:1px #000000 solid");
        document.getElementById("confirm-data").appendChild(makeDiv);
        makeDiv.innerHTML = `<h4 class="col-12">Activity Access</h4>`;
        Object.keys(group_book.activities).forEach(function (item) {
            if(typeof(group_book.activities[item]) != "function") {
                makeDiv.innerHTML += `<div class="col-6">
                        <h6 class="col-12">${group_book.activities[item].name}</h6>
                        <p class="col-12">Cost = ${formatter.format(group_book.activities[item].price)}X${group_book.activities[item].quantity}</p>
                        </div>`;
            }
        });
        
        makeDiv.innerHTML += `
        <p class="col-12">Total Price: <b>${formatter.format(group_book.activities.totalprice())}</b></p>`;
    }
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
//Search query example
/*
jQuery(document).ready(function($) {
    $(".on-page-search").on("keyup", function () {
    var v = $(this).val();
    $(".results").removeClass("results");
    $("a.demo-links").each(function () {
    if (v != "" && $(this).text().search(new RegExp(v,'gi')) != -1) {
    $(this).addClass("results");
    }
    });
    });
});
*/

//pre-loading data if a session exists
function populateExists() {
    if(sessionStorage.length <= 0) {
        saveSession();
    } else {
        getSession();
    }
    installTotalPrice(group_book);
    group_book.startdate = new Date(group_book.startdate);
    group_book.enddate = new Date(group_book.enddate);
    console.log(group_book);
}
//pre-load all personal info form
function popPeople(iterateObject) {
    Object.keys(iterateObject).forEach(function (itemPrice) {
        if(itemPrice != "primaryuser" && itemPrice != "totalprice") {
            addpersonelement(iterateObject[itemPrice], itemPrice);
        } else if(itemPrice == "primaryuser") {
            document.getElementById('prime_fname').value = iterateObject[itemPrice].firstname;
            document.getElementById('prime_mname').value = iterateObject[itemPrice].middlename;
            document.getElementById('prime_lname').value = iterateObject[itemPrice].lastname;
            document.getElementById('primaryemail').value = iterateObject[itemPrice].email;
            document.getElementById('primaryAge').value = iterateObject[itemPrice].age;
            document.getElementById('primarySkill').value = iterateObject[itemPrice].lvl;
        }
    });
}
//pre-load all Lodging info form
function popLodge(iterateObject) {
    Object.keys(iterateObject).forEach(function (itemPrice) {
        if(typeof(iterateObject[itemPrice]) != "function" && itemPrice != "room0") {
            addroomelement(iterateObject[itemPrice], itemPrice);
        } else if( itemPrice == "room0") {
            document.getElementById('mtn_bed').value = iterateObject[itemPrice].name;
        }
    });
}
//saves the group_book to the session
function saveSession() {
    sessionStorage.group_book = JSON.stringify(group_book);
}
//retrieves the session
function getSession() {
    group_book = JSON.parse(sessionStorage.group_book);
}
//installs the totalprice function on every level
function installTotalPrice(iterateObject) {
    delete iterateObject.totalprice;
    iterateObject.totalprice = getTotalPrice;
    Object.keys(iterateObject).forEach(function (itemPrice) {
        if(typeof(iterateObject[itemPrice]) == "object") {
            installTotalPrice(iterateObject[itemPrice]);
        }
    });
}

//  --------- Manipulating sessionStorage -------------

// Adding new value to storage
function newStorage(key, val) {
    if(sessionStorage.getItem(key) == undefined) {
        sessionStorage.setItem(key, val);
    }
}

// Changing a currently set value in storage
function setStorage(key, val) {
    if(sessionStorage.getItem(key) != undefined) {
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, val);
    }
    else {
        newStorage(key, val);
    }
}

// Removing all storage data after the form is submitted
function wipeStorage() {
    sessionStorage.clear();
}