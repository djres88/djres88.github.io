// Takes an array and returns a new array containing only those elements that meet a condition.
function map(array, condition) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if(condition) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
