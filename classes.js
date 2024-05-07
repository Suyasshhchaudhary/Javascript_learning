/*
Classes in ES6 are just syntactical sugar over Javascript's existing prototype based inheritance
simple, clean syntax to create & take care of inheritance.
syntax:
class ClassName {
  constructor() { ... }
}

//topSuper,
 */


//Pre ES6 way:
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.greetings = function (){
//     console.log("Greetings :D");
// }
//
// function Indian(name, age, color) {
//     Person.call(this, name, age);
//     this.color = color;
// }
//
// Indian.prototype = Object.create(Person.prototype);
// Indian.prototype.constructor = Indian;
//
// const bill = new Indian("Bill", 41, "White")
//
// bill.greetings()

//Class method:
//Classes are sort of special functions
//Classes are not hoisted

// class Person{
//   constructor(name, age){
//   this.name = name
//   this.age = age
//  }
//   greetings(){
//     console.log("Classes are cool")
//   }
// }

// Person.prototype.greetings = function(){
//   console.log("Now i say something else")
// }
// const johnDoe = new Person("John Doe", 29)

// johnDoe.greetings();

// class Vehicles(){
//     constructor(name, brand, origin){
//         this.name = name;
//         this.brand = brand;
//         this.origin = origin;
//     }
//     car(wheels){
//         this.wheels = wheels;
//     }
//
//     bike(normal, sports){
//         this.normal = normal;
//         this.sports = sports;
//     }
//
//     scooter(scooty, scooter){
//         this.scooty = scooty;
//         this.scooter = scooter;
//     }
//
//     auto(e-rickshaw, tuktuk){
//         this.e-rickshaw = e-rickshaw;
//         this.tuktuk = tuktuk;
//     }
// }
//
// //override function
// Vehicles.prototype.car = function(){
//     console.log("This is an overridden function.")
//}

// --------------------------------------------------

// class Person{
//  constructor(name, age){
//   this.name = name
//   this.age = age
//  }
//  greetings(){
//   console.log("Classes are kool")
//  }
// }
//
// class Employee extends Person{
//  constructor(name, age, position){
//   super(name, age);
//   this.position = position;
//  }
// }
//
// class Customer extends Person{
//  constructor(name="customer", age="n/a", contactMethod){
//   super(name, age);
//   this.contactMethod = contactMethod;
//   this.accountCredit = null;
//  }
//  addCredit(amount){
//   this.accountCredit += amount;
//  }
//  reduceCredit(amount){
//   this.accountCredit -= amount;
//  }
//  static sayCustomerNames(...customers){
//   for(const c of customers){
//    console.log(c.name);
//   }
//  }
//  static transferCredit(source, target){
//   const amt = source.accountCredit
//   target.accountCredit += amt
//   source.accountCredit -= amt
//  }
// }
//
// const johnDoe = new Person("John Doe", 29)
// const customer1 = new Customer("Someone", {contactMethod: "email"});
// const customer2 = new Customer("Gus", 21, "phone")
// const customer3 = new Customer("Tushar", 31, "email")
//
// // johnDoe.greetings();
// // console.log(customer1);
// console.log(customer1.accountCredit);
// customer1.addCredit(100);
// customer2.addCredit(100);
// console.log(customer2.accountCredit);
//
// // Customer.sayCustomerNames(customer1, customer2, customer3);
// Customer.transferCredit(customer1, customer2);
// console.log(customer1.accountCredit, customer2.accountCredit)
// console.log(customer1.accountCredit);







