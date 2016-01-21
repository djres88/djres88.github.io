var filter = function(array, criteria) {
  var newArray = [];
  array.forEach(function(element) {
    if(criteria) {
      newArray.push(element)
    }
  });
  return newArray;
};


//New word objects should ALL be objects, have speaker as an element of the object.
var candidateWords = filter(adjective, function(word) {
  return word.speaker === myCandidate;
})

})



function generateSentence() {
  var wordType = ["noun", "verb", "adjective", "adverb", "article"];
  var mySentence = getRandom(sentenceType).split(' ');
  mySentence.forEach(function(word, index) {
    wordType.forEach(function(type) {
      if(word === type) {
        var wordsOfSameType = window[type];
        var myWord = getRandom(wordsOfSameType);
      }

    });
  });
  return mySentence.join(' ');
}


sentenceArray.forEach(function(word, index) {
  if(word === "noun-subject") {
    sentenceArray[index] = getRandom(noun)["word"];
    var person = sentence
  }
  if(word === "")
});
