/*
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished.

-----------

When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: setTimeout(myFunction(), 3000);
 */

//Eg:1
// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
// }
//
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }
//
// myCalculator(5, 5, myDisplayer);

// -----------------------------------------
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
// setTimeout(myFunction, 3000);
//
// function myFunction() {
//     document.getElementById("demo").innerHTML = "I love You !!";
// }

// ------------------------

// setTimeout(function() { myFunction("I love You !!!"); }, 3000);
//
// function myFunction(value) {
//     document.getElementById("demo").innerHTML = value;
// }


