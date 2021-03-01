// Count quiz
// Use forEach to write a function count(arr, callback).
// It should return the number of elements for which callback is true

// count([1, 2, 3, 4], (e) => e === 3);

// count([1, 2, 3, 4], (e) => e > 1);

// count ([2, 1, 4, 5, 2, 8], (e) => e === 2);

// count([], (e) => e === "d");

function count(arr, callback) {
    let num = 0
    arr.forEach(n => {
        if(callback(n)){
            num += 1
        }
    })
    return num
}
