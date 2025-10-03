// question#1 Declare and initialize an empty multidimensional array.
// (Array of arrays)
// let matrix = [[],[],[]]
// console.log(matrix);

//question#2 Declare and initialize a multidimensional array
// representing the following matrix:
// const numbers = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(let i = 0; i<=numbers.length; i++){
//     for(let j = 0; j<numbers[i].length;j++){
//     document.write(numbers[i][j])
//     }
//     document.write("<br>")
// }

// question#3. Write a program to print numeric counting from 1 to 10.
// const countings = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 1; i<=10; i++){
//     document.write(i + "<br>")
//     }


//question#4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// // taken as an input from user.
// let table = +prompt("Enter a number to show its multipication table")
// let length = +prompt("Enter the length of the table")
// // show haedings
//        document.write(`<h1>Multiplication of table ${table}</h1>` )   
//        document.write(`<h2>Length of the ${length}</h2>` ) 
// // loop   
// for(let i = 1; i<=length; i++){
//  document.write(table + "*" + i + "=" + (table*i) + "<br>" ) 
//     }


//question#5   Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
//  const fruits = ["Apple" ,"Banana" ,"Mango" ,"Orange" ,"Strawberry"]
//    for(let i = 0; i<fruits.length; i++){
//  document.write(fruits[i] + "<br>") 
 
//     }
//  on browser
//    const fruits = ["Apple" ,"Banana" ,"Mango" ,"Orange" ,"Strawberry"]
//    for(let i = 0; i<fruits.length; i++){
//     document.write("Element at index " +  i + " is " + fruits[i] +"<br>"  ) 
//     }


//questio#6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//  document.write("<h1>Counting:</h1>")
// //  loop 
//   for(let i = 1; i<=15; i++){
//     document.write(i) 
//     }

//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//  document.write("<h1>Reverse counting:</h1>")
// //  loop 
//      for(let i = 10; i>=1; i--){
//     document.write(i) 
//     } 
 
  
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h1>Even numbers:</h1>")
// //  loop 
//      for(let i = 0; i<=20; i++){
//    if(i % 2 === 0){
//     document.write(i)
//    }
//     } 

//     // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//  document.write("<h1>Odd numbers:</h1>")
// //   loop 
//      for(let i = 1; i<=19; i=i+2){
//     document.write(i)
//    }

// //    e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//  document.write("<h1>Series:</h1>")
//     //  loop 
//      for(let i = 2; i<=20; i++){
//         if(i % 2 === 0){
//     document.write(i+ "k")
//       document.write("<br>")

// }
//    }

//question#7   You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
const A =  ["cake", "apple pie", "cookie", "chips", "patties"]
let user =prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
let found = false;

 for(let i = 0; i<=A.length; i++){
    if(A[i] === user){
        document.write(user + " is available at index " + i +" in our bakery")
        found = true;
        break;
        
    } 
 }

 if(!found){
    document.write("we are sorry " + user + " is not available in our bakery")
 }

//  Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
let numbers = [24, 53, 78, 91, 12]
// assume the largest number is
// 24>24   1
// 53>24   2
// 78>53   3
// 91>78   4 so 91 is the largest
// > greater than sign

let largest = numbers[0]
// loop
for(let i = 1; i<=numbers.length; i++){
    // 24 = 24
    if(numbers[i]>largest){
        largest = numbers[i];
    }
}
document.write("<h2>Array items:</h2>" )
document.write(numbers +"<br>")
document.write("The largest number is " + largest)
document.write("<br>")


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let number = [24, 53, 78, 91, 12]
// assume the largest number is
let smallest = numbers[0]
// 24<24   0
// 24<53   1
// 53<78   2
// 78<91   3
// 12<91   4 so 12 is the smallest number
12<91
// < less than sign
// loop
for(let i = 1; i<=numbers.length; i++){
    // 24 = 24
    if(numbers[i]<largest){
        largest = numbers[i];
    }
}
// document.write("Array items" + numbers +"</br>")
document.write("The smallest number is " + largest)
document.write("<br>")

// Write a program to print multiples of 5 ranging 1 to
// 100.
for(let i = 5; i <= 100; i=i+5){
       document.write(i + ",")
}
 
