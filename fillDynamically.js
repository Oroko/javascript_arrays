//Write a function fillDynamically(value, length). 
//It should construct a new array of length filled with value 


function fillDynamically(value, length) {
  
  let newArray = new Array(length).fill(value)
  return newArray
}