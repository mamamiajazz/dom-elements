console.log("Script started")





function start() {
    console.log("click");

    // create heading h1
    let heading = document.createElement("h1");

    // set the text for the heading
    heading.innerText = "Attendance";

    //set styles
    heading.style.color = "crimson";
    heading.style.textDecoration = "underline";

    // add the heading to the page
    document.body.appendChild(heading);

    let name = prompt("Enter Name");
    addName(name);

    let lastName = prompt("Enter Last Name");
    addLastName(LastName);
}

function addName(newName, newLastName) {
    console.log(newName);
    let heading2 = document.createElement("h2");
    heading2.innerText = newName;
    document.body.appendChild(heading2);


}