function load_emp_by_email() {
    let node = document.createElement("OPTION");

    let textnode = document.createTextNode("Water");
   
    node.appendChild(textnode);
   
    //document.getElementById("myList").appendChild(node); 
    document.getElementById('load_emails').innerHTML = `<option>Hello<option>`;
}