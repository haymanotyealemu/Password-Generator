// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  // Generator functions - http://www.net-comber.com/charset.html
   // Ask for length of password
    var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
    //ask for character type
    var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());










  function getRandomLower() { 
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}


function getRandomUpper() { 
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber() { 
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
function getRandomSpecialCharacter() { 
    var symbols = '!#$%&*+ (), -./:;<=>?@[]^_`{|}~';
    return symbols[Math.floor(Math.random()* symbols.length)];
}


 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);