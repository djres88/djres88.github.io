var myArray = [1, 2, 5, 6, "hello", "mars", "hello", 2, 5, 9];

var unique = function(array) {
  var result = [];
  array.forEach(function(item) {
    if(result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

unique(myArray);
