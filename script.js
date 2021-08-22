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
  //generator functions

  var functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpperCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters() {
      return specialCharacters(
        Math.floor(Math.random() * specialCharacters.length)
      );
    },
  ];

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if ((numbers = true)) {
    minimumNumbers = functionArray[0];
    basePassword++;
  }

  if ((lowerCases = true)) {
    minimumLowerCases = functionArray[1];
    basePassword++;
  }

  if ((upperCases = true)) {
    minimumUpperCases = functionArray[2];
    basePassword++;
  }

  if ((special = true)) {
    minimumSpecialCharacters = functionArray[3];
    basePassword++;
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(passwordLength) - passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}
