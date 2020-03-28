// validation script here
// \w == {a-z A-Z 0-9 _ } . -
var usernameRegEx   = /^[a-zA-Z0-9]{5,12}$/;
var emailRegEx      = /^(\w|-|\.)+@[a-z0-9]+(\.[a-z]+)+$/;
var passwordRegEx   = /^[a-zA-Z0-9]*(?=[A-Z])[a-zA-Z0-9]*$/; // still need to check the length
var phoneRegEx      = /^(00|\+)216[0-9]{8}$/;
var cardNumberRegEx = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/;


var checkInput = function (input, type) {
    switch (type) {
        case 'username' :
            if (usernameRegEx.test(input)) { return true; }
            break;
        case 'email' :
            if (emailRegEx.test(input)) { return true; }
            break;
        case 'password' :
            if (passwordRegEx.test(input)) { return true; }
            break;
        case 'phoneNumber' :
            if (phoneRegEx.test(input)) { return true; }
            break;
        case 'cardNumber' :
            if (cardNumberRegEx.test(input)) { return true; }
            break;
        default :
            alert('Invalid type to check against, please make sure you provided a correct input type');
    }
    return false;
}
