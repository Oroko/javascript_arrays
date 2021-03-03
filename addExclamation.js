// Use map to write a function that appends a '!' to every element. 
function f(strings) {
  return strings.map((n) => n.concat("!"));
}
console.log(f(["a", "b", "c"]));