// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
   // Ask for length of password
    var lengthPass = prompt("How many characters will your password be? The length of the password must have 8 character and not morethan 128 character");

    //Ask for character type
    var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

    var lower = prompt("Enter a lowercase character type");
    var upper = prompt("Enter a uppercase character type");

    var numeric = prompt("Enter a numeric character type");
    var special =  prompt("Enter specialcharacter type");

//generate password 
// Generator functions - http://www.net-comber.com/charset.html
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var lower = function getRandomLower() { 
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
    }
  var upper = function getRandomUpper() { 
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
    }
  var numeric = function getRandomNumber() { 
      return String.fromCharCode(Math.floor(Math.random()*10) + 48);
    }
  var special = function getRandomSpecialCharacter() { 
    var symbols = '!#$%&*+ (), -./:;<=>?@[]^_`{|}~';
    return symbols[Math.floor(Math.random()* symbols.length)];
  }
  
  

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);