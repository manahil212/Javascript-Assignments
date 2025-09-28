//1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
let character = prompt("Enter a character")
let ascii = character.charCodeAt(0)
if(ascii >= 48 && ascii <= 57){
  alert("The input is a number")
}
if(ascii >= 65 && ascii <= 90){
  alert("The input is an uppercase letter")
}
if(ascii >= 97 && ascii <= 112){
  alert("The input is an lowercase letter")
}
else{
  alert("The input is neither a number nor a letter")
}












//question#2 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// let num1 = +prompt("Enter first integer")
// let num2 = +prompt("Enter second integer")

// // if(num1 > num2){
//     alert(`The larger number is ${num1}`)
// }
// if(num2 > num1){
//     alert(`The larger number is ${num2}`)
// }
// else{
//     alert("Both numbers are equal")
// }

//question#3 Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// let num = +prompt("Enter a number")
// if(num > 0){
//     alert("The number is positive")
// }
// if(num < 0){
//     alert("The number is negative")
// }
// else{
//     alert("The number is zero")
// }

//question#4 Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// let char = prompt("Enter a vowel")
// if(char.length === 1){
//     if(char=== "a" || char=== "e" ||char=== "i" ||char=== "o" ||char=== "u"){
//     }
//     alert("True")
// }
// else{
//     alert("False")
// }

// question#5 Write a program that
// a. Store correct password in a JS variable.
let originalPassword = "manahil";
// b. Asks user to enter his/her password
let userPassword = prompt("Enter the password");
// Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”

if(!userPassword){
  alert("Please enter your password")
}
// / ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
if(userPassword === originalPassword){
  alert("Correct! The password you entered matches the original password")
} 
else{
  alert("incorrect password")
}

// question#6 This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

 var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
// curly brackets missing
// close kerkai likhana tha

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
let time = +prompt("Enter time in 24-hour format (e,g 1900 for 7pm")
if(time >= 0 && time < 1200){
  alert("Good Morning!")
}
else if(time >= 1200 && time < 1700){
  alert("Good Afternoon!")
}
else if(time >= 1700 && time < 2100){
  alert("Good Evening!")
}
else if(time >= 2100 && time < 2359){
  alert("Good Night!")
}
else{
  alert("Invalid time entered")
}


