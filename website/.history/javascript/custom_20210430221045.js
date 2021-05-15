function load_emp_by_email() {
    //Create a list below of selectable emails as you type your email in
    let node = document.createElement("a");
    node.setAttribute("href", "#");
    node.setAttribute("id", "help_email1");
    let textnode = document.createTextNode("Hello");
    node.appendChild(textnode);
    document.getElementById("load_emails").appendChild(node);
}
function clear_email_list() {
    //empty the email list
    document.getElementById("load_emails").removeChild();
}