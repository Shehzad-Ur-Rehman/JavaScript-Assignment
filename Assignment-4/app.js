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
// Write a program to store phone manufacturers (Apple, Samsung,
//     Motorola, Nokia, Sony & Haier) in an array. Display the following
//     dropdown/select menu in your browser using document.write()
//     method:
// var Mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// console.log(Mobile,2);