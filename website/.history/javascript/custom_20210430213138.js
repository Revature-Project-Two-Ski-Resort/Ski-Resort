function load_emp_by_email() {
    var node = document.createElement("LI");

    var textnode = document.createTextNode("Water");
   
    node.appendChild(textnode);
   
    //document.getElementById("myList").appendChild(node); 
    document.getElementById('load_emails').innerHTML = `<option>Hello<option>`;
}