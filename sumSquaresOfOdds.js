
// Sum the squares of the odd numbers in an array. Use map, filter, and reduce together.

function f(arr) {
	return arr.filter(e => e % 2 === 1).
	map(e => e * e).
	reduce((acc, currentValue) => acc + currentValue, 0)
}

console.log(f([1,2,3,4,5]))