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
  }
}

function isObject(input) {
  if (typeof input === "object") {
    return true;
  }
}

 // ^^ This part -- testing for a string -- is an important addition to the getRandom function. Given the tree-like data structure of the candidates' word-bjects, I'm using recursion to keep going deeper until a string is returned. For example, getting a random verb goes three levels deep (randomverb-randomtense-matchingperson), whereas a random adjective is just one level.

var randomUntilString = function(input) { // This recursive randomizer runs until you get a string. This is useful for getting a random verb from the tree-like structure of verb-objects.
  var index = 0, result;
  if (Array.isArray(input)) {
    index = randomArrayElement(input);
    result = input[index];
    if (isString(result)) { // Here's what I'm talking about up there^^^
      return result;
    } else {
      return randomUntilString(result); // The recursion until you get a string.
    }
  } else {
    index = randomObjectKey(input);
    var keyName = Object.keys(input)[index];
    result = input[keyName];
    if (isString(result)) {
      return result;
    } else {
      return randomUntilString(result);
    }
  }
}

var random = function(input) { // Sometimes I'll just want a random object, without going on until I get a string.
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
