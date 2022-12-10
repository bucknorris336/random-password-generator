var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";
var passwordLength = 0;

function randomizer(str) {
  var randomPassword = "";
  var randomisedChar;
  for (var i = 0; i < str.length; i++) {
    randomisedChar = str.charAt(Math.floor(Math.random() * str.length));
    randomPassword += randomisedChar;
  }
  return randomPassword;
}

function tryAgain(fail) {
  alert("Fail!");
  window.location.reload();
}

function displayPassword() {
  if (!password) {
    tryAgain();
  }
  var passwordText = document.querySelector("#password");
  var passwordDisplay = randomizer(password);
 
  passwordText.value = passwordDisplay.slice(0, passwordLength);
}

function isSpecialAllowed() {
  var specialAllowed = confirm("Special charaters Allowed?");
  if (specialAllowed) {
    password += special;
  }
  displayPassword();
}

function isNumericAllowed() {
  var numericAllowed = confirm("numeric Allowed?");
  if (numericAllowed) {
    password += numeric;
  }
  isSpecialAllowed();
}

function isUppercaseAllowed() {
  var upperCaseAllowed = confirm("Uppercase Allowed?");
  if (upperCaseAllowed) {
    password += uppercase;
  }
  isNumericAllowed();
}
function isLowercaseAllowed() {
  var lowerCaseAllowed = confirm("Lowercase Allowed?");
  if (lowerCaseAllowed) {
    password += lowercase;
  }
  isUppercaseAllowed();
}
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

function startProcess() {
  checkPasswordLength();
}

generateBtn.addEventListener("click", startProcess);
