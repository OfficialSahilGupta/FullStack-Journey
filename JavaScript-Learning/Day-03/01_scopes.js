var c = 30

if(true){
    c = 300
}

// console.log(c);
// problem we are accessing the value of c outside of the block scope: that's being the main reason for avoidance of var

// ++++++++++++++++++++++++ Mini Hoisting ++++++++++++++++++++++++++


// but here function doesn't need anything here so, it is executing well
// console.log(addOne(5));
function addOne(num){
    return num + 1
}

//  this is the concept of hoisting where u can't access a variable before initializing 
// console.log(addTwo(7));
const anotherFunction = function addTwo(num){
    return num + 1
}
