

const user = {
    username: "random",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

function activity(){
    let uesrname = "randomUser"
    // console.log(this.username); // this context is working only for object and not for functions
}
activity()

const chai = () => {
    console.log("ur name is random");
    
}


const addValue = (num1, num2) => {
    return num1 + num2
}

// console.log(addValue(1, 2));


// implicit return 
// const addValues = (num1, num2) => (num1 + num2)
// console.log(addValues(4, 9));

const addValues = (num1, num2) => ({username: "random"})