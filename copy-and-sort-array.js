// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    let copy = [...arr]
    return copy.sort()
}
let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)

console.log(arr)
console.log(sorted)


// solution:
// function copySorted(arr) {
//     return arr.slice().sort();
//   }