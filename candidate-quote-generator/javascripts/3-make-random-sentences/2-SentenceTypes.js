//The following array includes several potential sentence types. Each sentence type is followed by the position of the subject
var sentenceStructure = [
  "subject transitive-verb noun"
];

var subjectPosition; //Gets the index of the subject in the sentence. Used for subject/verb agreement later.
var tenses = ["present", "future"]; // I'll add the past tense once I find a reliable table of irregular verb patterns.

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
var newSentence = sentenceOfObjects(getRandom(sentenceStructure), candidate1words);

function isAdjective(word) {
  if (word["speech"] === "adjective") {
    return true;
  }
}

function isVerb(word) {
  if (word["speech"].match(/-verb/)) {
    return true;
  }
}

function addArticle(sentence, index) {
  if (index === 0) {
    sentence.splice(index, 0, getRandom(sentence[index]["articles"]));
  } else if (isAdjective(sentence[index-1])) {
    sentence.splice(index-1, 0, getRandom(sentence[index]["articles"]));
  } else {
    sentence.splice(index, 0, getRandom(sentence[index]["articles"]));
  }
}


function generateFinalSentence(sentence) {
  for (var i = 0; i < sentence.length; i++) {
    if (isVerb(sentence[i])) {
      var tense = getRandom(tense);
      var person = sentence[subjectPosition]["person"];
      getWord = sentence[i][tense][person]; // in a random tense, find a verb conjugation that matches the person of the subject
    } else if (isNoun(sentence[i])) {
      addArticle(sentence, i);
      i++; // need to increment one extra since the sentence is now one word longer with the added article.
    } else {
      getWord = sentence[i]["word"];
    }
  }
  return sentence;
}



var mySentence = [
  {word: "president", speech: "singular-noun", articles: ["the", "a"] },
  {word: "guy", speech: "adjective", articles: ["the", "a"] },
  {word: "guy", speech: "plural-noun", articles: ["the", "a"] }
];

var n = generateFinalSentence(mySentence)


  //   sentence[i] = getWord; // replace this word with the formatted word from the object
  // }
  // return sentence.join(" ");

}
