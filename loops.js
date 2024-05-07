//Loops
//Quick and easy way to do something repeatedly
/*
Many types of loop but they do kind of same thing:
repeat something(i.e. an action) a set number of times (could be even zero).


while(condition) {
  statement
  }

*/

//while loop

// var noOfLoops = 0;
// while(noOfLoops < 10) {
//   console.log("I am in a loop");
//   console.log(noOfLoops);
//   noOfLoops += 1;
//   }

// -----------------------------

// let num1 = 0;
// let num2 = 0;
//   while (num1 < 100){
//     num1 += 1;
//     num2 += 3;
// //       if (num1 === 50) {
// //         break;
// //       }
// }
// console.log(num2);

// ----------------------------

// let names = ["Suyash", "Golu", "Yashu", "Tushar", "Vivek"];

// function nameLooper(arr){
//   console.log(arr)
//   let index = 0;
//   while(index < arr.length){
//     if (arr[index] === "Vivek"){
//       console.log(arr[index], index);
//       break;
//     }
//     index += 1;
//   }
// }
// nameLooper(shuffle(names));




// function shuffle(array) {
//   let currentIndex = array.length;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {

//     // Pick a remaining element...
//     let randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }
//   return array;
// }



// let names = ["Suyash", "Golu", "Yashu", "Tushar", "Vivek"];

// function nameFinder(arr) {
//   let index = 0;
//   while(index < arr.length){

//     if(arr.length === 1){
//       console.log("Sorry the names list can't be one")
//             break;
//     }

//     console.log(arr[index]);
//     index += 1;
//   }

// }

// nameFinder(names);

//do...while statement (As compared to while it runs at least once, while may not run at all)

/*
do {
  statement
  } while(condition)
*/

// let shouldRunOnlyOnce = true;
// let index = 0;
// do{
//   console.log("Pooping!");
//   index += 1;
//   if (index === 10) {
//     shouldRunOnlyOnce = false;
//   }
// } while(shouldRunOnlyOnce);



// let keepPooping = true;
// let index = 0;
// do {
//   console.log("I am pooping");
//   index += 1
//   if(index === 10) {
//     keepPooping = false;
//   }
// }
// while(keepPooping);


// function basicLoop() {
// let index = 0;
//   while(index < 10){
//     console.log("i sm looping")
//     index += 1
//   //   if(index === 7){break;}
//   }
// }

// basicLoop();

// let condition;
// do {
//     const userInput = prompt("Enter q to exit");
//     if (userInput === 'q') {
//       condition = false;
//     }
//     else {
//       condition = true
//   }
// }
// while(condition);


// let totalMoney = 100;
// let price = 500;

// do {
//   if (totalMoney > price){
//     console.log("You can purchase the item.")
//     break;
//   }else{
//     console.log("Cannot purchase")
//   }

// }
// while(totalMoney > 500)


// let totalMoney = 400;

//   do{
//     checkIfCanPurchase();
//   }
//   while(totalMoney > 500);

// function checkIfCanPurchase(){
//   if (totalMoney > 500){console.log("Can purchase :)")
//   }else{
//    console.log("Cannot purchase :(")
//   }
// }


// const arr = ["Suyash", "Yashu", "Chaudhary", "Singh"]
// function iterate(arr){
//     let index = 0
//     while(index < arr.length){
//        if (arr[index] === "Singh"){
//         console.log("Mil gaya " + arr[index] + " At position " + arr[index])
//       break;}
//     index += 1
//   }
//   console.log(index)
// }

// iterate(arr);


// let sroo = false
// let index = 0;

// do{
//   console.log("I am pooping")
//   index += 1
//   if(index === 10) {
//     sroo = false;
//   }

// }
// while(sroo)


//for loops
// Repeat until a specified condition evaluates to false.
/*
for(initial expression; condition; increment expression){
statement
}
*/

// const iceCreams = ["Butterscotch", "Vanilla", "Chocolate", "TutiFruti"];
// for(var index = 0; index < iceCreams.length; index ++){
//   if (iceCreams[index] === "Chocolate"){
//     console.log(index + " " + iceCreams[index]);
//   }
// }



//   for(var index = 1; index < 100; index ++ ){
//     if(index % 5 === 0 && index % 3 === 0){
//       console.log("FizzBuzz")}
//     else if(index % 3 === 0){
//       console.log("Fizz")
//     }
//     else if(index % 5 === 0){
//       console.log("Buzz")
//     }
//       else
//     console.log(index);

//   }

// function repeat(){
//   for(var i = 0; i < 10; i ++){
//     console.log("You are inside a Loop :)")
//     for(var ii = 0; ii < 1; ii ++){
//       console.log("You are inside the inner loop now :)")
//     }
//   }

// }

// repeat();


// function looper(value){
//   setTimeout(function(){
//     console.log(value);
//   }, value * 1000);
// }

// for(i = 0; i < 10; i += 1) {
//   looper(i);
// }


// For... in loop (for looping over object )
// for(let x in arr){
//   statement
// }

//forEach loop
// arr.forEach function(x){
//   console.log(x)
// }
// Loop through an object's properties in arbitrary order
//Can't do break and continue in forEach loop


// const people = {1: "Suyash", 2: "Chaudhary", 3: "Tushar", 4: "Singh"};

// for(let prop in people){
//   console.log(prop);
// }

// for(let prop in people){
//   let newUser = people[prop];
//   newUser = "Redacted";
//   console.log(newUser);
// }

// for(let prop in people){

//   if (people[prop] === "Suyash") {
//     people[prop] = "unknown";
//   }
//   console.log(people[prop]);

// }


// const drinks = ["Coffee", "Tea", "Coke", "Pepsi", "Fanta"];

// for(let d in drinks){
//   console.log(drinks[d])
// }

// drinks.forEach(function(d){
//   console.log(d);
// })


//for of loop (For looping on a data)
//it works with break and continue

// for(const x of drinks){
//   console.log(x)
// }

// const arr = ["Suyash", "Yashu", "Chaudhary", "Singh", "khan", "paan"]
// const uniqueNameSet = new Set(arr);

// for(const n of arr){
//   console.log(n)
// }