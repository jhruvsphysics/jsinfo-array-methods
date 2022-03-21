// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

const filterRange = (arr, i, j) => arr.filter(e => (e>=i)&&(e<=j))

function filterRangeInPlace(arr, i, j) {
    let filterArr = filterRange(arr, i, j)
    filterArr.forEach((e, k) => {
        arr[k] = e
    })
    for (let i=0; i<=arr.length-filterArr.length; i++) {
        arr.pop()
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]