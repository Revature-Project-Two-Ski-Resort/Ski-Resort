your_data = new Object();
work_data = new Object();
cal_refund = new Object();
// Create our number formatter.
formatter = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',

// These options are needed to round to whole numbers if that's what you want.
//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

if (document.getElementById("date_event")) {
    let future_date = new Date();
    future_date.setUTCDate(future_date.getUTCDate()+8);
    let dd = future_date.getUTCDate();
    let mm = future_date.getUTCMonth()+1; //January is 0!
    let yyyy = future_date.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    future_date = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date_event").setAttribute("min", future_date);
}

function load_emp_by_email(loading_container, search_vals, result_load, send_me) {
    //reset the element
    document.getElementById(loading_container).innerHTML = "";
    //load up the new search query result
    let search_query = document.getElementById(search_vals).value;

    if (search_query) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(loading_container).innerHTML = "";

                let employees = JSON.parse(this.responseText);
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

        }

        url = "http://localhost:5000/search/" + search_query;
        xhttp.open("GET", url, true);
        xhttp.send();
    } else {
        clear_email_list();
    }
}
function clear_email_list(loading_container, result_load) {
    //empty the email list
    document.getElementById(loading_container).innerHTML = "";
    document.getElementById(result_load).style.display = "none";
}
function print_date(print_loc) {
    var d = new Date();
    let node = document.createElement("p");
    node.appendChild(document.createTextNode(`${d.getUTCMonth()+1}/${d.getUTCDate()}/${d.getUTCFullYear()}`));
    document.getElementById(print_loc).appendChild(node);
}
function pre_load_my_info(loading_container) {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let my_user_id = params.get('user');
    if (my_user_id) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            document.getElementById(loading_container).innerHTML = "";
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            document.getElementById(loading_container).appendChild(pre_load_ani);

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(loading_container).innerHTML = "";
                let employee = JSON.parse(this.responseText);
                your_data = employee;
                console.log(employee);
                for (let i = 0; i < employee.length; i++) {
                    if (employee[i]["Employee ID"]) {
                        //Pre-fill in the form data
                        document.getElementById("emp_id").value = employee[i]["Employee ID"];
                        document.getElementById("emp_id").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["First Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("firstname").value = employee[i]["First Name"];
                        document.getElementById("firstname").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["Middle Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("middlename").value = employee[i]["Middle Name"];
                        document.getElementById("middlename").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["Last Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("lastname").value = employee[i]["Last Name"];
                        document.getElementById("lastname").setAttribute("readonly", "readonly")
                    }
                }
                get_refundable_amt(your_data, "sub_message")
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById(loading_container).innerHTML = `<p>${this.responseText}</p>`
            }

        }

        url = "http://localhost:5000/users/" + my_user_id;
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

function pre_load_my_profile(loading_container) {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let my_user_id = params.get('user');
    if (my_user_id) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            document.getElementById(loading_container).innerHTML = "";
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            document.getElementById(loading_container).appendChild(pre_load_ani);

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(loading_container).innerHTML = "";
                let employee = JSON.parse(this.responseText);
                your_data = employee;
                console.log(employee);
                for (let i = 0; i < employee.length; i++) {
                    if (employee[i]["First Name"]) {
                        //Pre-fill in the form data
                        document.getElementById(loading_container).innerHTML = `${employee[i]["First Name"]}`;
                    }
                }
                your_level(employee);
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById(loading_container).innerHTML = `<p>${this.responseText}</p>`
            }

        }

        url = "http://localhost:5000/users/" + my_user_id;
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}
function load_work(employee) {
    if (employee) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            document.getElementById("complete_approvals").innerHTML = "";
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            document.getElementById("complete_approvals").appendChild(pre_load_ani);

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("complete_approvals").innerHTML = "";
                let employee_work = JSON.parse(this.responseText);
                work_data = employee_work;
                console.log(employee_work);
                for (let i = 0; i < employee_work.length; i++) {
                    if (employee_work[i]["Application ID"]) {
                        //Create work lists
                        let my_desc = "";
                        let my_most_urgent = "";
                        let urgent_desc = "Urgency: LOW";
                        if(employee_work[i]["Urgency level"] >= 70) {
                            my_most_urgent = "text-danger";
                            urgent_desc = "Urgency: ! MOST URGENT !";
                        } else if (employee_work[i]["Urgency level"] >= 40) {
                            my_most_urgent = "text-warning";
                            urgent_desc = "Urgency: High";
                        }
                        let my_date = "Has not yet been approved!";
                        if (employee_work[i]["Date Completed"] != null) {
                            my_date = employee_work[i]["Date Completed"];
                        } else {
                            if (employee_work[i]["Description"] != null) {
                                my_desc = employee_work[i]["Description"];
                            }
                            disable_dept = "disabled='disabled' hidden='hidden'";
                            disable_sup = "disabled='disabled' hidden='hidden'";
                            disable_desc_req = "";
                            dis_req_func = "";
                            if(employee[0].position == "Benefits Coordinator") {
                                disable_dept = "";
                                disable_sup = "";
                            } else if(employee[0].position == "depthead") {
                                disable_sup = "";
                            } else if(employee[0].position == "supervisor") {
                                disable_desc_req = "disabled='disabled'";
                                dis_req_func = `oninput="block_deny(this, 'denier_${employee_work[i]["Work ID"]}');"`
                            }
                            get_my_app(employee_work[i]["Application ID"]);
                            document.getElementById("complete_approvals").innerHTML += `
                            <li id="approve_item_${employee_work[i]["Work ID"]}">
                                <div class="card ${my_most_urgent}">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="card-body">
                                                <div id="msg_loader${employee_work[i]["Work ID"]}"></div>
                                                <h4 class="card-title" id="work_app_${employee_work[i]["Application ID"]}"></h4>
                                                <p class="card-text">Approval for applicationID(#${employee_work[i]["Application ID"]}) ${urgent_desc}</p>
                                                <h5 class="card-title">Date submitted:</h5>
                                                <p class="card-text">${employee_work[i]["Date Received"]}</p>
                                                <h5 class="card-title">Date Approved:</h5>
                                                <p class="card-text">${my_date}</p>
                                                <h5 class="card-title">Describe Reason for Approval/Denial:</h5>
                                                <textarea id="textarea_${employee_work[i]["Application ID"]}" ${dis_req_func} class="card-text" cols="40" rows="5" maxlength="255">${my_desc}</textarea>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="card-body">
                                                <h4 class="card-title">Cost</h4>
                                                <p class="card-text" id="app_cost_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Description of Event:</h5>
                                                <p class="card-text" id="app_desc_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Event Date</h5>
                                                <p class="card-text" id="app_edate_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Event Type</h5>
                                                <p class="card-text" id="app_etype_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Location</h5>
                                                <p class="card-text" id="app_loc_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Grade Format</h5>
                                                <p class="card-text" id="app_gformat_${employee_work[i]["Application ID"]}"></p>
                                                <h5 class="card-title">Justification</h5>
                                                <p class="card-text" id="app_just_${employee_work[i]["Application ID"]}"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="approverbtn_${employee_work[i]["Work ID"]}" onclick="approve_app(${employee_work[i]["Urgency level"]}, ${employee_work[i]["Application ID"]}, ${employee_work[i]["Employee ID"]}, ${employee_work[i]["Work ID"]}, true);" class="btn btn-outline-success">Approve Application
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                    </svg>
                                </button>
                                <span>
                                    <button type="submit" ${disable_dept} id="requestorbtn_${employee_work[i]["Work ID"]}_dept" class="btn btn-outline-success">Request Additional Information(depthead)
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                    </button>
                                    <button type="submit" ${disable_sup} id="requestorbtn_${employee_work[i]["Work ID"]}_sup" class="btn btn-outline-success">Request Additional Information(supervisor)
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                    </button>
                                    <button type="submit" id="requestorbtn_${employee_work[i]["Work ID"]}" class="btn btn-outline-success">Request Additional Information(employee)
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                    </button>
                                </span>
                                <button type="submit"  onclick="approve_app(${employee_work[i]["Urgency level"]}, ${employee_work[i]["Application ID"]}, ${employee_work[i]["Employee ID"]}, ${employee_work[i]["Work ID"]}, false);" id="denier_${employee_work[i]["Work ID"]}" ${disable_desc_req} class="btn btn-outline-danger">Deny Request
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                                <hr />
                            </li>`;
                        }
                    }
                }
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById("complete_approvals").innerHTML = `<p>${this.responseText}</p>`
            }

        }

        url = "http://localhost:5000/users/" + employee[0]["Employee ID"]+"/work";
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}
function block_deny(blocker, denied) {
    if (blocker.value <= 25) {
        document.getElementById(denied).setAttribute("disabled", "disabled")
    } else {
        document.getElementById(denied).removeAttribute("disabled");
    }

}
function enable_by_role(my_element) {
    console.log(sup_btn_holder);
    console.log(dept_btn_holder);
}
function approve_app(work_urgency, work_app, work_emp, work_id, approval) {
    document.getElementById("approverbtn_"+work_id).setAttribute("disabled", "disabled");
    document.getElementById("requestorbtn_"+work_id).setAttribute("disabled", "disabled");
    document.getElementById("denier_"+work_id).setAttribute("disabled", "disabled");
    if (work_id) {
        let update_app = new Object();
        console.log("this is my workId: " + work_id)
        update_app.urgency_level = work_urgency;
        update_app.description = document.getElementById(`textarea_${work_app}`).value;
        update_app.approval = approval;
        
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            if(document.getElementById(`msg_loader${work_id}`)) {
                document.getElementById(`msg_loader${work_id}`).appendChild(pre_load_ani);
            }

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(`msg_loader${work_id}`).innerHTML = "";
                let app_elements = JSON.parse(this.responseText);
                console.log(app_elements);
                for (let i = 0; i < app_elements.length; i++) {
                    if (app_elements[i]["Employee ID"]) {
                        //Get application data
                        document.getElementById(`msg_loader${work_id}`).innerHTML = `<h6>This approval is completed</h6>`;
                        let element = document.getElementById("approve_item_"+work_id);
                        element.parentNode.removeChild(element);
                    }
                }
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById(`msg_loader${work_id}`).innerHTML = `<p>${this.responseText}</p>`
            }

        }

        url = `http://localhost:5000/users/${work_emp}/work/${work_id}`;
        xhttp.open("PATCH", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(update_app));
    } else {
        document.getElementById(`msg_loader${app_id_holder}`).innerHTML = `<p>A valid application Id was not provided!</p>`
    }
}
function get_my_app(app_id) {
    if (app_id) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            if(document.getElementById(`work_app_${app_id}`)) {
                document.getElementById(`work_app_${app_id}`).appendChild(pre_load_ani);
            }

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(`work_app_${app_id}`).innerHTML = "";
                let app_elements = JSON.parse(this.responseText);
                console.log(app_elements);
                for (let i = 0; i < app_elements.length; i++) {
                    if (app_elements[i]["Employee ID"]) {
                        //Get application data
                        let format_my_date = new Date(app_elements[i]["Event Date"]);
                        let nameOfDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                        my_money = formatter.format(app_elements[i]["Total Cost"]); /* $2,500.00 */
                        document.getElementById(`work_app_${app_id}`).innerHTML = `Employee awaiting approval(#eID-${app_elements[i]["Employee ID"]})`;
                        document.getElementById(`app_cost_${app_id}`).innerHTML = `${my_money}`;
                        document.getElementById(`app_desc_${app_id}`).innerHTML = `${app_elements[i]["Description"]}`;
                        document.getElementById(`app_edate_${app_id}`).innerHTML = `${nameOfDay[format_my_date.getUTCDay()]} ${format_my_date.getUTCMonth()+1}/${format_my_date.getUTCDate()}/${format_my_date.getUTCFullYear()}`;
                        document.getElementById(`app_etype_${app_id}`).innerHTML = `${app_elements[i]["Event Type"]}`;
                        document.getElementById(`app_loc_${app_id}`).innerHTML = `${app_elements[i]["Address"]} ${app_elements[i]["Second Address"]}  ${app_elements[i]["City"]}, ${app_elements[i]["State"]} ${app_elements[i]["Zip Code"]}`;
                        document.getElementById(`app_gformat_${app_id}`).innerHTML = `${app_elements[i]["Grading Format"]}`;
                        document.getElementById(`app_just_${app_id}`).innerHTML = `${app_elements[i]["Justification"]}`;
                    }
                }
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById(`work_app_${app_id}`).innerHTML = `<p>${this.responseText}</p>`
            }

        }

        url = "http://localhost:5000/app/" + app_id;
        xhttp.open("GET", url, true);
        xhttp.send();
    } else {
        document.getElementById(`work_app_${app_id}`).innerHTML = `<p>A valid application Id was not provided!</p>`
    }
}
function your_level(your_data) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        //play the loading animation until it is done loading
        document.getElementById("main_loader").innerHTML = "";
        let pre_load_ani = document.createElement("div");
        pre_load_ani.setAttribute("class", "loader");
        if(document.getElementById("main_loader")) {
            document.getElementById("main_loader").appendChild(pre_load_ani);
        }

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main_loader").innerHTML = "";
            let app_elements = JSON.parse(this.responseText);
            console.log("the level data is: "+app_elements.position);
            your_data[0].position = app_elements.position;
            console.log(app_elements);
            for (let i = 0; i < app_elements.length; i++) {
                enable_by_role(position_holder);
            }
            load_work(your_data);
        } else if (this.readyState == 4 && this.status == 400) {
            document.getElementById("main_loader").innerHTML = `<p>${this.responseText}</p>`
        }

    }

    url = "http://localhost:5000/users/"+your_data[0]["Employee ID"]+"/level";
    ajax.open("GET", url, true);
    ajax.send();
}
if(document.getElementById("sub_app")) {
    document.getElementById("sub_app").addEventListener("click", function(e){
        e.preventDefault();
        let is_valid = validate_my_form();
        if(is_valid) {
            console.log("we can submit!");
            var formData = new Object();
            let renamer = document.getElementById('my_new_app').elements;
            
            for(let i = 0, len = renamer.length; i < len; i++) {
                input = renamer[i];
                
                if(!input.value) {
                    formData[input.id] = "";
                } else {
                    console.log(input.value);
                    formData[input.id] = `${input.value}`;
                }
            }
            if(formData.sup_approval_attach) {
                formData.sup_approval_attach = true;
            } else {
                formData.sup_approval_attach = false;
            }
            if(cal_refund["refunded_amt"]) {
                formData["refunded_amt"] = cal_refund["refunded_amt"];
            }
            delete formData.additional_attach;
            delete formData.firstname;
            delete formData.middlename;
            delete formData.lastname;
            delete formData.sub_app;
            //formData.forEach(file => console.log(`form element`, file));

            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                document.getElementById("sub_message").innerHTML = "";
                let pre_load_ani = document.createElement("div");
                pre_load_ani.setAttribute("class", "loader");
                if(document.getElementById("sub_message")) {
                    document.getElementById("sub_message").appendChild(pre_load_ani);
                }
        
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("sub_message").innerHTML = "";
                    let app_elements = JSON.parse(this.responseText);
                    console.log(app_elements);
                    for (let i = 0; i < app_elements.length; i++) {
                        if (app_elements[i]["Employee ID"]) {
                            //Get application data
                            document.getElementById("sub_message").innerHTML = `<p>Total amount projected to be refunded(${formatter.format(app_elements[0]["Total Refunded"])})</p>`;
                            get_refundable_amt(your_data, "sub_message");
                        }
                    }
                } else if (this.readyState == 4 && this.status == 400) {
                    document.getElementById("sub_message").innerHTML = `<p>${this.responseText}</p>`;
                }
        
            }
            console.log("This is your id:"+your_data[0]["Employee ID"]);
            console.log(formData);
            url = `http://localhost:5000/users/${your_data[0]["Employee ID"]}/apply`;
            ajax.open("POST", url, true);
            ajax.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
            ajax.send(JSON.stringify(formData));
        }
    });
}

function validate_my_form() {

    let form = document.getElementById("my_new_app");
    let inputs = form.getElementsByTagName("input"), input = null, select = null, does_pass = true;
    let selects = form.getElementsByTagName("select");
    let texareas = form.getElementsByTagName("textarea");
    for(let i = 0, len = inputs.length; i < len; i++) {
        input = inputs[i];
        
        if(!input.hasAttribute('required')) {
            continue;
        }

        if(input.type == "radio" && !input.checked){
            does_pass = false;
        }

        if(input.type == "text" && !input.value){
            does_pass = false;
        }
        if(input.type == "number") {
            if(input.value < 1){
                input.value = 1;
            }
            
            if(input.value > 99999){
                input.value = 99999;
            }
        }
        if(input.type == "number" && !input.value){
            does_pass = false;
        }

        if(input.type == "date" && !input.value){
            does_pass = false;
        }
    }

    let reg_hold = does_pass;
    for(let i = 0, len = selects.length; i < len; i++) {
        select = selects[i];
        if(!select.hasAttribute('required')) {
            continue;
        }
        if(!select.value) {
            does_pass = false;
        }
    }

    let select_hold = does_pass;
    for(let i = 0, len = texareas.length; i < len; i++) {
        let textarea = texareas[i];
        if(!textarea.hasAttribute('required')) {
            continue;
        }
        if(!textarea.value || textarea.value.length<=20) {
            does_pass = false;
        }
    }
    let texta_hold = does_pass;
    if (texta_hold && select_hold && reg_hold && calculate_refundable_amt('sub_message')) {
        document.getElementById('sub_app').removeAttribute("disabled");
        return true;
    } else {
        document.getElementById('sub_app').setAttribute("disabled", "disabled");
        return false;
    }
}
function calculate_refundable_amt(my_loader) {
    //update the projected refund amount
    console.log(cal_refund);
    if (cal_refund) {
        let money_left = 1000;
        let cal_refund_holder = 0;
        if(cal_refund.calculated_refund) {
            cal_refund_holder = cal_refund.calculated_refund;
            money_left = 1000-cal_refund_holder;
        }
        let money_applying_for = 0;
        let percent_eligible = 0;
        let money_eliglible = 0
        if(document.getElementById("event_types").value == "courses") {
            percent_eligible = 0.8;
        } else if(document.getElementById("event_types").value == "seminars") {
            percent_eligible = 0.6;
        } else if(document.getElementById("event_types").value == "certification preparation classes") {
            percent_eligible = 0.75;
        } else if(document.getElementById("event_types").value == "certification") {
            percent_eligible = 1.0;
        } else if(document.getElementById("event_types").value == "technical training") {
            percent_eligible = 0.9;
        } else if(document.getElementById("event_types").value == "other") {
            percent_eligible = 0.3;
        }
        if (money_left <= 0) {
            document.getElementById(my_loader).innerHTML = "<p>You do not have any money left to file for this year. Please check back next year!</p>";
            return false;
        } else {
            if(document.getElementById("price_tag").value) {
                money_applying_for = document.getElementById("price_tag").value;
            }
            if((money_applying_for*percent_eligible) < money_left) {
                money_eliglible = money_applying_for*percent_eligible;
            } else {
                money_eliglible = money_left
            }
            cal_refund["refunded_amt"] = money_eliglible;
            document.getElementById(my_loader).innerHTML = `<p>Total projected refund so far(${formatter.format(cal_refund_holder)}) for ${new Date().getUTCFullYear()}</p>
            <p>Projected refund from this application is (${formatter.format(money_eliglible)})</p>`;
            return true;
        }
    }
}

function get_refundable_amt(your_data, my_loader) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        //play the loading animation until it is done loading
        let pre_load_ani = document.createElement("div");
        pre_load_ani.setAttribute("class", "loader");
        if(document.getElementById(my_loader)) {
            document.getElementById(my_loader).innerHTML = "";
            document.getElementById(my_loader).appendChild(pre_load_ani);
        }

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(my_loader).innerHTML = "";
            let app_elements = JSON.parse(this.responseText);
            cal_refund = app_elements;
            //update the projected reimbursement amount
            calculate_refundable_amt(my_loader);
        } else if (this.readyState == 4 && this.status == 400) {
            if (this.responseText == "No valid applications found!") {
                document.getElementById(my_loader).innerHTML = `<p>You have not submitted any applications yet</p>`
            }
        }

    }

    url = `http://localhost:5000/users/${your_data[0]["Employee ID"]}/revalue`;
    ajax.open("GET", url, true);
    ajax.send();
}
function disable_type(disable_feat, my_val) {
    if (my_val.value == "courses" ||
    my_val.value == "certification preparation classes" ||
    my_val.value == "certification" ||
    my_val.value == "other") {
        document.getElementById(disable_feat).options[0].selected = true;
    } else {
        document.getElementById(disable_feat).options[1].selected = true;
    }
    disable_scale('min_grade', document.getElementById("grade_format"))
}
function disable_scale(disable_feat, my_val) {
    if (my_val.value == "presentation") {
        document.getElementById(disable_feat).options[0].selected = true;
        document.getElementById(disable_feat).setAttribute("disabled", "disabled");
    } else {
        document.getElementById(disable_feat).removeAttribute("disabled");
    }
}