//question #1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// take user input
// let firstName = prompt("Enter your first name?")
// let lastName = prompt("Enter your last name?")

// // merge them into new variable
// let fullName = firstName + "" + lastName

// // greet the user
// alert("Hello, " + fullName + " !Welcome! ")

//question #2  Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// let favouritePhone = prompt("Enter your favourite mobilephone model?")
// let lengthOfInput =  favouritePhone.length

// document.write("My favourite phone is:" + favouritePhone + "<br>")
// document.write("Length of string:" + lengthOfInput +"<br>")


// question#3 Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// let word = "Pakistani"

// // find the index of letter n
// let index = word.indexOf("n")

// // show in browser
// document.write("String:" + word+ "<br>")
// document.write("index of 'n':" + index)

//question#4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// let word = "Hello World"
// // find the index of last index of l
// let lastIndex = word.lastIndexOf("l")

// // // show in browser
// document.write("String:" + word+ "<br>")
// document.write("Last index of 'l':" + lastIndex)

// question#5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// let word = "Pakistani"
// // finf th character at index 3
// let charAtThirdIndex = word.charAt(3)

//  // // show in browser
// document.write("String:" + word+ "<br>")
// document.write("Character at index '3 ':" + charAtThirdIndex )


// Repeat Q1 using string concat() method.
// take user input
// let firstName = prompt("Enter your first name?")
// let lastName = prompt("Enter your last name?")

// // // merge them into conacat method
// let fullName = firstName.concat("",lastName)

// // // greet the user
// alert("Hello, " + fullName + " !Welcome! ")


//question#7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// let city = "Hyderabad"
// // replace hyder with islam
// let newCity = city.replace("Hyder" , "Islam")
// // browser
//  document.write("City:" + city+ "<br>")
// document.write("After replacement:" + newCity )

//question# 8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// let messege = "Ali and Sami are best friends. They play cricket and football together."
// // replace
// let newMessege = messege.replace(/and/g,"&")
// // brwoser
// document.write("Messege:" + messege +"<br>" )
// document.write("After replacement:" + newMessege )


//question#9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// let str = "472"
// // convert string into number
// let num = Number(str)
// // display values and types
// document.write("Value:" + str +"<br>" )
// document.write("Type:" +  typeof str +"<br><br>")

// document.write("Value:" + num +"<br>" )
// document.write("Type:" +  typeof num +"<br><br>")

//question#10 Write a program that takes user input. Convert and
// show the input in capital letters.
// let userInput = prompt("Enter your favourite snack (e.g.peanuts)")
// // convert the input to capital letters
// let upperCaseInput = userInput.toUpperCase()
// // display
// document.write("User input:" + userInput +"<br>" )
// document.write("Upper Case:" +   upperCaseInput)

// question#11 Write a program that takes user input. Convert and
// show the input in title case.
// take user input
// take user input
// let user = prompt("Enter any word:");

// // convert to title case (first letter capital, rest small)
// let titleCase = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();

// // display result

// document.write(`<h1>-- Title case -- </h1>  `);
// document.write("User Input: " + user + "<br>");
// document.write("Title Case: " + titleCase +"<br> <br>");

//question#12 Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
let number = 35.36
// convert into string
let numString = number.toString()
// remove the dot
let result =numString.replace("." , "")
// display result
document.write("Number: " + number + "<br>");
document.write("Result: " + result + "<br>");

//question#13 Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

let username = prompt("Enter your user name");
let isValid = true;

for (let i = 0 ; i < username.length ; i++){
let charCode = username.charCodeAt(i); // get ASCII code

 // check if it matches any invalid symbol code
  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break; // stop checking further
  }
}

// display result
if (!isValid) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  alert("Username saved successfully: " + username);
}

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// take user input
let Input = prompt("Welcome to ABC Bakery! What do you want to order?");

// convert both user input and array items to lowercase for case-insensitive comparison
let item = Input.toLowerCase();

// check if item exists in the array
let isFound = false

let indexNumber = -1; // store index if found


for(let i = 0 ; i < A.length ; i++){
if(A[i].toLowerCase() === item){
isFound = true
indexNumber = i
break;
    }
}
// show result
if (isFound) {
  alert(Input + " is available at index " + indexNumber + " in our bakery.");
} else {
  alert("We are sorry, " + Input + " is not available in our bakery.");
}

//question#15 Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// let userPassword = prompt("Enter the password")
// // check if password is empty
// if(!password){
//     alert("Please enter your password")
// }
// // // Check if password length is at least 6 characters
//  else if(password.length < 6){
//   alert("Password must be at least 6 characters long.");
// }
// // /  check if first character is a number
// else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57 ){
//     alert("Password cannot start with a number.");
// }
// // check if it contains both letters and numbers
// else {
//   let hasLetter = false;
//   let hasNumber = false;

// for(let i = 0 ;i < password.length ; i++){
//   let code = password.charCodeAt(i);


//     // A–Z → 65–90
//     // a–z → 97–122
// if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       hasLetter = true;
//     }
//      // 0–9 → 48–57
//  else if (code >= 48 && code <= 57 ){
//   hasNumber = true
// }
// }}

// //Question no 16
// //16. Write a program to convert the following string to an
//Answer

let university = "University of Karachi";

// display each element on a new line
let universityArray = university.split("");

// display each element on a new line

document.write(`<h1>--"University of Karachi" -- </h1>  `);
for(let i = 0 ; i < universityArray.length ; i++){
  document.write(`${universityArray[i]}<br>`);
}

//Question no 17
//17. Write a program to display the last character of a user input.


let character = prompt("Enter any word:");
let lastChar = character.charAt(character.length - 1);

//show in browser
document.write(`<h1>--Last character of user Input -- </h1>  `);
document.write("User input: " + character + "<br>");
document.write("Last character: " + lastChar);


//Question no 18
//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
//Answe

let sentence = "The quick brown fox jumps over the lazy dog";

// convert to lowercase (so 'The' and 'the' both match)
let lowerSentence = sentence.toLowerCase();

// split text by word "the"
let splitSentence = lowerSentence.split("the");

// number of occurrences = (length - 1)
let count = splitSentence.length -1;


// show result

document.write(`<h1>--Sentence -- </h1>  `);
document.write("Text: " + sentence + "<br>");
document.write("Number of occurrences of 'the': " + count);


