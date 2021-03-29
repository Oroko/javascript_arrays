// This quiz includes topics from these lessons: "For each", "Filter". 
// If you find this quiz difficult, revisiting those lessons may help!
// Use forEach to write a function that behaves like filter.


function even(arr){
	return arr.filter(n => n % 2 === 0)
}

console.log(even([1,2,3,4,5,6,7,8,9]))
