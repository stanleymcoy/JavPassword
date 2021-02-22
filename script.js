var generatePasswordBtn = document.getElementById("#password");

document.addEventListener('click', generatePassword());

//password must be a string of numbers, charcters and special characters

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCaseChar = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

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

function generatePassword() {
    var passwordCharacters = getPasswordCharacters();

    var finalPassword = [];

    var possibleCharacters = [];

    var guaranteedCharacters = [];

    if (possibleCharacters.hasNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers);
        guaranteedCharacters.push(getRandom(numbers));
    }

    if (possibleCharacters.hasLowerCaseChar) {
        passwordCharacters = passwordCharacters.concat(lowerCaseChar);
        guaranteedCharacters.push(getRandom(lowerCaseChar));
    }

    if (possibleCharacters.hasSpecialChars) {
        passwordCharacters = passwordCharacters.concat(specialChars);
        guaranteedCharacters.push(getRandom(specialChars));
    }

    if (possibleCharacters.hasUpperCaseChars) {
        passwordCharacters = passwordCharacters.concat(upperCaseChars);
        guaranteedCharacters.push(getRandom(upperCaseChars));
    }

    if (
        confirmUpperCase === false &&
        confirmLowerCase === false &&
        confirmSpecialCharacter === false &&
        confirmNumericCharacter === false
    ) {
        alert("You must choose at least one parameter");
        return;
    }
    /*var num = [0];

    function random(min, max) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }
    random;
    */

    function getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }


    function shuffle() {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            var rand = getRandomNumber(0, i);
            var temp = this[i];
            if (rand !== i) {
                this[i] = this[rand];
            }
            this[rand] = temp;
        }
    }

    Array.prototype.shuffle = shuffle;

    function DistinctRandomNumberGenerator(maxDigits) {
        maxDigits = Number(maxDigits) || 40;
        var max = 10 ** maxDigits + 1;
        var arr = [];

        for (var i = 1; i <= max; i++) {
            arr.push(i);
        }

        arr.shuffle();

        function getRandomKey() {
            return arr.length ? arr.shift() : 0;
        }

        this.getRandomKey = getRandomKey;
    }

    var drng = new DistinctRandomNumberGenerator(3);
    for (var i = 0; i <= 1010; i++) {
        console.log(drng.getRandomKey());
    }




    /*

    if the passwordLength is a number < 8 characters return [false + " password is too short"]
     
    if the password is a number >7 && < 128 return true

    var passwordLength = Math.random().toString().substring(8, 128) + Math.random().toString(26).substring(2, 15);

    once the passwordLength is established decide how many perameters must be included. (ie uppercase, lowercase, numbers, special characters)

    generatePassword is the concatinated string and append it to the .card-body div 
    */