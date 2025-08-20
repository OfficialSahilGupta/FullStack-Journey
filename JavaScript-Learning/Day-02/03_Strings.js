const name = "harry Potter "
const repoCount = 80

// console.log(name + repoCount + " value"); // not a good choice for concatenation
// using String interpolation

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bottleOpener')
// console.log(gameName[0]);

// accessing the protoType of Strings by .__proto__
// console.log(gameName.__proto__); // gives the object --> {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// const newGameName = gameName.substring(0, 5);
// console.log(newGameName);

// slice can be used with negative indexing also
const newGameName1 = gameName.slice(-6, 12);
// console.log(newGameName1);

const naam = "   andhadhuun  "
console.log(naam.trim());

const url = "https://chutney.com/ketchup%40/newPage"
console.log(url.replace("%40", "-XPage"));
console.log(url.includes("chutney"));

const namosStuti = "bunker-inside-the-garden"
console.log(namosStuti.split("-"));


