// objects can be defined as literal and constructor
// constructor --> singleton
// literal --> not a singleton
// Objects -- Literal

// Object.create  ---> from constructor singleton

const mySym = Symbol("key1")
const JSUser = {
    name: "random",
    [mySym]: "myKey1",
    "FullName": "random Sapkota",
    age: 18,
    location: "Jaipur",
    email: "random@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JSUser.fullName); // this can't be used like this
// instead we can use like this

// console.log(JSUser["FullName"])
// console.log(JSUser["isLoggedIn"])
// console.log(JSUser["age"])
// console.log(JSUser[mySym])

// JSUser.email = "randomPerson@email.com"  // changing the content of the file
// Object.freeze(JSUser) // now no one can change the values
// JSUser.email = "change@email.com"// it can't change now
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("hello JS User");
    
}

JSUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
    
}

console.log(JSUser.greeting()); 
console.log(JSUser.greeting); //--> gives a function return back

console.log(JSUser.greetingTwo()); 

