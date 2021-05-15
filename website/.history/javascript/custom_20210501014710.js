function load_emp_by_email(loading_container, search_vals) {
    //reset the element
    document.getElementById("email_container").innerHTML = "Loading...";
    //load up the new search query result
    let search_query = document.getElementById("my_search").value;

    if (search_query) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("email_container").innerHTML = "";

                let employees = JSON.parse(this.responseText);
                console.log(employees);

                for (let i = 0; i < employees.length; i++) {
                    if (employees[i].Email) {
                        //Create a list below of selectable emails as you type your email in
                        document.getElementById("load_emails").style.display = "inline";
                        let node = document.createElement("a");
                        node.setAttribute("href", "/account.html");
                        node.setAttribute("id", "help_email1");
                        let textnode = document.createTextNode(employees[i].Email);
                        node.appendChild(textnode);
                        document.getElementById("email_container").appendChild(node);
                    }
                }
            } else if (this.readyState == 4 && this.status == 400) {

                document.getElementById("email_container").innerHTML = "<p>There are no employees with that email!</p>"

            }

        }

        url = "http://localhost:5000/search/" + search_query;
        xhttp.open("GET", url, true);
        xhttp.send();
    } else {
        clear_email_list();
    }
}
function clear_email_list() {
    //empty the email list
    document.getElementById("email_container").innerHTML = "";
    document.getElementById("load_emails").style.display = "none";
}
//http://localhost:5000/search/