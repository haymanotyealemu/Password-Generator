// Assignment Code
var generateBtn = document.querySelector("#generate");
// WHEN a user click the button to generate a password, series of prompt will display.
  // Assignment Code + event listener
  document.querySelector("#generate").addEventListener("click" , writePassword);

  // Make an Array for each character types.
  var alphaLower = [function getRandomLower() { 
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
    }];
  var alphaUpper = [function getRandomUpper() { 
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
    }];
var numeric = [function getRandomNumber() { 
      return String.fromCharCode(Math.floor(Math.random()*10) + 48);
    }];
var specialCharacter = [function getRandomSpecialCharacter() { 
    var symbols = '!#$%&*+ (), -./:;<=>?@[]^_`{|}~';
    return symbols[Math.floor(Math.random()* symbols.length)];
  }];
      
// Variable Declaration

var confirmLength = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialcharacter;

// Ask for length of password
var lengthPass = prompt("How many characters will your password be? The length of the password must  have 8 character and not morethan 128 character");
function  generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));
  // loop length of password times.
  while (confirmLength <= 7 || confirmLength >= 129){
          alert("Password length must have atleast 8 character and not morethan 128 character. Try again!" );
          var confirmLength = (prompt("How many characters would you like your password to be?"));
  }
  // Identify which character type include in the password.
  var confirmlowercase = confirm("Click Ok if you would like to include lowercase character ?");
  var confirmuppercase = confirm("Click Ok if you would like to include uppercase character ?");
  var confirmnumber = confirm("Click Ok if you would like to include numeric character ?");
  var confirmspecialcharacter = confirm("Click Ok if u would like to include special character ?");
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
   // Ask for length of password
    var lengthPass = prompt("How many characters will your password be? The length of the password must have 8 character and not morethan 128 character");


//generate password 
// Generator functions - http://www.net-comber.com/charset.html








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);