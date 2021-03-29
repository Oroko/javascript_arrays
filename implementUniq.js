// This quiz includes topics from these lessons: "For each", "Includes", "Stack". 
// If you find this quiz difficult, revisiting those lessons may help!
// Write a function uniq(arr). It should return a new array without any duplicate values. 
// It should not change the original array.


function uniq(arr){
	let newArray = []

	arr.forEach(e => {
		if(!newArray.includes(e)){
			newArray.push(e)
		}
	})

	return newArray
}

