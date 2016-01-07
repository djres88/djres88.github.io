// //For Node
// //Load random selector function
// var r = require('./randomize.js');
// //Load sentence types.
// var s = require('./sentence-types.js');
// //Load words db.
// var w = require('../words-db/testing.js');

function generateSentence() {
  var mySentence = getRandom(sentenceType).split(" ");
  // Replace nouns first. To maintain English's "article/possessive- (adjective)- noun" syntax, you need keep the "adjective" strings intact through the initial loop.
  for (var i = 0; i < mySentence.length; i++) {
    if (mySentence[i] === "noun" || mySentence[i] === "noun-subject") {
      var myNoun = getRandom(noun);
      var person = myNoun["person"];
      //If the current noun is the subject, grab the subject's person and store for conjugating the verb:
      if (mySentence[i] == "noun-subject") {
        var conjugation = person;
      }
      mySentence[i] = myNoun["word"];
      //Add an article or possessive, if myNoun requires one.
      if (myNoun["needsArticle"] === "yes") {
        //Add the article to accomodate an optional/random adjective in the middle. (English is silly that way: "the car" with an adjective becomes "the green car." That's versus, say, Spanish, where the adjective is just tagged onto the end: "el coche" becomes "el coche verde.")
        if (mySentence[i-1] === "adjective") {
          mySentence.splice(i-1, 0, getRandom(articlesEtc[person]));
        } else {
          mySentence.splice(i, 0, getRandom(articlesEtc[person]));
        }
      }
    }
  }
  // Cycle through the sentence and replace other parts of speech (adjectives, adverbs, and verbs) with a random word from the candidate's vocabulary:
  for (var i = 0; i < mySentence.length; i++) {
    if (mySentence[i] === "adjective") {
      mySentence[i] = getRandom(adjective);
    }
    if (mySentence[i] === "adverb") {
      mySentence[i] = getRandom(adverb);
    }
    if (mySentence[i] === "verb") {
      mySentence[i] = getRandom(verb)[conjugation];
    }
  };
  mySentence = mySentence.join(" ");
  mySentence = mySentence.charAt(0).toUpperCase() + mySentence.slice(1) + ".";
  return mySentence;
}
