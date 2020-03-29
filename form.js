let form    = document.createElement("form");
let formDiv = document.getElementById('formDiv');
formDiv.appendChild(form);

let userNameField = document.createElement('input');
userNameField.setAttribute('type','text');
userNameField.setAttribute('name','username');
userNameField.setAttribute('id','username');
userNameField.setAttribute('placeholder','Username');
// userNameField.setAttribute('onFocus', 'if (this.value === "Username") { this.value = ""; }');
// userNameField.setAttribute('onBlur',  'if (this.value === "") {this.value = "Username"};');

let userNameLabel = document.createElement('label');
userNameLabel.setAttribute('for',userNameField.name);
userNameLabel.setAttribute('id','usernameLabel');
userNameLabelText = document.createTextNode('Must be alphanumeric & contain 5-12 characters e.g. walid123');
userNameLabel.appendChild(userNameLabelText);



let emailField = document.createElement('input');
emailField.setAttribute('type','text');
emailField.setAttribute('name','email');
emailField.setAttribute('id','email');
emailField.setAttribute('placeholder','Email');
// emailField.setAttribute('onFocus', 'if (this.value === "Email") { this.value = ""; }');
// emailField.setAttribute('onBlur',  'if (this.value === "") {this.value = "Email"};');

let emailLabel = document.createElement('label');
emailLabel.setAttribute('for',emailField.name);
emailLabel.setAttribute('id','emailLabel');
emailLabelText = document.createTextNode('Must be a valid email address e.g. me@mydomain.com');
emailLabel.appendChild(emailLabelText);



let passwordField = document.createElement('input');
passwordField.setAttribute('type','password');
passwordField.setAttribute('name','password');
passwordField.setAttribute('id','password');
passwordField.setAttribute('placeholder','Password');
// passwordField.setAttribute('onFocus', 'if (this.value === "Password") { this.type = "password"; this.value = ""; }');
// passwordField.setAttribute('onBlur',  'if (this.value === "") {this.type ="text"; this.value = "Password"};');

let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for',passwordField.name);
passwordLabel.setAttribute('id','passwordLabel');
passwordLabelText = document.createTextNode('Must be alphanumeric & contain 5-12 characters\nMust have upper & lower case e.g. Walid123');
passwordLabel.appendChild(passwordLabelText);



let phoneField = document.createElement('input');
phoneField.setAttribute('type','text');
phoneField.setAttribute('name','phoneNumber');
phoneField.setAttribute('id','phoneNumber');
phoneField.setAttribute('placeholder','Phone number');
// phoneField.setAttribute('onFocus', 'if (this.value === "Phone number") { this.value = ""; }');
// phoneField.setAttribute('onBlur',  'if (this.value === "") {this.value = "Phone number"};');

let phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for',phoneField.name);
phoneLabel.setAttribute('id','phoneNumberLabel');
phoneLabelText = document.createTextNode('Must be a valid Tunisia number e.g. 0021620200200');
phoneLabel.appendChild(phoneLabelText);



let cardNumField = document.createElement('input');
cardNumField.setAttribute('type','text');
cardNumField.setAttribute('name','cardNumber');
cardNumField.setAttribute('id','cardNumber');
cardNumField.setAttribute('placeholder','Card number');
// cardNumField.setAttribute('onFocus', 'if (this.value === "Card number") { this.value = ""; }');
// cardNumField.setAttribute('onBlur',  'if (this.value === "") {this.value = "Card Number"};');

let cardNumLabel = document.createElement('label');
cardNumLabel.setAttribute('for',cardNumField.name);
cardNumLabel.setAttribute('id','cardNumberLabel');
cardNumLabelText = document.createTextNode('Must be numeric (6 digits) between each two digits - e.g. 12-35-89');
cardNumLabel.appendChild(cardNumLabelText);



form.appendChild(userNameField);
form.appendChild(userNameLabel);

form.appendChild(emailField);
form.appendChild(emailLabel);

form.appendChild(passwordField);
form.appendChild(passwordLabel);

form.appendChild(phoneField);
form.appendChild(phoneLabel);

form.appendChild(cardNumField);
form.appendChild(cardNumLabel);

// document.body.appendChild(formDiv);