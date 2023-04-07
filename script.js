// Assignment code here
function generatePassword(){
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "^", "&", "*", "+", "-", "/"]

lengthofPassword = prompt("Please choose between 8-128 characters for you password.");
if (lengthofPassword < 8 || lengthofPassword > 128) {
  return "Please enter the correct number of characters.";
}
else {
  alert("Your password will be " + lengthofPassword + " characters long.");
  
}
includesLowercase = confirm("Do you want to include lowercase characters?");
if (includesLowercase) {
   alert ("Your password will include lowercase characters.");
}

includesUppercase = confirm("Do you want to include uppercase letters?");
if (includesUppercase) {
  alert ("Your password will include uppercase characters.");
}

includesNumbers = confirm("Do you want to include any numbers?");
if (includesNumbers) {
  alert ("Your password will include numbers.");
}

includesSpecial = confirm("Do you want special characters?");
if (includesSpecial) {
  alert ("The password will include special characters.");
}

if (includesLowercase === false && includesUppercase === false && includesNumbers === false && includesSpecial === false) {
  return "You must select one character type.";
};
var choices = [];
if (includesLowercase) {
  choices = choices.concat(lowercase);
}
if (includesUppercase) {
  choices = choices.concat(uppercase);
}
if (includesNumbers) {
  choices = choices.concat(number);
}
if (includesSpecial) {
  choices = choices.concat(special);
}
 let finalPassword = ""
for (let i = 0; i < lengthofPassword; i++) {
     let rng =[Math.floor(Math.random() * choices.length)];
  finalPassword = finalPassword + choices[rng];
}
return finalPassword 
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
