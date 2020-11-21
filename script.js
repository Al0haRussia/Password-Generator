// Delcaring variables before generatePassword function
var enter;

var confirmNumber;

var confirmCharacter;

var confirmUppercase;

var confirmLowercase;

var choices;

// Declaring criteria arrays for generatePassword function
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

// Function that will generate the password
function generatePassword() {
    //Prompts how many characters you would like
    enter = prompt("How many characters would you like your password? Choose between 8 and 128");
    //Alerts if chosen length is too big or small, and if you want any other criterias
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = alert("You must choose between 8 and 128");

    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    //If none of the criteria are selected
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    //If all of the criteria are selected
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    //If any 3 criteria combinations are selected
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    //If any 2 criteria combinations are selected
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    //If only 1 criteria is selected
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };    
    //Placeholder array for length
    var password = [];
    //Randomly selects from crtieria arrays user selected
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    //Combines with placeholder array to create a string
    var generatePasswordFinal = password.join("");
    UserInput(generatePasswordFinal);
    return generatePasswordFinal;
    
}


//Used to create uppercase letters
var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

//A button used to generate the password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordFinal = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = passwordFinal;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Puts the password into the textbox
function UserInput(generatePasswordFinal) {
   document.getElementById("password").textContent = generatePasswordFinal;

}