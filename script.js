// Assignment Code
var generateBtn = document.querySelector("#generate");
// WHEN a user click the button to generate a password, series of prompt will display.
  // Assignment Code + event listener
  document.querySelector("#generate").addEventListener("click" , writePassword);

  // Make an Array for each character types.
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacter = ["!", "#", "$", "%", "&", "*", "+", ".", "@", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'", ];
    
  
      
// Variable Declaration

var confirmLength = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialcharacter;

// Generate Password Function.

function  generatePassword() {

  // Ask for length of password

  var confirmLength = (prompt("How many characters would you like your password to be?"));

  // loop length of password times.

  while (confirmLength <= 7 || confirmLength >= 129){
          alert("Password length must have atleast 8 character and not more than 128 character. Try again!" );
          var confirmLength = (prompt("How many characters would you like your password to be?"));
  }
  
  // Identify which character type include in the password.
  var confirmlowercase = confirm("Click Ok if you would like to include lowercase character ?");
  var confirmuppercase = confirm("Click Ok if you would like to include uppercase character ?");
  var confirmnumber = confirm("Click Ok if you would like to include numeric character ?");
  var confirmspecialcharacter = confirm("Click Ok if u would like to include special character ?");

  // Loop if answer is outside the parameters
  while (confirmlowercase === false && confirmuppercase === false && confirmnumber === false && confirmspecialcharacter === false) {
    alert("You must select at least one character!");
  
  var confirmlowercase = confirm("Click Ok if you would like to include lowercase character ?");
  var confirmuppercase = confirm("Click Ok if you would like to include uppercase character ?");
  var confirmnumber = confirm("Click Ok if you would like to include numeric character ?");
  var confirmspecialcharacter = confirm("Click Ok if u would like to include special character ?");
  }
  //Determine the password character and using the concat() method joins two or more strings.
  var passwordCharacters = [];
  if (confirmlowercase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }
  if (confirmuppercase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }
  if (confirmlowercase) {
    passwordCharacters = passwordCharacters.concat(numeric);
  }
  if (confirmlowercase) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }
  console.log( passwordCharacters);
  // loop for a random password character from array.

  var randomPassword = ""
  for (i=0; i< confirmLength; i++) {
    var randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
    console.log(randomPassword );
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;;
  
  }

