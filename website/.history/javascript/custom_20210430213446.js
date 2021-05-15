function load_emp_by_email() {
    //Create a list below of selectable emails as you type your email in
    let node = document.createElement("OPTION");
    let textnode = document.createTextNode("Hello");
    node.appendChild(textnode);
    document.getElementById("load_emails").appendChild(node);
}