// This quiz includes topics from this lesson: "Slice". If you find this quiz difficult, revisiting that lesson may help!
// Write a function copyArray that returns a copy of an array. Changes to the copy shouldn't affect the original array and vice-versa.



function copyArray(arr){
  return  arr.slice()
}


console.log(copyArray([1, 2, 3, 5]))

console.log([1,2,3,4,5].slice(0,9))