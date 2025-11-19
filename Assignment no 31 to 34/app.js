// question#1 Write a program that displays current date and time in
// your browser.
// let now = new Date()
// // display the current date and time
// document.write(now + "</br>");


//  question#1 Write a program that alerts the current month in words.
// For example December.
// let today = new Date()
// let currentMonth = today.getMonth()
// let months  =   ["january" ,"february" , "march", "april" , "may ", "june", "july ","august",
//               "september" ,"october ", "november" ,
//                "december"]
// document.write(months[currentMonth])


//question#3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// let today = new Date()

// // arrays
// let days = ["Sunday","Monday" ,"Tuesday" , "Wednesday" , "Thursday" , "Friday" ,"Saturday" ]

// // current days name
// let dayName = days[today.getDay()]
// // get first three letters
// let shortDay = dayName.slice(0,3)

// // show in alert
// alert(shortDay)


//question#4 Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// get current date
// let today = new Date()
// // get numeric day 0 = sunady , 6 = saturday
// let day = today.getDay()

// if(day === 0 || day ===6){
//     alert("It's Fun day!")
// }
// else{
//     alert("It's working day!")
// }

// question#5 Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// let today = new Date()
// let date = today.getDate()
// if(date < 16){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

//question#6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// let date = new Date()
// let millisecondsSince1970= date.getTime() 

// let minutesSince1970=  millisecondsSince1970 / (1000*60)
// // show in browswer
// document.write(`Current Date:${date}</br>`)
// document.write(`Elapsed milliseconds since jan 1,1970: ${millisecondsSince1970}</br>`)
// document.write(`Elapsed minutes since jan 1,1970: ${minutesSince1970}</br>`)

//question#7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// let now = new Date()
// // current hour
// let hours = now.getHours()
// // xcheck if its before or after noon
// if(hours < 12){
//     alert("It's AM")
// }else{
//    ( "It's PM")
// }

//question#8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// let laterDate = new Date(2020,11,31)
// // show the result
// document.write(`Later date: ${laterDate}`)

//question#9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015.
// create a date object for 1st ramadan(june 18,2015)
// let ramadanStart = new Date(2015,5,18)

// // create a date object for the current date
// let today = new Date()

// // calculate the differnece in milliseconds
// let diff = today - ramadanStart

// // convert milliseonds to days
// let passedDays = Math.floor(diff/(1000*60*60*24))

// // show results
// document.write(`passed days in ramadan`)
// document.write(` Current Date:${today}</br>`)
// document.write(`Ramadan Date Date:${ramadanStart}</br>`)
// document.write(`${passedDays} days have passed since 1st ramadan 2015`)


//Question no 10
//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2025.
//Answer

// Create a Date object for the beginning of 2025
let beginningOf2025 = new Date (2025,0,1);

// Create a Date object for the current date
let referenceDate = new Date();

// Calculate the difference in milliseconds
let difference = referenceDate - beginningOf2025;

// Convert milliseconds to seconds
let secondsElapsed = Math.floor(difference/1000);

// Show result in browser
document.write(`<h2>Seconds Elapsed Since Beginning of 2025</h2>`);
document.write(`Reference Date: ${referenceDate}<br>`);
document.write(` <b>${secondsElapsed}</b> seconds had passed since beginning of 2025`);

//Question no 11
//11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
//Answer

 // 1. Create a Date object for the current date and time
 let currentTime = new Date();
let currentDateAndTime = new Date();

// 2. Extract the current hour
let currentHour = currentTime.getHours();

// 3. Reset the date object one hour ahead
currentDateAndTime.setHours(currentHour + 1);

// 4. Display the updated date and time in browser

  document.write(`<h2>Current Date: ${currentTime}</h2>`);
  document.write(`1 hour ahead:${currentDateAndTime}`);
// 3. Reset the date object one hour ago
currentDateAndTime.setHours(currentHour - 1);
document.write(`<h2>Current Date: ${currentTime}</h2>`);
  document.write(`1 hour ago it was:${currentDateAndTime}</h2>`);

  //Question no 12
  //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
  //Answer
let current = new Date();
  // Create a Date object for current date
  let newDate = new Date ();
  
// Move date 100 years back
newDate.setFullYear(newDate.getFullYear()-100);
// Show result in alert box
alert(`${current}`);
alert("Date 100 years back it was: " + newDate);
//Show in browser
document.write(`<h2>Current and 100 years back  Date:</h2>`);
document.write(`${current} <br>`);
document.write("Date 100 years back it was: " + newDate + "<br>");


//Question no 13
//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
//Answer

let age = new Date();
let userAge = Number(prompt("what's your age? "));
let birthYear =  age.getFullYear() - userAge;

//show in browser
document.write(`<h2>User age and birth year:</h2>`);
document.write(`Your age is:${userAge} <br>`)
document.write(`Your birth year is${birthYear}`);

//Question no 14
//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//Answer

//a. Customer Name
let customerName = prompt("Enter custumer Name");

//b. Current Month
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonthName = months[new Date().getMonth()];

//c. Number of units
let  numberOfUnits = Number(prompt("Enter number of units"));

//d. Charges per unit
let chargesPerUnit = Number(prompt("Enter charges per units"))

//e. Net Amount Payable (within Due Date)
let netAmountPayable = numberOfUnits * chargesPerUnit;

//f. Late Payment Surcharge
let latePaymentSurcharge = 350;

//g. Gross Amount Payable (after Due Date)
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//show in browser
document.write(`<h1>--K - Electric Bill  -- </h1>  `);
document.write(`<b>Customer Name:</b> ${customerName} <br>`);
document.write(`<b>Month:</b> ${currentMonthName} <br>`);
document.write(`<b>Number of Units:</b> ${numberOfUnits.toFixed(2)} <br>`);
document.write(`<b>Charges per Unit:</b> ${chargesPerUnit.toFixed(2)} <br><br>`);

document.write(`<b>Net Amount Payable (within Due Date):</b> ${netAmountPayable.toFixed(2)} <br>`);
document.write(`<b>Late Payment Surcharge:</b> ${latePaymentSurcharge.toFixed(2)} <br>`);
document.write(`<b>Gross Amount Payable (after Due Date):</b> ${grossAmountPayable.toFixed(2)} <br>`);

