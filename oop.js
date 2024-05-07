//CONSTRUCTORS

//It is considered good practice to name constructor functions with an upper-case first letter.
//In a constructor function this does not have a value. It is a substitute for the new object.
// The value of this will become the new object when a new object is created.
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "English";
// }


// function Animal(name, age, breed){
//   const obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.breed = breed;
//   return obj;
// }




// Animal.prototype.fullName = function(){
//   return `The full name is ${this.firstName} ${this.lastName}`
// }

// const dog1 = new Animal("Bruno", "Chaudhary", 12, "Lab")
// const dog2 = new Animal("Buzo", "Singh", 5, "German")

// console.log(`first animal: ${dog1.fullName}, second animal: ${dog2.fullName}`)


// ----------------------------------------------------------------------------------------------


//PROTOTYPE: All JavaScript objects inherit properties and methods from a prototype.



// -----------------------------------------------------------------------------------------------
// INHERITANCE

//
//
// function Animal(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }
//
// Animal.prototype.fullName = function (){
//     return this.firstName + " " + this.lastName;
// }
//
// Animal.prototype.makeNoise = function () {
//     console.log(`Universal animal noise`)
// }
//
// function Dog(firstName, lastName, age, breed){
//     Animal.call(this, firstName, lastName, age);
//     this.breed = breed;
// }
// function Cat(name, age, color){
//     Animal.call(this, name, age, color)
//     this.color = color
// }
// function Kitten(name, age, color, litter){
//     Cat.call(this, name, age, color);
//     this.litter = litter;
// }
//
//
//
// // Set prototype to be an instance of Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.makeNoise = function(){
//     console.log("bark bark, whoof");
// }
//
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Cat.prototype.scratchPost = function(){
//     console.log("Car has scratched the post")
// }
//
// // const dog1 = new Animal("Bruno", "Chaudhary", 12);
// // console.log(dog1.fullName());
//
// const barky = new Dog("Barky", 2, "chihuahua");
// const kitty = new Cat("Poli", 2, "White");
// const tinyKitty = new Kitten("Spot", 0.3, "orange", 1);
// kitty.makeNoise();
// kitty.scratchPost();
// tinyKitty.scratchPost();
// // console.log(barky.fullName());
//
// // console.log(Object.keys(barky));





