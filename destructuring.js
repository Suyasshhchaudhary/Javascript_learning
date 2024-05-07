//Destructuring

/*
    "The destructuring assignment syntax is a javascript expression that makes it possible to extract data from arrays or objects into distinct variables."-MDN.
    -Destructuring syntax can be used on left-hand side of assignments.
 */

const arr1 = [firstname, lastname, age, gender]
const arr2 = ["Suyash", "chaudhary", 28, "male"]

arr1 = arr2

// Array destructuring
const myArray = [l, 2, 3, 4, 5];
const [x, y, z, a, b] = myArray;
const mySecondArray = ["Jane Doe", "John Doe", "Billy Bob"];
let name1, name2, name3, name4;
[name1, name2, name3, name4="I'm a default :D"] = mySecondArray


// Swap two variables
let aa = 100;
let bb = 250;
let cc = 500;
console. log(aa, bb, cc) ;
[bb, cc] = [cc, bb];


// Use with function

// function returnArray() {
//   return ["donuts", "chocolate", "candy", "gummy bears"];
// }

// const [x, y, z, A] = returnArray();

// console.log(z);

// function returnArray(arr, term) {
//     return arr.filter((t) => t === term)
// }
//
// const [result] = returnArray(["chicken", "fish", "tofu"], "tofu");
// console.log(result);

// function foodFilter(arr, term){
//     return arr.filter((t) => t === term)
// }
//
// const [result] = foodFilter(["chicken", "fish", tofu], "tofu");
// const [result2] = foodFilter(["pizza", "donut", "ice cream"], "pizza");


//Assigning new variable

//Defaults
// const myobj5 = {a1: 10, b1: 20, c1: 30, d1: 40, e1: 100};
// const {a1, b1, c1, d1, e1 = 50} = myobj5;

// function stateUser(obj){
//   const{ user = null, memberType} = obj;
//   if (!user){
//     console.log("Error! No user name entered")
//   }
//   console.log(`Username: &{user}, membership type: ${memberType}`);
// }

// const member1 = {user: "Steve", memberType: "premium"};
// const member2 = {memberType: "free"};

// stateUser(member1);


//can ignore some values
// const anotherArr = [10, 20, 50, 100, 1000, 30];
// const [numA,,,,numD,] = anotherArr;
// console.log(`First: ${numA}, second: ${numD}`);

//can use rest pattern
// function sayHi(firstArg ...restOfArgs) {
//     console.log(`Hi, ${firstArg}`);
//     console.log(restOfArgs)
// }
//
// sayHi("Chris", 30, "123 Fake St");
//
//
// const yetAnotherArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
// const [dogString, catString, ...otherAnimals] = yetAnotherArr;
//
// function joiner(){
//     console.log(dogString);
//     console.log(catString);
//     console.log(otherAnimals);
// }
//
// joiner();

// ----------------------------------------------------------------------------------------


//Object destructuring

// const myobj = {firstname: "Suyash", lastname: "Chaudhary", age: 28, sex: "Male"}
// let {firstname, lastname, age, sex} = myobj

// console.log(`first name is ${firstname}`)


// let myVar1, myVar2;
//
// const myObj2 = {myVar1: "a", myVar2: "b"};
// console.log(myVar1, myVar2);
//
// ({myVar1, myVar2} = myObj2);
// console.log(myVar1, myVar2);
//
// let obj = {one: "ek", two: "do", three: "teen", four: "chaar"};
//
// console.log(obj["one"])

//Assigning a new variable names & defaults

// const myobj3 = {firstname: "Suyash", lastname: "chaudhary", age: 28};
//
// let {firstname: pehlanaam, lastname: aakhrinaam, age: umar, sex = "Male"} = myobj3
//
// console.log(`${pehlanaam}`);


//loop destructuring

// const myobj7 = {
//     title: "My address book",
//     entries: [
//         {
//             name: "bob",
//             number: "555-5555",
//             address: "123 Fake St",
//         },
//         {
//             name: "Jill",
//             number: "666-6666",
//             address: "159 Fake street",
//         },
//         {
//             name: "Billy",
//             number: "777-7777",
//             address: "770 Fake street"
//         },
//
//     ],
//     myPhone: "555-1111"
// }
//
// const {title, entries, myPhone} = myobj7;
//
// for (const {name, address} of entries){
//     console.log(`Entries are: ${name}`);
// }








