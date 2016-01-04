// testing
var adjective = ["typical", "radical", "Islamist", "unbelievable"];
var noun = [
  {
    word: "Obama",
    needsArticle: "no",
    person: "third"
  },
  {
    word: "White House",
    needsArticle: "yes",
    person: "third"
  },
  {
    word: "democrats",
    needsArticle: "no",
    person: "third-plural"
  }
]
// indicate in noun-object whether the object needs an article? Already need to say whether singular/plural...
var adverb = ["slowly", "quickly", "repeatedly"];


var verb = [
  {
    first: "build",
    second: "build",
    third: "builds",
    firstPlural: "build",
    thirdPlural: "build"
  },
  {
    first: "glow",
    second: "glow",
    third: "glows",
    firstPlural: "glow",
    thirdPlural: "glow"
  }
]

var verbs = ["build", "blow up", "need", "fire", "glow", "is", "find", "make", "win"];
var articlesEtc = ["our", "the", "your"];

//The following array includes several potential sentence types. The SENTENCE GENERATOR -- see function below -- randomly selects one of these types before filling in the sentence with words from a random candidate's Twitter feed. You can add new sentence types to the end of the array (but don't forget the commas).
var sentenceType = [
  "noun-subject adverb verb adjective noun",
  // "noun verb noun and noun verb noun",
  // "noun verb when noun verb noun",
  // "adjective noun cannot verb",
  // "I promise to verb noun",
  "noun-subject verb noun"
];

var tense = ["present", "past", "future"];

function conjugate(noun) {
  if (person === "first") {
    myVerb = myVerb[0];
  } if (person === "second") {
    myVerb = myVerb[1];
  } if (person === "third") {
    myVerb = myVerb[2];
  } if (person === "first-plural") {
    myVerb = myVerb[3];
  } if (person === "third-plural") {
    myVerb = myVerb[4];
  }
};


function generateSentence() {
  var mySentence = getRandom(sentenceType).split(" ");
  // Replace nouns first. To maintain English's "article/possessive- (adjective)- noun" syntax, you need keep the "adjective" strings intact through the initial loop.
  for (var i = 0; i < mySentence.length; i++) {
    if (mySentence[i] === "noun" || mySentence[i] === "noun-subject") {
      var myNoun = getRandom(noun);
      //If subject, grab person to run Subject-Verb agreement:
      if (mySentence[i] == "noun-subject") {
        var conjugation = myNoun["person"];
      }
      mySentence[i] = myNoun["word"];
      //Add an article or possessive, if necessary.
      if (myNoun["needsArticle"] === "yes") {
        //Add the article to accomodate an optional/random adjective in the middle. (English is silly that way: "the car" with an adjective becomes "the green car." That's versus, say, Spanish, where the adjective is just tagged onto the end: "el coche" becomes "el coche verde.")
        if (mySentence[i-1] === "adjective") {
          mySentence.splice(i-1, 0, getRandom(articlesEtc));
        } else {
          mySentence.splice(i, 0, getRandom(articlesEtc));
        }
      }
    }
  }
  // Cycle through the sentence and replace other parts of speech with a random word:
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
