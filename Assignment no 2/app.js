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
for(let i = 1; i <= 10; i++){
    console.log(i); 
}

// decreement
// reverse counting 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i); 
}

// multiply by 2
for(let i = 1; i <= 10; i++){
    console.log(i*2); 
}

// modulus
for(let i = 1; i <= 10; i++){
    console.log(i%2); 
}

// even numbers
// wh number jo 2 sai multiply honai baad remainder 0 ay tu even hoga
for(let i = 1; i <= 10; i++){
//    console.log(i);
   if(i % 2 === 0){
    console.log(i);
   } 
}

// odd numbers
// wh number jo 2 sai divide honai kai baad remainder dai to odd hoga
for(let i = 1; i <= 10; i+=2){
    console.log(i);
   } 

// largest no chahiye
let array = [20,30,40,400,900];
// assume kerlia
let largestNum = [0];
for(let i = 0; i < array.length; i++){
    // console.log(array[i]);
if(array[i] > largestNum){
    largestNum = array[i] 
    // 20       =  20 
}
} 
console.log(largestNum);

// 










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



let paragraph = "i love javascript bcs it makes website interactive and dynamic.learning javascript helps me understand how web pages really work;"
let words = paragraph.split(" ")

for(let i = 0; i<words.length; i++){
    let singleword = words[i];
    words[i] = singleword[0].toUpperCase() + singleword.slice(1).toLowerCase()
}
let result = words.join(" ")
alert(result)

document.write(`<h1>Orignal Paragraph</h1><strong>${paragraph}</strong`)
document.write("<br>")
document.write(`<h1>Capitalized Paragraph</h1><strong>${result}</strong`)
