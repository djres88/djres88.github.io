//Takes an array (or object) and returns a random item (n).

function randomObjectKey(input) { //Refactored this part of the code so that getRandom is easier to read.
  return Math.floor(Math.random()*Object.keys(input).length);
}

function randomArrayElement(input) {
  return Math.floor(Math.random()*input.length);
}

function isString(input) {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
} // ^^ This part -- testing for a string -- is an important addition to the getRandom function. Given the tree-like data structure of the candidates' word-bjects, I'm using recursion to keep going deeper until a string is returned. For example, getting a random verb goes three levels deep (randomverb-randomtense-matchingperson), whereas a random adjective is just one level.

var getRandom = function(input) {
  var index = 0, result;
  if (Array.isArray(input)) {
    index = randomArrayElement(input);
    result = input[index];
    if (isString(result)) { // Here's what I'm talking about up there^^^
      return result;
    } else {
      return getRandom(result); // The recursion until you get a string.
    }
  } else {
    index = randomObjectKey(input);
    var keyName = Object.keys(input)[index];
    result = input[keyName];
    if (isString(result)) {
      return result;
    } else {
      return getRandom(result);
    }
  }
}

// W/O Recursion -- depends on data structure.
var getRandom2 = function(input) {
  var index = 0, result;

  if (Array.isArray(input)) {
    index = randomArrayElement(input);
    result = input[index];
  } else {
    index = randomObjectKey(input);
    var keyName = Object.keys(input)[index];
    result = input[keyName];
  }

  return result;

}
