// question no 1 Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let number1 = 3
let number2 = 5
let sum = number1 + number2
// show result in browser
document.write(`<strong><h2> Sum of  ${number1} + ${number2} is ${sum}<strong><h2>`);
// question no 2 Repeat task1 for subtraction, multiplication, division &
// modulus.
// subtraction
let subtract = number1 - number2;
document.write(`<h2> Subtract of  ${number1} - ${number2} is ${subtract}</h2>`);
// multiplication
 let multiply = number1 * number2;
 document.write(`<h2> Multiply of  ${number1} * ${number2} is ${multiply}</h2>`);
//  division
 let division = number1 / number2;
 document.write(` <h2>Division of  ${number1} / ${number2} is ${division}</h2>`);
// modulus
 let modulus = number1 % number2;
 document.write(`<h2> Modulus of  ${number1} % ${number2} is ${division}</h2>`);
//  question 3 Do the following using JS Mathematic Expressions
// Answer
// a. Declare a variable.
let num;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// Answer
document.write(`<h2>Value after variable declaration is:${num}</h2>`);
// c. Initialize the variable with some number.
 num =5;
//  d. Show the value of variable in your browser like “Initial value: 5”.
document.write(`<h2>Initial value is ${num}</h2>`);
// e. Increment the variable.
num++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write(`<h2>Value after increment is ${num++}</h2>`);
// g. Add 7 to the variable.
num = num+7
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write(`<h2>Value after addition is ${num}</h2>`);
// i. Decrement the variable.
num = num--
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write(`<h2>Value after decrement is ${num}</h2>`);
// k. Show the remainder after dividing the variable’s valueby 3.
let remainder = num % 3
// l. Output : “The remainder is : 0”.
document.write(`<h2>The remainder is ${remainder}</h2>`);
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
let ticketPrice = 600
let numberOfTickets= 5
let totalCost = ticketPrice * numberOfTickets
document.write(`<h2>Total cost to buy ${numberOfTickets} tickets to a movie is ${ticketPrice} PKR`)
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
let number =4
let i = 1
document.write(`<h1>Multiplication table of  ${number}<h1>`)
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
document.write(`${number} * ${i} = ${number*i} <br>`)
i++
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
let celsius = 25;
// /b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let fahreinheitresult =(celsius * 9/5)  + 32
document.write( `<h1><strong>The Temperature Converter</strong></h1>`)
document.write(`${celsius}°C is ${ fahreinheitresult }°F`)
//c. Now store a Fahrenheit temperature into a variable.
let fahrenheit = 70;
//d. Convert it to Celsius & output “NNoF is NNoC”.
let celsiusResult = (fahrenheit-32 )*5/9;
document.write(`<h2>${fahrenheit}°F is ${celsiusResult}°C</h2>`)
//Questin no 7
//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//Answer
//a. Price of item 1
let priceOfItem1 = 650
//b. Price of item 2
let priceOfItem2 = 100
// c. Ordered quantity of item 1
let quantityOfItem1 = 3
// c. Ordered quantity of item 2
let quantityOfItem2 = 7
// e. Shipping charges
let shippingCharges = 100
// calcultae total cost
let total = (priceOfItem1 * quantityOfItem1) +(priceOfItem2 * quantityOfItem2) + shippingCharges
console.log(total);
// show in browser
document.write(`<h1>Shopping Cart<h1>`) 
document.write(`Price of item1 is ${priceOfItem1} <br>`) 
document.write(`quantity of item1 is ${quantityOfItem1} <br>`) 
document.write(`Price of item2 is ${priceOfItem2} <br>`) 
document.write(`quantity of item2 is ${quantityOfItem2} <br>`) 
document.write(`shipping charges is ${shippingCharges} <br>`) 
document.write(`total cost of your order is ${total} <br>`) 
// //Question no 8
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
//Answer
// Store total marks & obtained marks
document.write(`<h1>Mark sheet<h1>`) 
// total marks
let totalMarks = 980
// marks obtained
let marksObtained = 804
//compute percentage
let percentage = (marksObtained/totalMarks)*100
// show result in browser
document.write(`Total marks : ${totalMarks } <br>`) 
document.write(`obtain marks : ${marksObtained  }<br>`) 
document.write(`total percentage: ${percentage}%<br>`) 
// Question no 9
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
//Answer

document.write(`<h1>Currency in PKR<h1>`)
// Currency in PKR 
let totalPKR = (10*104.80 ) + (25*28 );
document.write(`Total currency in PKR is ${totalPKR}`)
//Question no 10
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//Answer
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
let value = 5
let airthmatic = ((value +5)*10/2)
console.log(airthmatic);
document.write(`<h1>Airthmatic<h1>`)
document.write(`${airthmatic}`)
// Question no 11
//11. The Age Calculator: Forgot how old someone is? Calculate it!
//Answer
//a. Store the current year in a variable.
let currentYear = 2025
// b. Store their birth year in a variable.
let birthYear =2002
// c. Calculate their 2 possible ages based on the stored
// values.
let age1 =  currentYear-birthYear;
let age2 = age1-1;
console.log( age1);
console.log(age2);
//show in browser
document.write(`<h1>Age calculator<h1>`)
document.write(`current year is ${currentYear}<br>`)
document.write(`Birth year is ${birthYear}<br>`)
document.write(`your age is ${age2}`)
//Question no 12
//12. The Geometrizer: Calculate properties of a circle.a. Store a radius into a variable.
//Answer
//a. Store a radius into a variable.
let radius = 20
//b. Calculate the circumference based on the radius,
let circumferenceOfACircle = (2*3.14)*radius;
//Calculate the area based on the radius,
let areaOfACircle = 3.14*( radius* radius);
console.log(areaOfACircle);
document.write(`<h1>The geometrizer</h1>`)
document.write(`Radius of circle is ${radius}<br>`)
document.write(`circumference is: ${circumferenceOfACircle}<br>`)
document.write(`The area is : ${areaOfACircle}`)
// //Question no 13
//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//Answer
//a. Store your favorite snack into a variable
let favouriteSnack = chocolatechip
// b. Store your current age into a variable.
let currentAge = 22
// c. Store a maximum age into a variable.
let maxAge = 65
// d. Store an estimated amount per day (as a number).
let perDay = 3
// e. Calculate how many would you eat total for the rest of
// your life.
let totalSnacks =(maxAge - currentAge) * 365 * perDay;
console.log( totalSnacks );

//show in browser
document.write(`<h1>The Lifetime Supply Calculator</h1>`);
document.write(`Favorite Snack: ${favouriteSnack} <br>`);
document.write(`Current Age: ${currentAge} <br>`);
document.write(`Estimated Maximum Age: ${maxAge} <br>`);
document.write(`Amount of snacks per day: ${perDay} <br><br>`);
document.write(`<strong>You will need to ${totalSnacks} ${favouriteSnack} to last you until the ripe old age of ${maxAge}</strong>`);
document.write(`<center><h1>-- END -- </h1> </center> `)






