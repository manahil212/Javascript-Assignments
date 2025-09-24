// Question # 1 Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// let cityName = prompt(`Enter city name`)
// alert( "Welcome to city of lights");
// Question # 2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// let gender = prompt(`Enter gender male/female`)
// if(gender==="male"){
//     alert("Good Morning Sir");
// }
// else if(gender ==="female"){
//      alert("Good Morning Ma'am ");
// }
// else{
//     alert("Good Morning")
// }
//Question # 3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// let color = prompt(`Enter color of road traffic signal`)
// if(color ==="Red"){
//     alert("Must stop");
// }
// else if(color ==="Yellow"){
//      alert("Ready to move");
// }
// else if(color ==="Green"){
//      alert("Move now.");
// }
// else{
//     alert("invalid color entered")
// }
// Question # 4 Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// let fuel = +prompt("Enter remaining fuel in car (in litres)")
// if current fuel is less than 0.25 litres
// if(fuel <"0.25"){
//  alert("Please refill the fuel in your car");
// }
// else{
//     alert("fuel is not enough")
// }

// else{
//     alert("You have enough fuel");
// }
// //Question # 5 Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.
// // a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true")};
// pre increement kai baad value increase hoi tu 5 ho gaya 5===5 tu yeh true hai
// // b.
//  let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true")
// }
// likin pehlai 82 === 83 hai then vlue increase hoi tu 83===83 hogai tu true hai
// c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// c++ post-increment 12 ===13 false , c= 13 ho gaya (no alert)
// if (c === 13){
// alert("condition 2 is true");
// }
// true (alert "condition 2 is true")
// if (++c < 14){
// alert("condition 3 is true");
// }
// c++ = 14 compare 14 < 14 false no alert
// if(c === 14){
// alert("condition 4 is true");
// }
// true 
// condition 2 and condition 4 is true
//  .d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals")};
// Explanation : totalcost = 20222 + 2000 =22000
// labourcost + materialcost = 22000
// comparison true hai, isliye alert "the ccost equals " show hoga
// e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// pehla true chalega alert true hoga
// dusra false labhi ni chalaiga false alert show ni hoga
// f.
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
//question 6 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// take input marks for 3 subjects
// let sub1 = +prompt("Enter marks for subject 1 (outof 100)")
// let sub2 = +prompt("Enter marks for subject 2 (outof 100)")
// let sub3 = +prompt("Enter marks for subject 3 (outof 100)")

// // total marks
// let totalMarks = 300
// // calculate obtained marks
// let obtainedMarks = sub1 + sub2 + sub3
// let percentage = (obtainedMarks/totalMarks) * 100
// // variables for grade and remarks
// let grade, remarks;
// if(percentage >=80){
//     grade =" A"
//   remarks="excellent"

// }
// else if (percentage >=70){
//     grade =" B"
//     remarks = "Good"
// }
// else if (percentage >=60){
//     grade =" C"
//     remarks = "you need to improve"}
// else{
//     grade = "fail"
//     remarks = "sorry"
// }
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// document.write(`<h1><strong>Marks Sheet</h1><strong>
//                <b>Totalmarks :</b> ${totalMarks}<br>
//                 <b>Marks obtained :</b> ${obtainedMarks}<br>
//                 <b>Percentage :</b> ${percentage}<br>
//                  <b>Grade :</b> ${grade}<br>
//                   <b>Remarks :</b> ${remarks}<br>`)
                 
//  7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// let secretNumber = 4
// Prompt user to guess the secret number.
// let guess = +prompt("guess the secret number (1 to 10):")
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// if(guess === secretNumber){
//      alert("Bingo! Correct answer")
// }
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// else if(guess+1 === secretNumber){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("try again")
// }
// question 8 Write a program to check whether the given number is
// divisible by 3.
// let num = +prompt("Enter anumber to check if its divisible by 3")
// if(num % 3 === 0){
//     alert(`${num}is divisible by 3`)
// }
// else{
//     alert(`${num} is not divisible by 3`)
// }
// question 9 Write a program that checks whether the given input is an
// even number or an odd number.
// let number = +prompt("Enter to check even / odd number ")
// if(number % 2 ===0){
//     alert(`${number} is an even number`)
// }
// else{
//     alert(`${number} is an odd number`)
// }
// question 10 Write a program that takes temperature as input and
// shows a message base
// let temprature = +prompt("Enter a temprature")
// a. T > 40 then “It is too hot outside.”
// if(temprature > 40){
    // alert("It is too hot outside")
// }
// b. T > 30 then “The Weather today is Normal.”
// else if(temprature > 30){
    // alert("The Weather today is Normal")
// }
// c. T > 20 then “Today’s Weather is cool.”
// else if(temprature > 20){
    // alert("Today’s Weather is cool")
// }
//d .T > 10 then “OMG! Today’s weather is so Cool.”
// else if(temprature > 10){
    // alert("OMG! Today’s weather is so Cool")
// }
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// Take input from user
// let num1 = +prompt("Enter the first number")
// let num2 = +prompt("Enter the second number")
// let operation = +prompt("Enter operation (+, _, *, /, %)")

// let result;
// check operation using if statement
// if(operation === "+"){
//     result = num1 +num2
// }
// if(operation === "-"){
//     result = num1 - num2
// }
// if(operation === "*"){
//     result = num1 * num2
// }
// if(operation === "/"){
//     result = num1 / num2
// }
// if(operation === "%"){
//     result = num1 % num2
// }
// // show result
// alert(`Result : ${result}`)
