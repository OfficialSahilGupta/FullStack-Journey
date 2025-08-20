// datatypes are categorised on the basis of two things
// how to access the data and how they stored in the memory
// Primitve and Non - primitive

// Primitive Datatypes -- 7 types
// Number, String, Null, undefined, boolean, Symbol, BigInt

const value = 100
let score = 400
const isLoggedIn = false

// symbols are used to make somthing unique
const id = Symbol("123")
const userId = Symbol("123")
// console.log(id === userId); --> gives false

const bigNumber = 90248992308289340232824923842n
// Non-primitive datatypes or Referece Datatypes
// Array, Objects, Functions

const heroes = ["thanos", "batman", "ninja", "hattori", "kidresksu"]
let myobj = {
    name: "random",
    age: 23,
    subject: "commerce"
}

const myFunc = function(){
    console.log("Hello world");
}

// console.log(typeof myFunc) // gives function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory --> 2; Stack And Heap
// Stack === Primitve ==> gives copy of the variable; Heap === Non-prmitve===> gives the exact original
// which is known as call by value and call by reference respectively

let myName = "random"
let otherName = myName
otherName = "random123" // example of call by value
// console.log(myName);
// console.log(otherName);

// ===> we are changing the values in the copy of varibale so it's giving the modified varibale
// ===> but the original remains same

let userOne = {
    email: "userName@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "random@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);
// ===> due to the call by reference the values are changed for both things
