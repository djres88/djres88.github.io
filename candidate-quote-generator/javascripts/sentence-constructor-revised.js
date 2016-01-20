var articlesForNouns = function(string) {
  var array = string.split(" ");
  array.forEach(function(noun, index) {
    if (noun["needsArticle"]) {
      if (noun-1 === "adjective") {
        array.splice(index-1, 0, getRandom(articlesEtc[person]));
      } else {
        array.splice(index, 0, getRandom(articlesEtc[person]));
      }
    }
  })
  return array.join(' ');
}

var getSubject = function(string) {
  var array = string.split(" ");
  var mySubject;
  array.forEach(function(word) {
    if (word === "noun-subject") {
      mySubject = getRandom(noun);
    }
  });
  return mySubject;
};

var generateSentence = function() {
  var mySentence = getRandom(sentenceType).split(" ");
  var subjectNoun = getSubject(mySentence);
  var mySubject = subjectNoun["word"];
  var myConjugation = subjectNoun["person"];

  mySentence.forEach(function(word, index) {
    if (word === "noun-subject") {
      mySentence[index] = subject;
    } else if (word === "noun") {
      mySentence[index] = getRandom(noun)["word"];
    } else if (word === "adjective") {
      mySentence[index] = getRandom(adjective);
    } else if (word === "adverb") {
      mySentence[index] = getRandom(adverb);
    } else if (word === "verb") {
      mySentence[index] = getRandom(verb)[myConjugation];
    }
  })
};



  mySentence = formatSentence(mySentence);
  return mySentence;
};

var formatSentence = function(sentence) {
  sentence = sentence.join(" ");
  sentence = sentence.replace(/ ,/g, ",");

  if (/what|which|when|where|who| how/g.test(sentence)) {
    var punctuation = "?";
  } else {
    var punctuation = ".";
  };

  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + punctuation;
}
