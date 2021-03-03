// This quiz includes topics from this lesson: "Slice". If you find this quiz difficult, revisiting that lesson may help!
// Use slice to write a function takeFirst(arr, n). It should return a new array of the first n elements of arr. If n is larger than the array's length, return a copy of the array. Don't worry about negative n.

function takeFirst(arr, n) {
    return arr.slice(0, n);
}


console.log(takeFirst([1, 2, 3, 4, 6], 3))