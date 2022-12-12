var generateBtn = document.querySelector("#generate");
//Global variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";
var passwordLength = 0;

//Generating a random passowrd for the user interface
function randomizer(str) {
  var randomPassword = "";
  var randomisedChar;
  for (var i = 0; i < str.length; i++) {
    randomisedChar = str.charAt(Math.floor(Math.random() * str.length));
    randomPassword += randomisedChar;
  }
  return randomPassword;
}
//function that alerts when password doesn't meet criteria, then reloads the page
function tryAgain(fail) {
  alert("Fail!");
  window.location.reload();
}
//function to display password
function displayPassword() {
  if (!password) {
    tryAgain();
  }
  var passwordText = document.querySelector("#password");
  var passwordDisplay = randomizer(password);

  passwordText.value = passwordDisplay.slice(0, passwordLength);
}
//function to allow special characters
function isSpecialAllowed() {
  var specialAllowed = confirm("Special charaters Allowed?");
  if (specialAllowed) {
    password += special;
  }
  displayPassword();
}
//function to allow numbers
function isNumericAllowed() {
  var numericAllowed = confirm("numeric Allowed?");
  if (numericAllowed) {
    password += numeric;
  }
  isSpecialAllowed();
}
//function to allow uppercase letter
function isUppercaseAllowed() {
  var upperCaseAllowed = confirm("Uppercase Allowed?");
  if (upperCaseAllowed) {
    password += uppercase;
  }
  isNumericAllowed();
}
//function to allow lowercase letters
function isLowercaseAllowed() {
  var lowerCaseAllowed = confirm("Lowercase Allowed?");
  if (lowerCaseAllowed) {
    password += lowercase;
  }
  isUppercaseAllowed();
}
//function to describe password requirement length
function checkPasswordLength() {
  passwordLength = prompt(
    "Please choose a password length between 8 and 120 characters",
    "8?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    tryAgain();
  }
  isLowercaseAllowed();
}
// funtion to start the process
function startProcess() {
  checkPasswordLength();
}
//Event listener for clicking generate button to start the process
generateBtn.addEventListener("click", startProcess);
