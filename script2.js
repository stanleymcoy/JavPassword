var generateBtn = document.getElementById("#password");
var generatePassword = "number + specialChar + alphaUpper + alphaLower";
var length = 8;


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?",
  "+",
  "-",
  ">",
  "<",
];
var alphaUpper = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var alphaLower = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

// var confirmSpecialCharacter = confirm("Click Ok to confirm if you would like to include special characters");
 
// var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");

// var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");

// var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

function writePassword() {
  for (var i = 0; i < number.length; i++) {
     console.log(number[i]);
  }

  for (var i = 0; i <= specialChar.arrayLength; i++) {
    return (specialChar[i]);
  }

  for (var i = 0; i <= alphaUpper.arrayLength; i++) {
    return (alphaUpper[i]);
  }

  for (var i = 0; i <= alphaLower.arrayLength; i++) {
    return (alphaLower[i]);
  }
  

  function generatePassword() {


    while (length > 7 && length < 129) {

      prompt(
        "How many characters would you like your password to contain?"
      );

      alert(`Your password will have ${length} characters`);
    }
  }
  // generatePassword();


  if (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    return;

    var confirmSpecialCharacter = confirm(
      "Click Ok to confirm if you would like to include special characters"
    );
    var confirmNumericCharacter = confirm(
      "Click OK to confirm if you would like to include numeric characters"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like to include lowercase characters"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like to include uppercase characters"
    );
  }

  var passwordCharacters = [];

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar);
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }

  // console.log(passwordCharacters);

  var randomPassword = "";

  for (var i = 0; i < confirmLength.length; i++) {
    var randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    // console.log(randomPassword);
  }
  randomPassword();

  // function writePassword() {
    var password = generatePassword();
    // var passwordText = document.querySelector("#password");
  }
