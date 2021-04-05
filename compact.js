// Write a function compact that removes all nulls from an array. It should return an array of all non-null values from the original array.

function compact(arr){
	return arr.filter(e => e !== null);
}

function happyBirthday(string1, string2){
	
	return string1 + ' ' + string2+'!'
}

console.log(happyBirthday('Abel','Gechure'))