var generateBtn = document.getElementById("#password");


var number = ["0","1","2","3","4", "5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","?","+","-",">","<"];
var alphaUpper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var alphaLower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

for (var i = 0; i < number.length; i++){
  console.log(number[i]);
}

for (var i=0; i <= specialChar.arrayLength; i++);{
    console.log(specialChar[i]);
}  

for (var i=0; i <= alphaUpper.arrayLength; i++);{
    console.log(alphaUpper[i]);
}  

for (var i=0; i <= alphaLower.arrayLength; i++);{
    console.log(alphaLower[i]);
}  



function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to contain?");

  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = prompt("How many characters would you like your password to contain?");
    
    alert(`Your password will have ${confirmLength} characters`);

  }
}
  var confirmSpecialCharacter = confirm("Click Ok to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false){
      alert("You must choose at least one parameter");
      var confirmSpecialCharacter = confirm("Click Ok to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    var passwordCharacters = [];

    if (confirmSpecialCharacter){
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

      console.log(passwordCharacters);

        var randomPassword = "";

        for (var i = 0; i < confirmLength.length; i++) {
          var randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword);
        }
           //return randomPassword


function writePassword (){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
  //passwordText.value = password;

