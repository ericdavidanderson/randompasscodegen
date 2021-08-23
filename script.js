var minimumNumbers = "0123456789";
var minimumLowerCases = "abcdefghijklmnopqrstuvwxyz";
var minimumUpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var minimumSpecialCharacters = "!@#$%^&*()_+=-/?.>,<";
var results = "";
var passwordLength;
var basePassword = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  askquestion();
  function askquestion() {
    var stringlength = prompt(
      "How many characters do you want for your new password? It must be more than 8 and less than 128."
    );
    if (stringlength >= 8 && stringlength <= 128) {
      passwordLength = stringlength;
    } else {
      alert("Please enter a value between 8 and 128.");
      askquestion();
    }

    var numbers = confirm("Do you want numbers in your password?");
    if (numbers) {
      basePassword += minimumNumbers;
    }

    var lowerCases = confirm(
      "Do you want lowercases letters in your password?"
    );
    if (lowerCases) {
      basePassword += minimumLowerCases;
    }

    var upperCases = confirm(
      "Do you want uppercases letters in your password?"
    );
    if (upperCases) {
      basePassword += minimumUpperCases;
    }

    var special = confirm("Do you want special characters in your password?");
    if (special) {
      basePassword += minimumSpecialCharacters;
    }

    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;

    //Empty mins for Numbers, LowerCases (letters), SpecialCharacters, and upperCases (letters)
  }

  for (let index = 0; index < passwordLength; index++) {
    results += basePassword.charAt(
      Math.floor(Math.random() * basePassword.length)
    );
  }
  return results;
  
}
