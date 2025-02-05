// 6. Password Validator
// Write a function that checks if a given password is valid. Password validations are:
//     •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits
// If a password is a valid print: "Password is valid".
//     If it is NOT valid, for every unfulfilled rule print a message:
//     •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

// function passwordValidator(input) {
//     let errorLog = [];
//     function lengthValidator(input) {
//         (input.length >= 6 && input.length <= 10) ? input : errorLog.push("Password must be between 6 and 10 characters") ;
//     }
//     function letterAndDigitValidator(input) {
//         (input.match(/^[a-zA-Z0-9]+$/g)) ? input : errorLog.push("Password must consist only of letters and digits") ;
//     }
//     function AtLeast2DigitValidator(input) {
//         (input.match(/[0-9]{2,}/g)) ? input : errorLog.push("Password must have at least 2 digits") ;
//     }
//     AtLeast2DigitValidator(lengthValidator(letterAndDigitValidator(input)));
//
//     errorLog.length === 0 ? console.log("Password is valid") : errorLog.forEach(x => console.log(x))
// }

function passwordValidator(str) {


    const errors = []
    function isValidLength(str) {
        if (!(str.length >= 6 && str.length <= 10))
            errors.push("Password must be between 6 and 10 characters")
        return str
    }

    function isOnlyLettersDigits(str) {
        if (!str.match(/^[a-zA-Z0-9]+$/g)) errors.push("Password must consist only of letters and digits")
        return str
    }

    function atleastTwoDigis(str) {
        if (!str.match(/[0-9]{2,}/g)) errors.push("Password must have at least 2 digits")
        return str
    }

    atleastTwoDigis(isOnlyLettersDigits(isValidLength(str)))

    errors.length === 0 ? console.log("Password is valid") : errors.forEach(x => console.log(x))
}

console.log(passwordValidator('logIn'));
//passwordValidator('MyPass123');
