function load_emp_by_email() {
    var node = document.createElement("LI");                 // Create a <li> node

    var textnode = document.createTextNode("Water");         // Create a text node
   
    node.appendChild(textnode);                              // Append the text to <li>
   
    document.getElementById("myList").appendChild(node); 
    document.getElementById('load_emails').innerHTML = `<option>Hello<option>`;
}