// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// const getAverageAge = arr => arr.map(e => e.age).reduce((a, b) => a+b)/arr.length
const getAverageAge = arr => arr.reduce((a, b) => a+b.age, 0)/arr.length

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28