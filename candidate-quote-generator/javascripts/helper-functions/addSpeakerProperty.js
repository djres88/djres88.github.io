//Instead of having a noun/verb/adjective/etc object for EACH candidate, I'm adding a "speaker" property to each word-object. This method makes for an easy cut/paste of words into the "wordlist" files.
var addSpeaker = function(candidateName, candidateWords) {
  return function(allWords) {
    allWords.map(function(word) {
      //The return function checks every word in the object for a matching word in the candidate's db. If it finds one, it adds the candidate's name to the "speaker" property in the word object.
      candidateWords.forEach(function(candidateWord) {
        if (candidateWord === word.lookupValue) {
          word.speaker.push(candidateName);
        };
        word.speaker = unique(word.speaker);
      });
      return word;
    });
  };
};

var partsOfSpeech = [verbs];

var addAllSpeakers = function(myCandidates, myNames, myWords) {
  myCandidates.forEach(function(candidate) {
    var addCurrentSpeaker = addSpeaker(candidate[myNames], candidate[myWords]);
    partsOfSpeech.forEach(function(partOfSpeech) {
      addCurrentSpeaker(partOfSpeech);
    });
  });
  return partsOfSpeech;
};

var objectsWithSpeakers = addAllSpeakers(candidates, "speaker", "words");

// var adjectives = objectsWithSpeakers[0];
// var adverbs = objectsWithSpeakers[1];
// var articles = objectsWithSpeakers[2];
// var nouns = objectsWithSpeakers[3];
// var prepositions = objectsWithSpeakers[4];
var verbs = objectsWithSpeakers[0];

// adjectives, adverbs, articles, nouns, prepositions,
