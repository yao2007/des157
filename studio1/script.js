console.log("reading");

// store form fields in variables
var userName = document.f.userName.value;
var userColor = document.f.userColor.value;
var results = document.getElementById("results");
var myMsg = document.getElementById("myMsg");

// capture the submit event
document.f.onsubmit = processForm;

// prompt1: capture the reset event and send it a callback function named resetForm
document.f.onreset = resetForm;

function resetForm() {
  myMsg.innerHTML = "";
  results.className="hide";
}
// define process functionS
function processForm() {
  userName = document.f.userName.value;
  userColor = document.f.userColor.value;
  // easter egg
  switch (userColor) {
    case "blue":
      myMsg.style.backgroundColor = "blue";
      break;
    case "orange":
      myMsg.style.backgroundColor = "orange";
      break;
    default:
      myMsg.style.backgroundColor = "#333";
  }

  myMsg.innerHTML =
    "Hi, " +
    userName +
    "!<br>You love the color <em>" +
    userColor +
    "</em>!  Have a great day!";
  
  results.className="show";
  //prevent page from reloading
  return false;
}

/* 
prompt2: 
define the resetForm function to:
  1. set the myMsg.innerHTML to an empty string
  2. set the class attribute for myMsg to "hide"
*/

