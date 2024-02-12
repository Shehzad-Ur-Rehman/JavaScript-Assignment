// Q1. 
// Answer
// var correctpassword = "selfieboy"
// var password = prompt("Enter Your Password")
// if (!password){
//     console.log("Please Enter a Password")
// } else if (password === correctpassword){
//     console.log("“Correct! The password you entered matches the original password”")
// }else {
//     console.log("“Incorrect password”")
// };



// Q2. 
// Answer
// var hour = 13;
// if (hour < 11) {
//     console.log("Good day")
// } else {
//     console.log("Good evening")
// }; 

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);



// Q3.
// Answer
// var student = [];
// var studentname ={};
// var strings = ["lemon", "orange", "apple"];
// var numbers = [65, 90, 34, 56];
// var boolean = [true, false];
// var mixed = ["Shehzad", 89, true, 94, "Selfie", false];
// var availableeducation = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// console.log(student);
// console.log(studentname);
// console.log(strings);
// console.log(numbers);
// console.log(boolean);
// console.log(mixed);
// console.log(availableeducation);



// Q4. 
// Answer
// var color = ["Red", "Green", "Blue"];
// document.write(color + "<br><br>");

// var colorbeginning = prompt("what color wants to add to the beginning");
// color.unshift(colorbeginning);
// document.write(color + "<br><br>");

// var colorend = prompt("what color wants to add to the end");
// color.push(colorend);
// document.write(color + "<br><br>");

// color.unshift("Orange", "Purple");
// document.write(color + "<br><br>");

// color.shift();
// document.write(color + "<br><br>");

// color.pop();
// document.write(color + "<br><br>");

// var userIndex = prompt("Enter the index where you want to add a color:");
// var userColor = prompt("Enter the color name:");
// color.splice(userIndex, 0, userColor);
// document.write(color + "<br><br>");

// var deleteIndex = prompt("Enter the index from where you want to delete color(s):");
// var deleteCount = prompt("Enter the number of colors to delete:");
// color.splice(deleteIndex, deleteCount);
// document.write(color + "<br><br>");



// Q5.
// Answer
// var studentScores = [85, 72, 93, 64, 91, 78, 88];
// console.log(studentScores);

// studentScores.sort(function (a, b) {
//     return a - b;
// });

// console.log(studentScores);



// Q6.
// Answer
// var Mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// function displaydropdown(){
//     document.write("<select>");

//     for(var i = 0; i < Mobile.length; i++){
//         document.write("<option value= " + Mobile[i] +">" + Mobile[i] + "</option>");
//     }
//     document.write("</select>")
// }
// displaydropdown()



// Q7.
// Answer
// var table = prompt("Enter any number")
// var tableLength = prompt("Enter length of multiplication")
// for (var i = 1; i <= tableLength; i++){
//     console.log(table + " X " + i + " = " + table * i)
// };



// Q8.
// Answer
// document.write("Counting: ")
// for (var i = 1; i <= 15; i++){
//     document.write(i)
// };
// document.write("<br>");

// document.write("Reverse counting: ");
// for (var s = 10; s >= 1; s--){
//     document.write(s)
// };
// document.write("<br>");

// document.write("Even: ");
// for (var e = 2; e <= 20; e+=2){
//     document.write(e)
// };
// document.write("<br>");

// document.write("Odd: ");
// for (var o = 1; o <= 19; o+=2){
//     document.write(o)
// };
// document.write("<br>");

// document.write("Series: ");
// for (var e = 2; e <= 20; e+=2){
//     document.write(e + "k")
// };



// Q9. 
// Answer
// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Enter the item to search: ")

// if (userInput === ("cake")) {
// console.log(userInput +" is found in the list.");
// }else if (userInput === ("apple pie")) {
//     console.log(userInput +" is found in the list.");
// }else if (userInput === ("cookie")) {
//     console.log(userInput +" is found in the list.");
// }else if (userInput === ("chips")) {
//     console.log(userInput +" is found in the list.");
// }else if (userInput === ("patties")) {
//     console.log(userInput +" is found in the list.");
// }else {
// console.log(userInput + " is not found in the list.");
// };



// Q10.
// Answer
// function toTitleCase(input) {
//     return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// let userInput = prompt("Enter a string: ");
// let titleCaseString = toTitleCase(userInput);
// console.log("Input in Title Case:", titleCaseString);



// Q11.
// Answer
// let name = prompt("Enter a string: ");
// let capital = name.toUpperCase();
// console.log(capital);



// Q12.
// Answer
// let stringNumber = "472";
// let convertedNumber = Number(stringNumber);

// console.log("Type of Original String: " + typeof stringNumber);
// console.log("Type of Converted Number: " + typeof convertedNumber);
