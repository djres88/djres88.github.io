//Takes an array (or object) and returns a random item (n).
function getRandom(array) {
  var index = 0;
  if (Array.isArray(array)) {
    index = Math.floor(Math.random()*array.length);
    return array[index];
  } else {
    index = Math.floor(Math.random()*Object.keys(array).length);
    return Object.keys(array)[index];
  }
}

var unique = function(array) {
  var result = [];
  array.forEach(function(item) {
    if(result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}
