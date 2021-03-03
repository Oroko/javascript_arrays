// This quiz includes topics from this lesson: "Map". If you find this quiz difficult, revisiting that lesson may help!
// Use map to write a function that squares every number in a list.

function square(nums) {
  return nums.map((n) => n * n);
}

console.log(square([1,2,3,4,5,6,7]))


// function square(nums){
//   const new_array = []
//   nums.forEach(n => {
//     new_array.push(n * n)
//   })
//   return new_array
// } 
// square([1,2,3,4,5])

// function square(nums){
//   let new_array = [] 
//   for(let i = 0; i < nums.length; i++){
//     new_array.push(nums[i] ** 2)
//   }
//   return new_array
// }

// console.log(square([1, 2, 3, 4, 5, 6, 7]));