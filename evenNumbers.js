
// Write a function that returns only the even numbers from an array.

function evens(arr) {
  return arr.filter(e => e % 2 === 0)
}

console.log(evens([1,2,3,4,5,6,7,8,9]))