/*
PROGRAM: User Input Alert Script
This JavaScript program retrieves text entered
by the user from an HTML form input field and
displays the entered value using an alert message
*/

"use strict";

/* ---- TEST RESULTS FUNCTION: Retrieves user input from the form text box and displays the entered value in an alert box ---- */
function testResults(form) {
  var TestVar = form.inputbox.value; // Store user input value from form field
  alert("You typed: " + TestVar); // Display entered value in alert message

}
