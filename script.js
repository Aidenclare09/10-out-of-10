// Variables for uppercase/lowercase letters, symbols and numbers.
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbol = [' ','!','@','#','$','%','^','&','*','(',')','{','}','[',']','-','_','+','=','?','/','|','~',];
var number =  ['0','1','2','3','4','5','6','7','8','9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// First prompt for password criteria 
function generatePassword() {

  // First prompt asking user to decide the length of password
  var numberlength = Number(prompt('Please choose a password length of 8 to 128 characters'));

  // If the user does not choose a number, an error message will be displayed
  if(isNaN(numberlength)) {
    alert("Please enter numbers only");

  }
  // If the user clicks cancel a message will be displayed
  if (numberlength === null) {
    alert("Error. Password must contain 8 to 128 characters");

  }

  // If the user puts a number equal to or less than 7, user will see cancel message
  if (numberlength < 8) {
    alert("Click 'okay' to restart");
    return null;

  }

  // If the user puts a number equal to or greater than 129, user will see error message
  if (numberlength > 128) {
    alert('Password length must less than 129 characters');
    return null;
}

// second prompt for password criteria 
var special = comfirm("If you want to include symbols select 'Okay' and if not select 'Cancel' ")
if (!special) {
alert("Password will not contain any symbols");

}

// third prompt for password criteria 
var numbersymbols = confirm("If you want to include numbers select 'Okay' and if not select 'Cancel' ")
if (!numbersymbols) {
  alert("Password will not contain any numbers");
  
}

// fourth prompt for password criteria 
var uppercase = confirm("If you want to include uppercase letters select 'Okay' and if not select 'Cancel' ")
if (!upcase) {
  alert("Password will not contain any Uppercase letters");
  
}

// fifth prompt for password criteria 
var lowercase = confirm("If you want to include lowercase letters select 'Okay' and if not select 'Cancel' ")
if (!lowcase) {
  alert("Password will not contain any Lowercase letters");
  
}

// If user does not select any criteria an error message will occur
if (!special && !numbersymbols && !upcase && !lowcase) {
 alert("Error. You must choose at least one criteria for your password");
 return null;

}

//created empty array for pushed criteria confirmed by user
var comfirmcriteria = [];

// pushing confirmed symbol characters to emtpty array
if (special === true){
special = comfirmcriteria.push(symbol);

}

// pushing confirmed number characters to emtpty array
if (numbersymbols === true){
  numbersymbols = comfirmcriteria.push(number);
  
}

// pushing confirmed uppercase characters to emtpty array
if (upcase === true){
  upcase = comfirmcriteria.push(uppercase);
  
}

// pushing confirmed lowecase characters to emtpty array
if (lowcase === true){
  lowcase = comfirmcriteria.push(lowercase);
  
}

// joining the arrays and turning them into strings 
var strings = comfirmcriteria.join("");
  
// generate the password using all criteria selected by user
var finalpass = "";

for (var i = 0; i < numberCheck; i++) {
    finalpass += strings.charAt(Math.floor(Math.random() * strings.length));

}
  
  return finalpass;

}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
