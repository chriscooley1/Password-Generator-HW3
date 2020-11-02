var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var finalArray = []
var length = 0
var generatedPassword = ""
var userWantsNumber = false
var userWantsUppercase = false
var userWantsLowercase = false
var userWantsSpecial = false
function getUserInput() {
  
  length = parseInt(prompt("How long would you like your password to be?"));
  console.log(length);

  if (isNaN(length)) {
    alert("please provide a number");
    console.log("user input not a number");
    return;
  }

  if (length > 8 && length < 126) {
    userWantsUppercase = confirm("Do you want uppercase letters");
    userWantsLowercase = confirm("Do you want lowercase letters");
    userWantsSpecial = confirm("Do you want special characters");
    userWantsNumber = confirm("Do you want numbers");
  }

  arrayCompiler(userWantsLowercase, userWantsUppercase, userWantsSpecial, userWantsNumber);
}

function arrayCompiler(userWantsLowercase, userWantsUppercase, userWantsSpecial, userWantsNumber) {
    finalArray = []
    if (userWantsLowercase) {
        for (var i = 0; i < lowerCaseLetters.length; i++) {
            finalArray.push (lowerCaseLetters[i]);
        }
        console.log(finalArray);
    }

    if (userWantsUppercase) {
        for (var i = 0; i < upperCaseLetters.length; i++) {
            finalArray.push (upperCaseLetters[i]);
        }
        console.log(finalArray);
    }

    if (userWantsSpecial) {
        for (var i = 0; i < specialCharacters.length; i++) {
            finalArray.push (specialCharacters[i]);
        }
        console.log(finalArray);
    }

    if (userWantsNumber) {
        for (var i = 0; i < numbers.length; i++) {
            finalArray.push (numbers[i]);
        }
        console.log(finalArray);
    }

    arraySquisher();
}

var passwordArray = []
function arraySquisher() {
    console.log(length);
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * finalArray.length); 
        var randomElement = finalArray[randomIndex];
        passwordArray.push (randomElement);
    }
    generatedPassword = passwordArray.join("");
    console.log(generatedPassword);
    document.querySelector("#password").value = generatedPassword
}

generateBtn.addEventListener("click", getUserInput);
