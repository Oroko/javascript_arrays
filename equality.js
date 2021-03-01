// Equality 
// Write a function eql that checks if two arrays are equal
// tests 
// eql([1], [1]);
// Expected: true OK! 

// eql([1], [2]);
// Expected: false but got: true

// ways we can check whether two arrays are equal
// 1. compare the lengths 
// 2. compare the elements to check whether they are equal in the same positions
//    a. call forEach on an arr1 to execute a function on each element and compare it with the elements on arr2 on the same index


function eql(arr1, arr2) {
  let result = arr1.length === arr2.length
  arr1.forEach((item,index) => {
    if(item !== arr2[index]){
      result = false
    }
  })
  return result
  
} 

console.log(eql([1000000000000000,2,3],[1000000000000,'2',3]))
