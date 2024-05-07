/*
    -Throw statement defines a custom error.
    -Try statement defines a code block to run(To try).
        try{
      block of code to try something
        }
    -Catch statement defines a code block to handle a error.
        catch() {
        block of code to handle errors
        }
    -Finally statement defines a code block to run regardless of the result.
 */
//Try and catch comes in pairs:

// function checkIfNum(n) {
//     if(isNan(n)){
//         throw "This is not a number error";
//     }
//     else {
//         console.log(n);
//     }
// }
//
// checkIfNum("hey");
// checkIfNum(1);

// function MyException(message) {
//     this.message = message;
//     this.name = "My exception";
//     this.toString = function() {
//         return this.name + ": " + this.message;
//     }
// }
//
// throw new MyException("Field invalid");
// -------------------------------------------


// const obj = "Suyashs";
//
// function length(obj) {
//     if (obj !== "Suyash"){
//         throw "Error First name is incorrect"
//     }
//     else{
//         console.log("Yes first name is correct")
//     }
// }
//
//
// function errorHandler(e){
//     console.log("Error handles successfully" + e)
// }
//
// try{
//     length(obj);
// }
// catch(e){
//     errorHandler(e);
// }

// ---------------------------

//
// function StringExceptionError(string){
//     this.value = value;
//     this.message = "must be a string";
//     this.toString = function(){
//         return this.value + ": " + this.message;
//     }
// }
//
//
// function MyString(string){
//     if (typeof string === "string"){
//         this.value = string;
//         this.getValue = function(){
//             console.log("Your string: " + this.value + ".")
//         }
//     }
//     else {
//         throw new StringExceptionError(string);
//     }
// }
//
//
// function verifyString(s) {
//     let str;
//     try{
//         str = new MyString(s);
//     }catch(e){
//         if (e instanceof StringExceptionError){
//             console.log("String exception" + e);
//         }
//         else{
//             throw "Unknown error";
//         }
//     } finally{
//         console.log("Always runs");
//     }
//     return str;
// }
//
//
// const a = verifyString("I am string");
// const b = verifyString(true);
// const c = verifyString(3123123);
// const d = verifyString("ssddsds");
// // console.log(a);
// a.getValue();


// function finallyExample(){
//     try {
//         console.log("Hi");
//         throw 'test';
//     }
//     catch(e){
//         console.log(e);
//         throw 'boo!';
// //     return true;
//     }
//     finally{
//         console.log("can i run?")
//         return false;
//     }
// }
//
// console.log(finallyExample());


