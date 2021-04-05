

// 

function sum(arr) {

	 return arr.reduce((acc, currentValue) => {
		// acc is the accumulator 
		return acc + currentValue
	}, 0)

}

console.log(sum([1,2,3,4,5]));


