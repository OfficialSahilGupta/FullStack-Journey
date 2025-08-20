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

