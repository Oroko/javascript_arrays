//Write the function reverse using reduceRight. A hint: use concat in your reduce callback function.

//reduce() on its own works from left to right 
// reduceRight() works from right to left 

function reverse(arr) {
  return arr.reduceRight((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

function reverse(arr) {
  return arr.reduceRight((acc, currentValue) => acc.concat(currentValue), []);
}


