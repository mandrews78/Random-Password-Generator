// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);


//Prompt asking for how many characters the user would like in their passowrd.  It can be between 8 and 128 characters.
function generatePassword(){
  var confirmLength = (prompt("How many characters do you want your password to contian?"));
  if (confirmLength <=7 || confirmLength >=128) {
    alert("Password length must be between 8-128 characters, Please try again");
    var confirmLength = (prompt("How many characters do you want your password to contain?"));
  }
  debugger
  //Alert box that displays number of characters the password will have
  alert (`Your password will contain ${confirmLength} characters`);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("your password is")
