function load_emp_by_email() {
    let node = document.createElement("OPTION");

    let textnode = document.createTextNode("Hello");
   
    node.appendChild(textnode);
   
    document.getElementById("load_emails").appendChild(node);
}