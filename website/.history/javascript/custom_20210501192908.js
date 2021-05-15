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
                console.log(employee);
                for (let i = 0; i < employee.length; i++) {
                    if (employee[i]["First Name"]) {
                        //Pre-fill in the form data
                        document.getElementById(loading_container).innerHTML = `${employee[i]["First Name"]}`;
                    }
                }
                load_work(employee);
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
                console.log(employee_work);
                for (let i = 0; i < employee_work.length; i++) {
                    if (employee_work[i]["Application ID"]) {
                        //Create work lists
                        let my_desc = "";
                        let my_date = "Has not yet been approved!"
                        if (employee_work[i]["Date Completed"] != null) {
                            my_date = employee_work[i]["Date Completed"];
                        } else {
                            if (employee_work[i]["Description"] != null) {
                                my_desc = employee_work[i]["Description"];
                            }
                            get_my_app(employee_work[i]["Application ID"]);
                            document.getElementById("complete_approvals").innerHTML += `
                            <li>
                                <div class="card w-100">
                                    <div class="card-body w-100">
                                        <h4 class="card-title" id="work_app_${employee_work[i]["Application ID"]}"></h4>
                                        <p class="card-text">Approval for applicationID(#${employee_work[i]["Application ID"]})</p>
                                        <h5 class="card-title">Describe Reason for Approval/Denial:</h5>
                                        <textarea class="card-text" cols="40" rows="5" maxlength="255">${my_desc}</textarea>
                                        <h5 class="card-title">Date submitted:</h5>
                                        <p class="card-text">${employee_work[i]["Date Received"]}</p>
                                        <h5 class="card-title">Date Approved:</h5>
                                        <p class="card-text">${my_date}</p>
                                        <button type="submit" name="" id="" class="btn btn-outline-success">Approve Application</button>
                                    </div>
                                </div>
                            </li>
                            <hr />`;
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
                        document.getElementById(`work_app_${app_id}`).innerHTML += `Employee awaiting apporoval(#eID-${app_elements[i]["Employee ID"]})`;
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