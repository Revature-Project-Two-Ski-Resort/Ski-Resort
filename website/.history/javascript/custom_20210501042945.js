function load_emp_by_email(loading_container, search_vals, result_load, send_me) {
    //reset the element
    document.getElementById(loading_container).innerHTML = "Loading...";
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

                document.getElementById(loading_container).innerHTML = "<p>There are no employees with that email!</p>"

            } else {
                let pre_load_ani = document.createElement("img");
                node.setAttribute("src", "pre-load.img");
                document.getElementById("").appendChild(pre_load_ani);
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
    node.appendChild(document.createTextNode(`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`));
    document.getElementById(print_loc).appendChild(node);
}
function pre_load_my_info() {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let my_user_id = params.get('user');
}