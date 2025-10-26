// question#1 Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// let userInput = +prompt("Enter a positive integer")
// let number = Number(userInput)
// // // display 
// document.write("Number:" + userInput + "<br>")
// document.write("Round of the value:" + Math.round(number) + "<br>")
// document.write("Floor value:" + Math.floor(number) + "<br>")
// document.write("Ceil value:" + Math.ceil(number) + "<br>")

// question#2 Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// let userInput = prompt("Enter a negative floating point number (e.g:-2.673)")
// // convert input into number
// let number = Number(userInput)
// // / display 
// document.write("Number:" + userInput + "<br>")
// document.write("Round of the value:" + Math.round(number) + "<br>")
// document.write("Floor value:" + Math.floor(number) + "<br>")
// document.write("Ceil value:" + Math.ceil(number) + "<br>")


//question#3 Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// let userInput = prompt("Enter a number (e.g: -4 or 5)")
// // convert it into number
// let number = Number(userInput)
// // absolute value
// let absoluteValue = Math.abs(number)
// // display
// document.write("Number:" + number + "<br>")
// document.write("Absolute value:" + absoluteValue+ "<br>")

//question#4 Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// generate random dice number 1 to 6
// let dice1 = Math.floor(Math.random()*6) + 1
// let dice2 = Math.floor(Math.random()*6) + 1
// // display
// document.write("Random dice value:" + dice1+ "<br>")
// document.write("Random dice value:" + dice2+ "<br>")


//question#5 Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// generate random dice number 0 to 2
// let toss = Math.floor(Math.random()*2+ 1) 
// // if 2 -> head, if 1 ->tail
// if (toss === 1){
//     document.write("Random coin value:Heads")
// }
// else{
//     document.write("Random coin value:Tails")
// }


//question#6 Write a program that shows a random number between 1
// and 100 in your browser.
// generate random dice number 1  to 100
// let random = Math.floor(Math.random()*100) + 1 
// // display
// document.write("random number between 1 to 100:"+ random)


//question#7 Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// let userWeight = parseFloat(prompt("Enter your weight in kilograms"));

// // Show result in browser
// document.write("<h2>The weight of user is " +userWeight + " kilograms</h2>");
// Question no 8
//8. Write a program that stores a random secret number from 1 to 10 in a variable.
//Answer

// let secretNum =Math.floor(Math.random() * 10) + 1;

// //Ask the user to input a number between 1 and 10.
// let userNumber = Number(prompt("Enter a number between 1 and 10!"));

// //10. If the user input equals the secret number, congratulate the user.
// if(userNumber === secretNum){
//   alert("Congratulations! You guessed the secret number!");
// }
// else{
//   alert( Try again! The secret number was " + secretNum)
// }