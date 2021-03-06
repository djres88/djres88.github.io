//sentenceStructure includes several potential sentence types. Each sentence type is followed by the position of the subject
var sentenceStructure = [
  "subject transitive-verb noun"
];

var subjectPosition; //Gets the index of the subject in the sentence. Used for subject/verb agreement later.
var tense = ["present", "future"]; // I'll add the past tense once I find a reliable table of irregular verb patterns.

function isAdjective(word) {
  return Boolean(word["speech"] === "adjective")
}

function isVerb(word) {
  return Boolean(word["speech"].match(/-verb/))
}

function addArticle(sentence, index) {
  var article_for_this_word = sentence[index]["articles"];
  if (index === 0) {
    sentence.splice(index, 0, getRandom(article_for_this_word));
  } else if (isAdjective(sentence[index-1])) {
    sentence.splice(index-1, 0, getRandom(article_for_this_word));
  } else {
    sentence.splice(index, 0, getRandom(article_for_this_word));
  }
}

function randomMatchingWord(partOfSpeech, candidateWords) {
  var wordsOfThisType = candidateWords.filter(function(entry) {
    return entry["speech"] === partOfSpeech;
  });

  if (wordsOfThisType[0]) { // Test whether the array has any elements.
    return getRandom(wordsOfThisType);
  } else if (partOfSpeech === "subject" || partOfSpeech === "noun") { //Replace the subject and all unspecified nouns with a random noun.
    var possibleNouns = ["singular-noun", "plural-noun", "mass-noun", "pronoun-singular", "pronoun-plural", "proper-noun"];
    return randomMatchingWord(getRandom(possibleNouns), candidateWords); //rerun the function recursively, this time with a part of speech that will trigger the first logic.
  } else {
    return "..."; // A catchall in case I mess up one of the sentence structures. Instead of looking like... error... looks like... pause.
  }
}

//The following function constructs a series of word objects according to a randomly selected "sentence type".
function sentenceOfObjects(string, candidate) {
  var arr = string.split(" "); // splits the string into an array so that you can look up each part-of-speech type.
  subjectPosition = arr.indexOf("subject")
  var objectsInSentence = arr.map(function(word) {
    return randomMatchingWord(word, candidate);
  });
  return objectsInSentence;
}

// function conjugate(sentence) {
//   var person = sentence[subjectPosition].
// }
//Now what's needed is to "conjugate" the verb according to the noun-subject's part of speech, and to pull the strings (words) from each object.


//Run the functions

function generateFinalSentence() {
  var sentence = sentenceOfObjects(getRandom(sentenceStructure), candidate1words);
  for (var i = 0; i < sentence.length; i++) {

    var word = sentence[i];
    var updated_word;

    if (word === "") {
      break;
    } else if (isVerb(word)) {
      var myTense = getRandom(tense);
      var person = sentence[subjectPosition]["person"];
      updated_word = word[tense][person]; // in a random tense, find a verb conjugation that matches the person of the subject
    } else if (isNoun(word)) {
      addArticle(sentence, i);
      i++; // need to increment one extra since the sentence is now one word longer with the added article.
    } else {
      updated_word = word["word"];
    }
  }
  return sentence;
}

generateFinalSentence()

  //   sentence[i] = getWord; // replace this word with the formatted word from the object
  // }
  // return sentence.join(" ");
