// Assignment Code with added event listener.  When button is clicked you will be prompted with questions.
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays for password characters
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Prompt asking for how many characters the user would like in their passowrd.  It can be between 8 and 128 characters.
function generatePassword() {
  var passwordLength = (prompt("How many characters do you want your password to contain?"));
  //While loop for password length between 8 and 128 characters.
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8-128 characters, Please try again");
    var passwordLength = (prompt("How many characters do you want your password to contain?"));
  }
  //Alert box that displays number of characters the password will have
  alert(`Your password will contain ${passwordLength} characters`);

  //Alert box that determines the characters you want included in your password.
  var specialInpassword = confirm("Click OK if you want a special character in your password");
  var numberInpassword = confirm("Click OK if you want a number in your password");
  var lowerInpassword = confirm("Click OK if you want a lowercase letter in your password");
  var upperInpasswprd = confirm("Click OK if you want an upercase leter in your password");
 
  //Loop if no paramaters are selected.
  while (lowerInpassword === false && upperInpasswprd === false && specialInpassword === false && numberInpassword === false) {
    alert("You must click OK for at least one of the parameters");
    var specialInpassword = confirm("Click OK if you want a special character in your password");
    var numberInpassword = confirm("Click OK if you want a number in your password");
    var lowerInpassword = confirm("Click OK if you want a lowercase letter in your password");
    var upperInpasswprd = confirm("Click OK if you want an upercase leter in your password");
  }

  //Loop that determines what characters will be included in your password.
  var passwordCharacters = []
    if (specialInpassword) {
    passwordCharacters = passwordCharacters.concat(special)
    }
    if (numberInpassword) {
    passwordCharacters = passwordCharacters.concat(number)
    }
    if (lowerInpassword) {
      passwordCharacters = passwordCharacters.concat(lowerLetter)
    }
    if (upperInpasswprd) {
      passwordCharacters = passwordCharacters.concat(upperLetter)
    }
    console.log(passwordCharacters)

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  //Displays password in the console.
  console.log(`your password is ${password}`);
}