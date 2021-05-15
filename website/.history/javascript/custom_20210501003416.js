function load_emp_by_email() {
    //reset the element
    document.getElementById("email_container").innerHTML = "";
    //load up the new search query result
    let search_query = document.getElementById("my_search").value;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let employees = JSON.parse(this.responseText);
            console.log(employees);

            if (movie.available) {
                info += "<h3>This Movie is Available to Rent</h3>"
            } else {
                info += "<h3>This Movie is Unavailable</h3>"
            }

            document.getElementById("result").innerHTML = info;
        } else if (this.readyState == 4 && this.status == 400) {

            document.getElementById("email_container").innerHTML = "<h3>There are no employees with that email!</h3>"

        }

    }

    url = "http://localhost:5000/search/" + search_query;
    xhttp.open("GET", url, true);
    xhttp.send()

    //Create a list below of selectable emails as you type your email in
    document.getElementById("load_emails").style.display = "inline";
    let node = document.createElement("a");
    node.setAttribute("href", "#");
    node.setAttribute("id", "help_email1");
    let textnode = document.createTextNode("Hello");
    node.appendChild(textnode);
    document.getElementById("email_container").appendChild(node);
}
function clear_email_list() {
    //empty the email list
    document.getElementById("email_container").innerHTML = "";
    document.getElementById("load_emails").style.display = "none";
}
//http://localhost:5000/search/