let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate = new Date(2025, 7, 8)
// console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime());
// console.log(Math.floor(myTimeStamp)/1000);

let newDate = new Date()
console.log(newDate.getDay() + 1);

console.log(`the date of today is ${newDate.getFullYear()}, month is ${newDate.getMonth()}, and the day is ${newDate.getDay()}`);
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));







