//A much-needed new feature. Instead of having a noun/verb/adjective/etc object for EACH candidate, I'm adding a "speaker" property to each word using a lookup of all the candidate's words.
var addSpeaker = function(speakerName, speakerWordsArray) {
  return function(object) {
    for (var key in object) {
      speakerWordsArray.forEach(function(word) {
        if(object[key].lookupValue === word) {
          object[key].speaker.push(speakerName);
        };
      });
    };
    return object;
  };
};

var addAllSpeakers = function(myCandidates, myNames, myWords) {
  var partsOfSpeech = [verbs];
  myCandidates.forEach(function(candidate) {
    var addCurrentSpeaker = addSpeaker(candidate[myNames], candidate[myWords]);
    partsOfSpeech.forEach(function(type) {
      addCurrentSpeaker(type);
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


//adjectives, adverbs, articles, nouns, prepositions,
