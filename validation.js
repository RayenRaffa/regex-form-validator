// validation script here
// \w == {a-z A-Z 0-9 _ } . -
var usernameRegEx   = /[[:alnum:]]{5,12}/;
var emailRegEx      = /(\w|-|\.)+@[a-z0-9]+\.[a-z]+/;
var passwordRegEx   = /^[[:alnum:]]*(?=[A-Z])[[:alnum:]]*$/; // still need to check the length
var phoneRegEx      = /^00216[0-9]{8}$/;
var cardNumberRegEx = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
