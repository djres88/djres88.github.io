//Given a part of speech and a candidate, this function looks in the candidate's vocabulary for words that match the part of speech and returns a random one.
function randomWordOfGivenType(partOfSpeech, candidate) {
  var wordOfThisType = candidate.filter(function(entry) {
    return entry["speech"].match(partOfSpeech);
  });
  return getRandom(wordOfThisType);
}

function tagSubject(word, candidateWords) {
  var subject = randomWordOfGivenType("noun", candidateWords);
  subject.isSubject = "yes"
  return subject;
}

function randomSentenceOfObjects(grammaticalString, candidateWords) {
  var grammaticalArray = grammaticalString.split(" "); // splits the string into an array so that you can look up each part-of-speech type.
  var sentence = grammaticalArray.map(function(word) {
    if (word === "subject") {
      return tagSubject(word, candidateWords);
    } else {// Add a "tag" to the subject. Used to conjugate later.
    return randomWordOfGivenType(word, candidateWords);
    }
  });

  return sentence
}

function formatWordOrder(sentence) {
  var wordsInCorrectOrder = [];
  var spliceAtAdjective = wordsInCorrectOrder.length-1;

  sentence.forEach(function(word, idx) {
    if (isNoun(word)) {
      var articlesForThisWord = word["articles"]
      if (idx === 0 || !isAdjective(sentence[idx-1])) { // As long as there's no adjective preceding the noun, the article goes directly before the noun. Otherwise...
        wordsInCorrectOrder.push(getRandom(articlesForThisWord), word) //
      } else { // Splice in a random article BEFORE the last word in the array wordsInCorrectOrder, because the last word is an adjective (the only condition not satisfied by the if-statement above). After that, you can push the noun onto the end of the array. This is how you get "the green car" rather than "green the car".
        wordsInCorrectOrder.splice(spliceAtAdjective, 0, getRandom(articlesForThisWord))
        wordsInCorrectOrder.push(word)
      }
    } else { // If the word is not a noun, just push it onto the array.
      wordsInCorrectOrder.push(word)
    }
  })

  return wordsInCorrectOrder;
}
