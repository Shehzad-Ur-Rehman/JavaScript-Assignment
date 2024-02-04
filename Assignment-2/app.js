// Q1.
// Answer
// var a = 10
// console.log("The Value of a is: " + a);

// (++a === 11)
// console.log("The Value of a is: " + a);

// (a++ === 11)
// console.log("The Value of a is: " + a);

// (--a === 11)
// console.log("The Value of a is: " + a);

// (a-- === 11)
// console.log("The Value of a is: " + a);



// Q2.
// Answer



// Q3.
// Answer
// var name = prompt("What is Your Name?")
// console.log(name + " Welcome to our Webpage");


// Q4.
// Answer
// var table = prompt("enter your number"); {
//     if (isNaN(table)) {
//         table = 5;
//     }
//     for (var i = 1; i <= 10; i++){
//         console.log(table + "x" + i + "=" + (num * i));
//     }
// };


// Q5. 
// Answer
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");


var totalMarks = 100;


var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<h2>Subject Results</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");


