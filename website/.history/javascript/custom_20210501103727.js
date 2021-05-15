import { PDFDocument } from 'pdf-lib'

function load_emp_by_email(loading_container, search_vals, result_load, send_me) {
    //reset the element
    document.getElementById(loading_container).innerHTML = "";
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
                let pre_load_ani = document.createElement("div");
                pre_load_ani.setAttribute("class", "loader");
                document.getElementById(loading_container).appendChild(pre_load_ani);
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
    node.appendChild(document.createTextNode(`${d.getUTCMonth()+1}/${d.getUTCDate()}/${d.getUTCFullYear()}`));
    document.getElementById(print_loc).appendChild(node);
}
function pre_load_my_info(loading_container) {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let my_user_id = params.get('user');
    if (my_user_id) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            let pre_load_ani = document.createElement("div");
            pre_load_ani.setAttribute("class", "loader");
            document.getElementById(loading_container).appendChild(pre_load_ani);

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(loading_container).innerHTML = "";
                let employee = JSON.parse(this.responseText);
                console.log(employee);
                for (let i = 0; i < employee.length; i++) {
                    if (employee[i]["Employee ID"]) {
                        //Pre-fill in the form data
                        document.getElementById("emp_id").value = employee[i]["Employee ID"];
                        document.getElementById("emp_id").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["First Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("firstname").value = employee[i]["First Name"];
                        document.getElementById("firstname").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["Middle Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("middlename").value = employee[i]["Middle Name"];
                        document.getElementById("middlename").setAttribute("readonly", "readonly")
                    }
                    if (employee[i]["Last Name"]) {
                        //Pre-fill in the form data
                        document.getElementById("lastname").value = employee[i]["Last Name"];
                        document.getElementById("lastname").setAttribute("readonly", "readonly")
                    }
                }
            } else if (this.readyState == 4 && this.status == 400) {
                document.getElementById(loading_container).innerHTML = `<p>${employee}</p>`
            }

        }

        url = "http://localhost:5000/users/" + my_user_id;
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}


import { PDFDocument } from 'pdf-lib'

async function createForm() {
const pdfDoc = await PDFDocument.create()

const page = pdfDoc.addPage([550, 750])

const form = pdfDoc.getForm("hi")

page.drawText('Enter your favorite superhero:', { x: 50, y: 700, size: 20 })

const superheroField = form.createTextField('favorite.superhero')
superheroField.setText('One Punch Man')
superheroField.addToPage(page, { x: 55, y: 640 })

page.drawText('Select your favorite rocket:', { x: 50, y: 600, size: 20 })

page.drawText('Falcon Heavy', { x: 120, y: 560, size: 18 })
page.drawText('Saturn IV', { x: 120, y: 500, size: 18 })
page.drawText('Delta IV Heavy', { x: 340, y: 560, size: 18 })
page.drawText('Space Launch System', { x: 340, y: 500, size: 18 })

const rocketField = form.createRadioGroup('favorite.rocket')
rocketField.addOptionToPage('Falcon Heavy', page, { x: 55, y: 540 })
rocketField.addOptionToPage('Saturn IV', page, { x: 55, y: 480 })
rocketField.addOptionToPage('Delta IV Heavy', page, { x: 275, y: 540 })
rocketField.addOptionToPage('Space Launch System', page, { x: 275, y: 480 })
rocketField.select('Saturn IV')

page.drawText('Select your favorite gundams:', { x: 50, y: 440, size: 20 })

page.drawText('Exia', { x: 120, y: 400, size: 18 })
page.drawText('Kyrios', { x: 120, y: 340, size: 18 })
page.drawText('Virtue', { x: 340, y: 400, size: 18 })
page.drawText('Dynames', { x: 340, y: 340, size: 18 })

const exiaField = form.createCheckBox('gundam.exia')
const kyriosField = form.createCheckBox('gundam.kyrios')
const virtueField = form.createCheckBox('gundam.virtue')
const dynamesField = form.createCheckBox('gundam.dynames')

exiaField.addToPage(page, { x: 55, y: 380 })
kyriosField.addToPage(page, { x: 55, y: 320 })
virtueField.addToPage(page, { x: 275, y: 380 })
dynamesField.addToPage(page, { x: 275, y: 320 })

exiaField.check()
dynamesField.check()

page.drawText('Select your favorite planet*:', { x: 50, y: 280, size: 20 })

const planetsField = form.createDropdown('favorite.planet')
planetsField.addOptions(['Venus', 'Earth', 'Mars', 'Pluto'])
planetsField.select('Pluto')
planetsField.addToPage(page, { x: 55, y: 220 })

page.drawText('Select your favorite person:', { x: 50, y: 180, size: 18 })

const personField = form.createOptionList('favorite.person')
personField.addOptions([
    'Julius Caesar',
    'Ada Lovelace',
    'Cleopatra',
    'Aaron Burr',
    'Mark Antony',
])
personField.select('Ada Lovelace')
personField.addToPage(page, { x: 55, y: 70 })

page.drawText(`* Pluto should be a planet too!`, { x: 15, y: 15, size: 15 })

//const pdfBytes = await pdfDoc.save()
const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
document.getElementById('pdf').src = pdfDataUri;
}