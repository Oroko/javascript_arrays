// Count quiz 
// Use forEach to write a function count(arr, callback). 
//It should return the nuumber of elements for which callback is true

// steps 
// 1. Declare a variable num_of_elements and initialize it to 0 
// 2. loop through the array using forEach
// 3. use an if condition to check if callback(n) is true. if true do num_of_elements += 1 
//4. return num_of_elements



function count(arr, callback){
  let num_of_elements = 0 
  arr.forEach(n => {
    if(callback(n)){
      num_of_elements += 1
    }
  })
  return num_of_elements

}

console.log(count([1, 2, 3, 4], (e) => e === 3))

 


console.log(count([1, 2, 3, 4], (e) => e > 1));

// count([2, 1, 4, 5, 2, 8], (e) => e === 2); 

console.log(count([], (e) => e === "d"));

