// now we are dealing with the singleton objects

const tinder = new Object()
const tinder1 = {}
//  both are same things

// console.log(tinder);
// console.log(tinder1);

tinder1.name = "randomUser"
tinder1.age = 90
tinder1.id = "123abs"
tinder1.isLoggedIn = false

// console.log(tinder1);

const regularUser = {
    email: "some@example.com",
    fullName: {
        userFullName: {
            firstName: "Suman",
            lastName: "Sah"

        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2) // --> not optimal
// const obj4 = Object.assign({}, obj1, obj2) // --> this one works well

const obj3 = {...obj1, ...obj2} //--> best one
// console.log(obj3);

console.log(tinder1);
console.log(Object.keys(tinder1));
console.log(Object.values(tinder1));
console.log(Object.entries(tinder1));

console.log(tinder1.hasOwnProperty('isLoggedIn'));

