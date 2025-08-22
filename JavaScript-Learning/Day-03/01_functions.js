function fun(){
    console.log("hello world");
    console.log("hello world");
    console.log("hello world")
}

// fun()

// function to add two numbers
function addTwoNumbers(a, b){ // this a and b are call parameters

    return a + b

}
// console.log(addTwoNumbers(2,3)); // this 2 and 3 are called arguments

function welcomeMessage(userName = "Sam"){
    if(!userName){
        console.log("Please enter a name");
        return
        
    }
    return `${userName} Just logged in`
}

// console.log(welcomeMessage("Hridayesh")); // priority goes to this argument line
// console.log(welcomeMessage(" "));
// console.log(welcomeMessage("Random"));

// this ... is rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(100, 200, 300));

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username: "random",
    age: 20
}

function handleObject(anyObject){
    // console.log(`Name is ${anyObject.username} and age is ${anyObject.age}`);
    
}

// handleObject(user)

handleObject({
    userName: "random",
    age: 30
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
