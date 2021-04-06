// This quiz includes topics from these lessons: "Stack", "Shift". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that rotates an array. The last element moves to the beginning of the array. The function should modify the array itself.

const rotate = (arr) => {
  if (arr.length === 0){return arr}
  return arr.unshift(arr.pop())
}