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

var updateState = function(tagId, type) {
    if (checkInput($(tagId).val(), type)) {
        $(tagId).css('border-color',    '#3cba54');
        $(tagId + 'Label').css('color', '#3cba54');
    } else {
        $(tagId).css('border-color',    '#db3236');
        $(tagId + 'Label').css('color', '#db3236');
    }
    if ($(tagId).val() === '') {
        $(tagId).css('border-color',    '#455A64');
        $(tagId + 'Label').css('color', '#455A64');
    }
}

$(document).ready(function() {
    $('#username').keyup(function() {
        console.log('username');
        updateState('#username', 'username');
    });

    $('#email').keyup(function() {
        updateState('#email', 'email');
    });

    $('#password').keyup(function() {
        updateState('#password', 'password');
    });

    $('#phoneNumber').keyup(function() {
        updateState('#phoneNumber', 'phoneNumber');
    });

    $('#cardNumber').keyup(function() {
        updateState('#cardNumber', 'cardNumber');
    });
});