// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var passwordLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var passwordSpecialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"]

// Write password to the #password input
function writePassword() {
  // Prompts inside loops that repeat if given invalid inputs
  do {
    var passwordLength = prompt("Pick a length from 8-128, type only the number");
  } while (passwordLength > 128 || passwordLength < 8);
  do {  
    var boolLowercaseLetters = confirm("Use lowercase letters? (If you select none of the next four prompts it will repeat)");
    var boolUppercaseLetters = confirm("Use uppercase letters?");
    var boolNumbers = confirm("Use numbers?");
    var boolSpecialCharacters = confirm("Use special characters?")
  } while (!boolLowercaseLetters && !boolUppercaseLetters && !boolNumbers && !boolSpecialCharacters);
  // Runs the generate password function with all the values collected from the user
  var password = generatePassword(passwordLength, boolLowercaseLetters, boolUppercaseLetters, boolNumbers, boolSpecialCharacters);
  // Displays the text on the website
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passwordLength, boolLowercaseLetters, boolUppercaseLetters, boolNumbers, boolSpecialCharacters){
  var password = "";
  var passwordCharacters = [];

  // Concats all the selected characters in one variable
  if (boolLowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(passwordLetters);
  }
  // Capitalizes lowercase letters
  if (boolUppercaseLetters) {
    var uppercasePasswordLetters = [];
    for (let i of passwordLetters) {
      uppercasePasswordLetters = uppercasePasswordLetters.concat([i.toUpperCase()]);
    }
    passwordCharacters = passwordCharacters.concat(uppercasePasswordLetters);
  }
  if (boolNumbers) {
    passwordCharacters = passwordCharacters.concat(passwordNumbers);
  }
  if (boolSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(passwordSpecialCharacters);
  }
  // For loop runs the amount of times inputed by the user adding a character each time
  for (let i = 0; i < passwordLength; i++){
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
