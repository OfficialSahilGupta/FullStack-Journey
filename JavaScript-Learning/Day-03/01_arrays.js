// arrays
// zero-based indexing
// when array is created it is making 2 copies shallow copy and deep copy
// shallow copy means --> it's a copy of object whose property shares the same reference point
// deep copy means --> literally opposite to shallow copy

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["Shaktiman", "Perman", "Thanos"]
const myArr2 = new Array(3,4,5,5)
// console.log(heroes[2]);

// Arrays methods
myArr.push(6) // add elements to the last
myArr.push(7)
// console.log(myArr);

myArr.pop() // remove the last element from the last
// console.log(myArr);

myArr.unshift(9) // add value to the first value in the array
// console.log(myArr);

myArr.shift() // remove the first value from the array
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5)); // checks for the existence of the element
// console.log(myArr.indexOf(2));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice
const myArray = myArr.slice(0, 3)
// console.log(myArray);

const myArray2 = myArr.splice(0, 3) // some little confusion is there is the splice portion -- but hope later wll clear as we go more deeper

console.log(myArr);

