var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

function getUserInput() {
    var length = parseInt(prompt("How long would you like your password to be?"));
    console.log(length);

    if (isNaN(length) === true) {
        alert("please provide a number");
        console.log("user input not a number")
        return;
    }







}

generateBtn.addEventListener("click", getUserInput);