//question 1 Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// Ansswer
document.write(`<h2>Result</h2><br>`)
// declare a variable
let a = 10
// show in browser
document.write(`<h2><strong>The value of a is: ${a}</strong></h2>`)
document.write(`----------------------------------------------<br>`) 
// pre increement
// ++a
document.write(`<h2><strong>The value of a is ++a is ${++a} </strong></h2>`)
document.write(`<h2><strong>Now the value of a is ++a is 11 </strong></h2><br>`)
//post increement
// a++;
document.write(`<h2><strong>The value of a++ is 11</strong></h2>`)
a++
document.write(`<h2><strong>Now The value of a++ is ${a++}  </strong></h2><br>`)
// 
// pre decreement
--a
document.write(`<h2><strong>The value of a is --a is ${--a} </strong></h2>`)
document.write(`<h2><strong>Now the value of a is a-- is 11  </strong></h2><br>`)
//post decreement
document.write(`<h2><strong>The value of a is a-- is ${a--} </strong></h2>`)
a--
document.write(`<h2><strong>Now the value of a is a-- is 10  </strong></h2><br>`)
//question 2. What will be the output in variables a, b & result after
// execution of the following script:
let c= 2, b = 1
       document.write(`initial values: c =${c}, b = ${b}<br><br>`);
let step1 = --c;
       document.write(`step 1(--c): c = ${c}, value = ${step1}<br>`)
let step2 =step1 - --b;
       document.write(`step 2(--c - --b): c = ${c}, b = ${b}, value = ${step2}<br>`)
let step3 =step2 + ++b;
       document.write(`step 3(--c - --b + ++b): c = ${c}, b = ${b}, value = ${step3}<br>`)
let result = step3 + b--;
        document.write(`step 4 (--c - --b + ++b + b--): c = ${c}, b = ${b},result =${result} <br>`)
        document.write(`<b>Final Result:</b><br>`)
        document.write(`a = ${c}<br>`)
        document.write(`b = ${b }<br>`)
        document.write(`result = ${result}<br>`)
//question 4 Write a program that takes input a name from user &
// greet the user.

let userName = prompt(`Enter your name`)
document.write(`Hello ${userName}, welcome to js`)
//question 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
let userNumber = +prompt("Enter your number")
if(!num){
  number = 5
}
i = 1
document.write(`<h2>Multiplication of table ${num}<br>`)
 let i = 1
   document.write(`${num} * ${i} = ${num*i}<br>`)

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
//question 6 Take
// a) Take three subjects name from user and store them in 3
// different variables.
let sub1 = prompt(`Enter first subject`)
let sub2 = prompt(`Enter second  subject`)
let sub3 = prompt(`Enter third subject`)
// b) Total marks for each subject is 100, store it in another
// variable.
let totalMarksPerSubject = 100
// c) Take obtained marks 
let marks1 = Number(prompt(`Enter obtained marks for ${sub1}`))
let marks2= Number(prompt(`Enter obtained marks for ${sub2}`))
let marks3 = Number(prompt(`Enter obtained marks for ${sub3}`))
// d) Now calculate total marks and percentage 
let totalMarks= totalMarksPerSubject* 3
let obtainedMarks =  marks1 + marks2 + marks3
let percentafge = (obtainedMarks/totalMarks)*100
// e show result in table

document.write(`
  <table border ="1" cellspacing = "0" cellpadding = "8">
       <tr>
    <th> Subject </th>
    <th>Totalmarks</th>
    <th>Obtained marks</th>
    <th>Percentage </th>
      </tr>

      <tr>
    <td>${sub1}</td>
     <td>${totalMarksPerSubject}</td>
     <td> ${marks1}</td>
    <td>${(marks1/totalMarksPerSubject) * 100}% </td>
      </tr> 

      <tr>
    <td>${sub2}</td>
     <td>${totalMarksPerSubject}</td>
     <td> ${marks2}</td>
    <td>${(marks2/totalMarksPerSubject) * 100}% </td>
      </tr> 

      <tr>
    <td>${sub3}</td>
     <td>${totalMarksPerSubject}</td>
     <td> ${marks3}</td>
    <td>${(marks3/totalMarksPerSubject) * 100}% </td>
      </tr>
      
       <tr>
      <th></th>
      <th>${totalMarks}</th>
      <th>${obtainedMarks}</th>
      <th>${percentafgetoFixed(0)}%</th>
        </tr>
        </table>`)