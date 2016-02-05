function randomObjectKey(input) {
  return Math.floor(Math.random()*Object.keys(input).length);
}

function randomArrayElement(input) {
  return Math.floor(Math.random()*input.length);
}

var getRandom = function(input) { // Sometimes I'll just want a random object, without going on until I get a string.
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

//If we're doing a random matchup, we'll want to make sure the candidates are different.
var myCandidate1 = getRandom(candidates);
function findOpponent() {
  var opponent = getRandom(candidates);
  if (opponent === myCandidate1) {
    return findOpponent(candidates);
  } else {
    return opponent;
  }
}
var myCandidate2 = findOpponent();

//Isolate the words from the nametag.
var candidate1words = myCandidate1.words;
var candidate1name = myCandidate1.nametag;
var candidate2words = myCandidate2.words;
var candidate2name = myCandidate2.nametag;
