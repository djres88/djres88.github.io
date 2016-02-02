//The following functions reduce the number of word-objects needed by adding a "speaker" property to each word-object. For example, if all four candidates have the noun "president" in their wordlist (see candidate data), "president" will still as an object appear only once.
//A couple variables are needed (these will make it easier to add new parts of speech, new candidates if necc).
var candidate = [
  {name: "hillary-clinton", wordlist: clintonWords},
  {name: "donald-trump", wordlist: trumpWords},
  {name: "ted-cruz", wordlist: cruzWords},
  {name: "bernie-sanders", wordlist: sandersWords}
];

//These functions only need to run one time: immediately after the updated candidate words are transferred to candidate-data/wordlist.
var addSpeaker = function(dictionary) {
  return function(candidateName, candidateVocab) {
    candidateVocab.forEach(function(wordInVocab) {
      dictionary.forEach(function(wordInDictionary) {
        if (wordInVocab === wordInDictionary.word) { //The return function checks every word in the object against every word in the candidate's db.
          word.speaker.push(candidateName); // If it finds a match, we push the candidate's name to the word.
        };
        word.speaker = unique(word.speaker); // Just a check against a word showing up 2x.
      });
    });
  };
};

// We have to do this for each word type (of which there are 6) and each candidate (4), which would mean 24 function calls. This function makes things slightly shorter, but it doesn't seem cleaner to me... Feedback appreciated!
var addAllSpeakers = function(myCandidates) {
  myCandidates.forEach(function(candidate) {
    var addCurrentSpeaker = addSpeaker(candidate["name"], candidate["wordlist"]);
    partOfSpeech.forEach(function(arrayOfWordObjects) {
      addCurrentSpeaker(arrayOfWordObjects);
    });
  });
  return partOfSpeech;
};

addAllSpeakers(candidates, "speaker", "words");

var adjective = partOfSpeech[0];
var adverb = partOfSpeech[1];
var article = partOfSpeech[2];
var noun = partOfSpeech[3];
var preposition = partOfSpeech[4];
var verb = partOfSpeech[5];
