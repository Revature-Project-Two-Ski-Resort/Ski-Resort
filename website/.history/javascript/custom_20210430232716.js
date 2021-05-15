function load_emp_by_email() {
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
}