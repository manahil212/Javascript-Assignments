// question 1 Declare an empty array using JS literal notation to store
// student names in future.
// let studentNames = []  
// //  (JS literal notation)
// // store in the future
// studentNames.push("Ali")
// studentNames.push("Bushra")
// studentNames.push("Manahil")
// console.log(studentNames);



//

//  question 2. Declare an empty array using JS object notation to store
// student names in future. 
// let studentNames = new Array()   
// //  (JS object notation)
// // / store in the future
// studentNames.push("Ali" ,"Bushra", "Manahil")
// console.log(studentNames);

//question 3 Declare and initialize a strings array.
// let arrays = ["Manahil" ,"Seher" ,"Nimra"]
// console.log(arrays);

// //question 4 Declare and initialize a numbers array.
// let numbers = [1,2 ,3,4,5,6]
// console.log(numbers);

// //question 5 Declare and initialize a boolean array.
// let boolean = [true,false]
// console.log(boolean);

// //question 6 Declare and initialize a mixed array.
// let mixedArray = [true ,1 ,"Manahil" ,5,false]
// console.log(mixedArray);
// 

//question 7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:
// const qualifications =["SSC" ,"HSC" ,"BCS" ,"BS" ,"BCOM" ,"MS" ,"M.Phil." ,"PhD"] 
// // heading
//  document.write(`<h2>Qualifications:</h2>`)
// //  loop to display array values
// for(i = 0; i<qualifications.length; i++){
// //  show in browser
//     document.write((i +1)+")"+qualifications[i]+"<br>")
// }
// question 8  Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// // // store 3 students name in array
// const studentNames = ["Michael" ,"John" ,"Tony"]

// // store scores of the students
// const scores = [320 ,230 ,480]

// // //Assume total marks of each student is 500
// let totalMarks = 500
// // display
// for(i = 0; i<studentNames.length; i++){
//     let percentage = (scores[i]/totalMarks * 100);
//     document.write("<h2>Score of " +studentNames[i] + " is " +scores[i] +"." +" percentage:" 
//          +percentage.toFixed(2) +"%" +"</br></h2>")
// }

// question 9 Initialize an array with color names. Display the array
// elements in your browser.
// const colors = ["Blue" ,"Red" ,"Green" ,"Yellow" ,"Black"]
// for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// let newColor = prompt("Enter the color you want to add in the beginning")

// // // // add new color on the statrt of the array
// colors.unshift(newColor)

// // // // display
// document.write("<h2>Updated Colors:</h2>")
// for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }


// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // user prompt
// let newColor = prompt("Enter the color you want to add in the end of the array")

// // // / add new color on the end of the array
// colors.push(newColor)

// // // // display
// document.write("<h2>Updated Colors:</h2>")
// for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// first color enter
// let color1 = prompt("Enter the 1st color  in the beginning of the array")
// // // second color enter
// let color2 = prompt("Enter the 2nd color  in the beginning of the array")

// // // / / add new color on the beginning of the array
// colors.unshift(color1 , color2)

// // // display
// document.write("<h2>Updated Colors:</h2>")
// for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }

//d. Delete the first color in the array. Display the updated
// array in your browser.
// remove the first element color from the array
//  colors.shift()
// //  display the update array
// document.write("<h2>Updated Colors:</h2>")
//  for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }

// e. Delete the last color in the array. Display the updated
// array in your browser.
// / remove the LAST element color from the array
//  colors.pop()
// //  display the update array
// document.write("<h2>Updated Colors:</h2>")
//  for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")
// }

// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.const c
let colors = ["Blue" ,"Red" ,"Green" ,"Yellow" ,"Black"]
// // ask the user that which color she want to add
// let index = +prompt("Enter the index where you want to add the  color")
// // ask user for color name
// let newColor =prompt("Enter the newColor")
// // insert color at desired index  using splice
// colors.splice(index,0,newColor)
// // display updated aRRAY IN BROWSER
// for(i = 0; i<colors.length; i++){
//  document.write(colors[i] + "<br>")}

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then

// // Arrays | JAVASCRIPT

// // Page 3 of 6
// // remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// // // browser.
// // //  / ask the user that which color she want to remove
// let indexToDelete = prompt("Enter the index where you want to delete the  color")
//  // how many colours you wanna delete
// let countToDelete = prompt("How many colours you want to delete")
// colors.splice(indexToDelete,countToDelete)
// document.write(`<h2>delete color(s) at specific index</h2> ${colors}`)
// document.write("<br>")



// //  10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// // method.
// let scores = [320,230,480,120]
// // display
// document.write("Scores of students" + scores)
// // // sort in asscending order
// scores.sort(function(a,b){
//     return a - b
// })
// document.write("<br>")
// // display
// document.write("Ordered scores of studnts" + scores)


//question 11 Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
const cities = ["Karachi" ,"Lahore" ,"Islamabad" ,"Quetta" ,"Peshawer"]
// Copy 3 array elements from cities array to selectedCities
// // array.
let selectedCities = cities.slice(2,4)
// display
document.write("<h2>Cities List:</h2>" + cities)
document.write("<h2>Selected cities list:</h2>" + selectedCities)


//question 12 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = [" This"," is", " my", " cat"];
// var singleString = arr.join("         ")

// document.write(`<h1>Array:</h1> ${arr}`)
// document.write(`<h1>String:</h1> ${singleString}`)


// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)
// create empty array
// FIFO()rule
let queue = []

// store values one by one
queue.push("Keyboard")
queue.push("Mouse")
queue.push("Printer")
queue.push("Monitor")

// display stord values
document.write(`<h1>devices</h1> ${queue}<br>`)

// access (remove values in FIFO order (dequeue))
// remove from center
document.write(`Out : ${queue.shift()}<br>`)
document.write(`Out : ${queue.shift()}<br>`)
document.write(`Out : ${queue.shift()}<br>`)
document.write(`Out : ${queue.shift()}<br>`)


//question 14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
// let queue = []
// LIFO REVERSE

// store values one by one
queue.push("Keyboard")
queue.push("Mouse")
queue.push("Printer")
queue.push("Monitor")

// display stord values
document.write(`<h1>devices</h1> ${queue}<br>`)

// access (remove values in LIFO order (dequeue))
document.write(`Out : ${queue.pop()}<br>`)
document.write(`Out : ${queue.pop()}<br>`)
document.write(`Out : ${queue.pop()}<br>`)
document.write(`Out : ${queue.pop()}<br>`)


//question 15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.

let manufactures = ["Apple" ,"Samsung" ,"Motorola" ,"Nokia" ,"Sony" ,"Haier"]
document.write(`<h1>dropdown/selectmenu</h1>`)
// Display the following dropdown/select menu in your
// browser using document.write() method:
document.write(`<select>`)
for(i = 0; i<manufactures.length; i++){
 document.write(`<option>${manufactures[i]}</option>`)
}
