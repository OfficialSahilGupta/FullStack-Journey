const marvel = ["Thanos", "Batmna", "Thor"]
const dc = ["spiderman", "perman", "ninja"]


// marvel.push(dc)
// console.log(marvel[3][2]);
// this is not working as it is including the whole dc into sub section for 3rd index

const mix = marvel.concat(dc)
// console.log(mix);

// another method ====> spread operator

const mixHeros = [...marvel, ...dc]
// console.log(mixHeros);

const depthArray = [1,2,3,4,[5,4,21,2,],[12,2,3,5,[2,1,3,5,2,23,1,232,],[23]], [23,2,3,1,4]]
const newFlattedArray = depthArray.flat(Infinity)
// console.log(newFlattedArray);

// --> merges all subarrays portion in a new array

// now check whether the datastructure is array or not
// console.log(Array.isArray("random")) // --> checks whether the given "random" is array or not
// console.log(Array.from("random access")) // --> converts the "random access" into an array
// console.log(Array.from({name:"random"})) //--> returns the empty array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));
// merges these 3 values in a single array




