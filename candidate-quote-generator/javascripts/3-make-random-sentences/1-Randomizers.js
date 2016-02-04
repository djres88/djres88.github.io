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

var clinton = {
  nametag: "Hillary Clinton",
  words: candidates["clinton"]
}
var trump = {
  nametag: "Donald Trump",
  words: candidates["trump"]
}
var sanders = {
  nametag: "Bernie Sanders",
  words: candidates["sanders"]
}
var cruz = {
  nametag: "Ted Cruz",
  words: candidates["cruz"]
}

function getRandomWord(partOfSpeech, candidate) {
  var wordsOfThisType = candidate.filter(function(words) {
    return words.speech === partOfSpeech;
  })
  return random(wordsOfThisType);
}
