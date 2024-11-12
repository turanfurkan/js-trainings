var markBMI1Element = document.getElementById("markBMI1");
var johnBMIElement = document.getElementById("johnBMI");
var markHigherBMI1Element = document.getElementById("markHigherBMI1");

var markBMI2Element = document.getElementById("markBMI2");
var johnBMI2Element = document.getElementById("johnBMI2");
var markHigherBMI2Element = document.getElementById("markHigherBMI2");

//Data 1
let markWeight1 = 78;
let markHeight1 = 1.69;

let jhonWeight1 = 92;
let jhonHeight1 = 1.95;

//Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;

let jhonWeight2 = 85;
let jhonHeight2 = 1.76;

//BMI Calculation
let markBMI1 = markWeight1 / markHeight1 ** 2;
let markBMI2 = markWeight2 / markHeight2 ** 2;
let jhonBMI1 = jhonWeight1 / jhonHeight1 ** 2;
let jhonBMI2 = jhonWeight2 / jhonHeight2 ** 2;

//Mark's BMI is higher than John's BMI
let markHigherBMI1 = markBMI1 > jhonBMI1;
let markHigherBMI2 = markBMI2 > jhonBMI2;

//Displaying the result
markBMI1Element.textContent = markBMI1.toFixed(2);
johnBMIElement.textContent = jhonBMI1.toFixed(2);
markHigherBMI1Element.textContent = markHigherBMI1;

markBMI2Element.textContent = markBMI2.toFixed(2);
johnBMI2Element.textContent = jhonBMI2.toFixed(2);
markHigherBMI2Element.textContent = markHigherBMI2;

//         Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

if (markBMI1 > jhonBMI1) {
  console.log(
    `Mark's BMI (${markBMI1}) is higher than John's BMI (${jhonBMI1})`
  );
} else {
  console.log(
    `John's BMI (${jhonBMI1}) is higher than Mark's BMI (${markBMI1})`
  );
}

if (markBMI2 > jhonBMI2) {
  console.log(
    `Mark's BMI (${markBMI2}) is higher than John's BMI (${jhonBMI2})`
  );
} else {
  console.log(
    `John's BMI (${jhonBMI2}) is higher than Mark's BMI (${markBMI2})`
  );
}
