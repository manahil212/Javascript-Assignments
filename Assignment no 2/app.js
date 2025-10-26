// // Question # 1 Declare a variable called username?
// var username
// console.log(username)
// // Question # 2 Declare a variable called myName & assign to it a string that represents your Full Name?
// var MyName = "Manahilwasi"
// console.log(MyName)
// // Question # 3 Write script to
// // a) Declare a JS variable, titled message.
// var titleMessege = "this is my JS variable"
// console.log(titleMessege)
// // b) Assign “Hello World” to variable message?
// var messege = "Hello World"
// // c) Display the message in alert box alert(mr)
// alert(message) 
// // Question # 4 Write a script to save student’s bio data in JS variables andshow the data in alert boxes.
// var studentName = "johne doe"
// alert(studentName)
// // age
// var studentage = "15 years old"
// alert(studentage)
// // certified
// var studentCertificate = "Certified by Mobile Application Development"
// alert(studentCertificate)
// //Question # 5 Write a script to display the following alert using one JS variable.
//  var pizza   = "PIZZA\nPIZZ\nPIZ\nPI\nP"
//  alert(pizza)
// //  Question # 6 Declare a variable called email and assign to it a string that
// // represents your Email Address(e.g. example@example.com).
// // Show the blow mentioned message in an alert box.(Hint: use
// // string concatenation)
// var email   = " manahil@example.com)."
// alert(email)
// // using string concetentation
// var email   = ("My email address is"  + email)
// alert(email)
// // Question # 7 Declare a variable called book & give it the value “A
// // smarter way to learn JavaScript”. Display the following
// // message in an alert box:
// var book = " A smarter way to learn JavaScript"
// // show messege in alert box
// alert("I am trying to learn from the book" + book)
// //Question # 8 Write a script to display this in browser through JS
// document.write("Yah! I can write the HTML content through javascript")
// // Question # 9 Store following string in a variable and show in alert andbrowser through JS
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// // on browser
// document.write(design)
// // show in alert
// alert(design)
// // show in browser (on the page)
// document.write("END")

// increement
// 1 to 10 counting
// for(let i = 1; i <= 10; i++){
//     console.log(i); 
// }

// // decreement
// // reverse counting 10 to 1
// for(let i = 10; i >= 1; i--){
//     console.log(i); 
// }

// // multiply by 2
// for(let i = 1; i <= 10; i++){
//     console.log(i*2); 
// }

// // modulus
// for(let i = 1; i <= 10; i++){
//     console.log(i%2); 
// }

// // even numbers
// // wh number jo 2 sai multiply honai baad remainder 0 ay tu even hoga
// for(let i = 1; i <= 10; i++){
// //    console.log(i);
//    if(i % 2 === 0){
//     console.log(i);
//    } 
// }

// // odd numbers
// // wh number jo 2 sai divide honai kai baad remainder dai to odd hoga
// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
//    } 

// // largest no chahiye
// let array = [20,30,40,400,900];
// // assume kerlia
// let largestNum = [0];
// for(let i = 0; i < array.length; i++){
//     // console.log(array[i]);
// if(array[i] > largestNum){
//     largestNum = array[i] 
//     // 20       =  20 
// }
// } 
// console.log(largestNum);

// // 










// var studentName = ("tayyaba ali")
// var studentNumber = ("32177896667")
// var studentSubject = ("english")
// console.log(studentSubject)
// variable vary kerna means change kerna hai
// studentName = "yumna"
// reassignmnet 
// console.log(studentName)

// alert("student name")
// document.write("student name")


// / // loop and Nested loop
// loop
// we use loops to repeat the set of instrunctions without writing the same code;
// with aloop you just write few lines and the loop handles the else repiettation automatically

// Nested loop 
// loop kai ander aik or nested loop banaiga

// // PRACTISE
// // outer loop()
//     for(let i = 1; i <= 5; i++){
//         // inner loop
//     for(let j = 1; j <= i; j++){
//       document.write("*");
//     }
//  document.write("</br>");
 
 
// }  

// // outer loop(5 rows 5 coloums)
//     for(let i = 1; i <= 5; i++){
//         // inner loop
//     for(let j = 1; j <= 5; j++){
//       document.write("*");
//     }
//  document.write("</br>");
 
// }  

// // odd numbers
//  for(let i = 1; i <= 10; i=i+2){
//         // inner loop
//     for(let j = 1; j <= i; j++){
//       document.write("*");
//     }
//  document.write("</br>");
 
// } 

// for(let i = 1; i <= 10; i++){
//         // inner loop
//     for(let j = 10; j >= i; j--){
//       document.write("*");
//     }
//  document.write("</br>");
 
// } 



// let city = prompt("Whats your city?")
// if(city === "KARACHI"){
//     console.log("Welcome to city of lights");
// }

// CONVERT INTO LOWERCASE
// let city = prompt("Whats your city?")
// if(city === "LAHORE"){
//     console.log(city.toLowerCase());
// }

// CONVERT ITNO UPPERCASE
// let city = prompt("Whats your city?")
// if(city === "lahore"){
//     console.log(city.toUpperCase());
// }

// let studentName = prompt("Enter the mostly absent student name")
// // studentName = studentName.toUpperCase()
// if(studentName === "ASIA"){
//     console.log(`${studentName} is mostly the absent in the class`);  
// }
// else{
//     console.log(`${studentName}is the punchtual student`);  
// }


// let userkhuwahish = prompt("What you wanna eat?")
// const bakeryItems = ["cakes", "pastriies", "juices" , "cookies"]
// let flag = false

// for(let i = 0; i<bakeryItems.length; i++){
//     if(userkhuwahish == bakeryItems[i]){
//       flag = true
//     }
// }
// if(flag){
//     console.log("yes available");
    
// }



// let username = "manahil"
// let final = username.slice(0,1).toUpperCase() + username.slice(1).toLowerCase()
// console.log(final);


// let monthsName = prompt("Enter the months")
// const months = ["January" , "February", "March", "April", "May", "June", "July" ,
//                 "August" , "September" ,"October" , "November" ,"December"
// ]

//  for(let i = 0; i<months.length; i++){
//     if(months[i.length] === 3){
//      document.write(months[i].slice(0,3).toUpperCase() + "<br>")
//     }
//  }



// split
// yeh string ko array mai convert kerta hai
// let word = "Hello World"
// console.log(word.split(" "));

// // join
// const colors = ["pink" , "black" ,"yellow" , " blue"]
// console.log(colors.join("  "));



// let paragraph = "i love javascript bcs it makes website interactive and dynamic.learning javascript helps me understand how web pages really work;"
// let words = paragraph.split(" ")

// for(let i = 0; i<words.length; i++){
//     let singleword = words[i];
//     words[i] = singleword[0].toUpperCase() + singleword.slice(1).toLowerCase()
// }
// let result = words.join(" ")
// alert(result)

// document.write(`<h1>Orignal Paragraph</h1><strong>${paragraph}</strong`)
// document.write("<br>")
// document.write(`<h1>Capitalized Paragraph</h1><strong>${result}</strong`)




// -------------------------------------------------------------------------------
// / chapter 28
// STRING CONVERT INTO NUMBERS 
// if we apply plus symbol; then it change to number

// let str = +"2323433424"
// check type
// // console.log(typeof str);


// 1st method(parseInt(string ko number mai convert kerdia)) 
// let str = +"2323433424.6786756456"(decimal kai baad ki value
// ko yeh parseint ignore kerdeta hai wh ni likhta)
// let parsed = parseInt(str)
// console.log(parsed);
// console.log(typeof parsed);

// 2nd method (parsefloat{yeh decimal kai baad ki value 
// bhi show kerta hai but is mai bhi roundof ni kerta})
// let str = "56765.78625"
// let parsed = parseFloat(str)
// console.log(parsed);
// console.log(typeof parsed);

// 3rd method(number method)
// let str = "56765.78625"
// let number = Number(str)
// console.log(number);
// console.log(typeof number);

// NUMBER CONVERT INTO STRING
// let str = 90
// 1st method (concat)
// console.log(str + " ");
// console.log(typeof (str + " "));

// 2nd method (tostring)
// let stringed = str.toString()
// console.log(typeof (stringed));

// / 2nd method (tostring)
// let stringed1 = String(str)
// console.log(typeof (stringed1));

// 786278346786.toString()
// string(78678686)



// -------------------------------------------------------------------------------
// CHAPTER 30
// CONTROLLONG THE LENGTH OF DECIMALS NUMBERS
// let number = 23131132.7865757
// is ki length ko fix kernai jarahai hai k point
//  kai baad kitni values chayie by the help oof length
// let fixed = number.toFixed(2)
// console.log(fixed);

// agar hm is ko empty chorai tu yeh ignore kerdasiga point 
// kai baad ki value or round of kerdiaga
// let fixed1 = number.toFixed()
// console.log(fixed1);



// ----------------------------------------------------------------------------------------
// CHAPTER 31
// GETTING THE CURRENT DATE AND TIME
// constructor (new){new ka keyword hai ye}

// date and time
// let today = new Date()
// console.log(today);
// console.log(typeof today);

// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getDate());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());


// TASK 1(how to finf your birth year)
// let userAge = +prompt("Enter your age")
// let currentYear = new Date().getFullYear()
// let birthYear = currentYear - userAge

// console.log("You were  born in " + birthYear);


// Task 2(find current month)
// let today = new Date()
// let currentmonth = today.getMonth()

// let months = ["january" , "feburary" , "march",
//                "april" , "may ", "june", "july ","august"
//               ,"september" ,"october ", "november" ,
//                "december"]
// document.write(months[currentmonth])

// TASK 3 (get day)
// let today = new Date()
// let currentDay = today.getDay()
// let days = ["Sunday","Monday" ,"Tuesday" , "Wed" , "Thurs" , "Fri" ,"Sat" ]
// document.write(days[currentDay])


// TASK 4(GET RAMADAN DATE )
// let today = new Date()
// let ramadanDate = new Date("17 feb 2026")

// let diff = ramadanDate - today

// let sec = Math.floor(diff/1000)
// let min = Math.floor(sec/60)
// let hours = Math.floor(min/60)
// let  diffDays= Math.floor(diff / (1000 * 60 * 60 *24))
// let week = Math.floor(diffDays/7)


// document.write(`<h1>Remaining weeks in ramadan:${week} <br/>
//                Remaining days in ramadan:${diffDays}<br/>
//                Remaining hours in ramadan:${hours}<br/>
//                Remaining minutes in ramadan:${min}<br/>
//                Remaining seconds in ramadan:${sec}</h1>`)


// ----------------------------------------------------------------------------------------------------
// CHAPTER 35 FUNCTION
// HOW TO GET DATE
// parameter(jaha data store hoga yeh recive keraiga)
// function getDate(){
//     let today = new Date()
//     console.log(today.getDate());
// }
// // argument(jaha sai data pass kerrahai hai)
// getDate()


// // HOW TO GET TIME
// function getTime(){
//     let today = new Date()
//     console.log(today.getHours());
// }
// getTime()

// // HOW TO GET YEAR
// function getYear(){
//     let today = new Date()
//     console.log(today.getFullYear());
// }
// getYear()


// SUM OF NUMBERS
// 1ST MEETHOD
// function number(number){
//     document.write(`${number}`)
// }
// number(3 + 2)


// 2ND METHOD
// function number(number1 , number2){
//     document.write(`${number1 + number2}`)
// }
// number(3 , 2)


// HOW TO SUM OF NUMBERS BY THE HELP OF INPUT FIELD
// function sum(){
//     firstNumber = Number(document.getElementById("firstNum").value)
//     secondNumber = Number(document.getElementById("secondNum").value)

//     let total = firstNumber + secondNumber
//     let result = document.getElementById("result")
//     result.innerText = `The sum is ${total}`
// }


// CONVERT INTO LOWERCASE

// function text(){
//     let text = (document.getElementById("firstText").value) 
//     let lower = text.toLowerCase()
//     let final = document.getElementById("final")
//     final.innerText = `${lower}`
// }


// CONVERT INTO UPPERCASE
// function text(){
//     let text = (document.getElementById("secondText").value)
//     let upper = text.toUpperCase()
//     let final = document.getElementById("final")
//     final.innerText = (`${upper}`)
// }


// MULTIPLE CASES
// UPPERCASE
function convert(type){
    let text = document.getElementById("some").value
    let result
if(type === "upper"){
    result =text.toUpperCase()
}
if(type === "lower"){
    result =text.toLowerCase()
}
if(type === "capitalize"){
    result =text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
if(type === "bold"){
    result =`<strong>${text}</strong>`
}
if(type === "italic"){
    result =`<em>${text}</em>`
}
document.getElementById("result").innerHTML = result
}

