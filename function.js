
// const pach = 5;
// const paach = "5";

// const conv = parseInt(paach);

// console.log(pach + conv);


// var Budget = 250;
// var creditLimitAvl = true;
// var Price = 290;


// var canBuy = true;

// function tellMe() {
//   if ((canBuy) && Price <= 250 || (!creditLimitAvl))
//     console.log("You can buy the item")
//     else
//     alert("Sorry you cannot buy this item")

// }

// tellMe();


//function

// function nameAge(name, age){
//   console.log("Hello there!, My name is " + name + " aged " + age)

// };

// nameAge("Suyash", 27);

// const num1 = 20;
// const num2 = 23;

// function addition(num1, num2){
//   addedValue = num1+num2;
//   return addedValue;
// };

// function multiplication(addedValue){
//   doubledValue = addedValue*2;
//   return doubledValue;
// };

// const addedResult = addition(num1, num2);

// console.log(multiplication(addedResult));


//Nested functions

// function personFormatter(firstName, lastName, age){
//   function formatNames(arg1, arg2){
//     return arg1 + " " + arg2;
//   }

//   function dataFormatter(fullName, num){
//     const formattedData = {
//       name: fullName,
//       age: num
//     }

//      return formattedData;
//     }

//   const formattedName = formatNames(firstName, lastName);
//   return dataFormatter(formattedName, age);
// }

// console.log(personFormatter("Chris", "Jones", 23));


//================

// function vehicles(year){
//   function car(carMake, model){
//     return "I have a" + carMake  + model + ",Year: " + year;
//   };

//   function bus(busModel){
//     return "Even then i travel from" + year + busModel + "bus";
//   }

//   function cycle(cycleModel){
//     return "With a foldable " + year + cycleModel + "bike";
//   }

//     const carcon = car("Suzuki", "Esteem");
//     const buscon = bus("Volvo 9400");
//     const cyclecon = cycle("Hercules");

//   function joiner(){
//     const statement = carcon + buscon + cyclecon;
//     return statement;

//   };
//   return joiner();
// };
// console.log(vehicles(2009));

// const year=2009;
// function car(carMake, model, year=year){
//     return "I have a" + carMake  + model + ",Year: "+year;
//   };

// let carcon = car("Suzuki", "Esteem");

// console.log(carcon)


// var firstName = "Suyash";
// var lastName = "chaudhary";

//   function fullname(firstName, lastName){
//     console.log("Fullname = " + firstName + " " + lastName)

//   }

// fullname(firstName, lastName);

//Function, closures

// const users = [{name: "Suyash", age: 23}, {name: "Yashu", age: 28}, {name: "Golu", age: 22}];

// function mapUsers(arr){
//   const userName = arr.map((x) => {
//     return x.name;
//   })
//   return userName;
// }

//is equal to :
//const mapUsers = (arr) => arr.map((x) => x.name);


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const filteredNum = (numbers) => numbers.filter((x) => {return x % 2 === 0});


// const doubledNumbers = (num) => {

//   const numberContainer = [];
//   num.forEach((n) => {
//     const doubled = n*2;
//     numberContainer.push(doubled);
//   });
//   return numberContainer;
// }


// console.log(doubledNumbers(numbers));
//=================================

// arr = [1, 2, 3, 4, 5, 6];

// const sqrt = (arr) => {
//     newarr = [];
//   arr.map((x) => {
//     const squaredroot = Math.sqrt(x)
//     newarr.push(squaredroot)


//   });
//       return newarr;

// }

// console.log(sqrt(arr));


//  ---------------------------

// const bankAccount = {
//   canSpendMoney: true,
//   hasCreditCard: true,
//   balance: 100
// };

// const canPurchaseItem = (price, bankAccount) => {
//   if (bankAccount.canSpendMoney) {bankAccount.balance -= price;
//   if (bankAccount.balance <= 0) { bankAccount.canSpendMoney = false ;
// //   if (bankAccount.balance < price) { const ccused = bankAccount.balance - price; return "Creditcard used for:" + Math.abs(ccused)
//   if (Math.sign(bankAccount.balance) === -1) {console.log("Creditcard used for: " + Math.abs(bankAccount.balance));
//   }
//   }
// return true;
//   }
//   else {return false}

// }

// console.log(canPurchaseItem(100, bankAccount));
// console.log(canPurchaseItem(10, bankAccount));

// -------------------------------------------



// function logAllArguments(x) {
//   const args = Array.prototype.slice.call(arguments, logAllArguments.length);
//   console.log(args)

// }
// logAllArguments(2, 4, 6, 8, 10, 12);


// // ---------------------------------------------

// const arr = [2, 4, 6, 8, 10, 12]

// function logAllArguments(arr) {
//   const args = Array.prototype.slice.call(arguments, logAllArguments.length);
//   console.log(args)

// }
// logAllArguments(arr);

// -------------------------------------------------

//  function Dog(name, age, breed) {
//    console.log("Hi! i am a " + breed + " " + "Named: " + name + " " + "age" + age  )

//  }


// dog("Bruno", 12, "GR")