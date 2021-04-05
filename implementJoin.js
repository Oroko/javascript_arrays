// Using reduce, write a function that behaves like join. Joining [] should produce ''

function join(arr, separator) {
  if(arr.length === 0){return ''} 

  return arr.reduce((acc, currentValue) => {
  	return acc+separator+currentValue
  })
}