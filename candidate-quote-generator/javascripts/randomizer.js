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
  var index = 0;
  if (Array.isArray(input)) {
    index = randomArrayElement(input);
    if (isString(input[index])) { // Here's what I'm talking about up there^^^
      return input[index];
    } else {
      return getRandom(input[index]); // The recursion until you get a string.
    }
  } else {
    index = randomObjectKey(input);
    var keyName = Object.keys(input)[index];
    if (isString(input[keyName])) {
      return input[keyName];
    } else {
      return getRandom(input[keyName]);
    }
  }
}
