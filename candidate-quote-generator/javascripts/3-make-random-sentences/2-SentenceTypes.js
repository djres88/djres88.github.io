//The following array includes several potential sentence types. The SENTENCE GENERATOR -- see function below -- randomly selects one of these types before filling in the sentence with words from a random candidate's Twitter feed. You can add new sentence types to the end of the array (but don't forget the commas). NOTE: for formatting reasons, commas should be preceded by a space.

var sentenceStructure = [
  "subject transitive-verb singular-noun"
];

function wordOfThisType(partOfSpeech, candidateWords) {
  var wordsOfThisType = candidateWords.filter(function(entry) {
    return entry["speech"] === partOfSpeech;
  });
  return getRandom(wordsOfThisType);
}

//The following function constructs a series of word objects according to a randomly selected "sentence type".
function sentenceOfObjects(string, candidate) {
  var arr = string.split(" "); // splits the string into an array so that you can look up each part-of-speech type.
  var objectsInSentence = arr.map(function(word) {
    return pullRandomWord(word, candidate);
  });
  return objectsInSentence;
}

//Now what's needed is to "conjugate" the verb according to the noun-subject's part of speech, and to pull the strings (words) from each object.


//Run the functions
var newSentence = allWordsRandom(getRandom(sentenceStructure), candidate1words);
