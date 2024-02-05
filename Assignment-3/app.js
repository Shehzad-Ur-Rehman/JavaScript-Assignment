// Q1.
// Answer
// var city = prompt("Enter Your City Name?")
// if (city === ("karachi")){
//     alert("“Welcome to city of lights”")
// };



// Q2.
// Answer 
// var Gender = prompt("Enter Your Gender")
// if (Gender === ("Male")){
//     alert("Welcome Sir!")
// } else if (Gender === ("Female")){
//     alert("Welcome Ma'am")
// };



// Q3.
// Answer
// var fuel = prompt("How many Liters Fuel Left in the Tank")
// if (fuel <= ("0.25 litres")){
//     alert("“Please refill the fuel in your car”")
// }else if (fuel <= ("1 litres")){
//     alert("“Refill the fuel in after 3KM”")
// }else if (fuel <= ("3 litres")){
//     alert("“Pora Din Ghom Sakte ho Bhai”")
// };



// Q4.
// Answer
// a. 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is not true");
// }

// c. 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true"); // This condition is true
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); // This condition is true
// }

// // d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // e. 
// if (true){
//  alert("True");
// } if (false){
// alert("False");
// }

// // f. 
// if("car" < "cat"){
// alert("car is smaller than cat");
// } 



// Q5.
// Answer
// var secretNumber = 3
// var guessNumber = prompt("Guess the Secret Number from 1 to 10.")
// if (guessNumber === ("3")){
//     alert("“Bingo! Correct answer”.")
// }else if (guessNumber === ("2")){
//     alert("“Close enough to the correct answer”. ")
// }else if (guessNumber === ("4")){
//     alert("“Close enough to the correct answer”. ")
// }else {
//     alert("Sorry the Right Number is 3")
// }




// Q6.
// Answer
// var Number = prompt("Enter a number:");
// if (!isNaN(Number) & Number % 3 === 0) {
//     console.log(`${Number} is divisible by 3.`);
// } else {
//     console.log(`${Number} is not divisible by 3.`);
// }



// Q7. 
// Answer
// var userNumber = prompt("Enter a number:");
// if (!isNaN(userNumber)) {
// if (userNumber % 1 === 0) {
// console.log(`${userNumber} is an even number.`);
// } else {
// console.log(`${userNumber} is an odd number.`);
// }
// } else {
// console.log("Invalid input. Please enter a valid number.");
// }




// Q8.
// Answer
// var temprature = prompt("Enter Your City Temprature")
// if (temprature >= 40){
//     alert("“It is too hot outside.”")
// } else if (temprature >= 30){
//     alert("“it's hot today”")
// } else if (temprature >= 20){
//     alert("“The Weather today is Normal.”")
// }else if (temprature >= 10){
//     alert("“Today’s Weather is cool.”")
// }else if (temprature >= 1){
//     alert("“OMG! Today’s Weather is so Cool.”")
// }



// Q9.
// Answer
var number1 = +prompt ("Entre any Number ! ")
var number2 = +prompt ("Entre any Number ! ")
var calculate = prompt("Operation (+, -, *, /, %)")
if (calculate === "+"){
    alert(number1 + number2)
} else if (calculate === "-"){
    alert(number1 - number2)
}else if (calculate === "*"){
    alert(number1 * number2)
}else if (calculate === "/"){
    alert(number1 / number2)
}else if (calculate === "%"){
    alert(number1 % number2)
}

