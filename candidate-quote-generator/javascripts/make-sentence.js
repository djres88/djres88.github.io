// testing
var adjective = ["typical", "radical", "Islamist", "unbelievable"];
var subject = ["I", "you", "we", "Obama", "ISIS", "debt"];
var adverb = ["slowly", "quickly", "repeatedly"];
var verb = ["build", "blow up", "need", "fire", "glow"];
var object = ["wall", "debt ceiling", "the White House"];

var sentenceType = [
  "subject adverb verb adjective object",
  "subject verb object and the subject verb object",
  "subject verb object",
  "subject only verb when subject verb object",
  "The adjective subject cannot verb",
  "We need to verb the adjective object",
  "I promise to verb our object",
  "subject verb object",
  "subject must adverb verb object"
];

function generateSentence() {
  var mySentence = getRandom(sentenceType).split(" ");
  for (var i = 0; i < mySentence.length; i++) {
    if (mySentence[i] === "subject") {
      mySentence[i] = getRandom(subject);
    } if (mySentence[i] === "adjective") {
      mySentence[i] = getRandom(adjective);
    } if (mySentence[i] === "adverb") {
      mySentence[i] = getRandom(adverb);
    } if (mySentence[i] === "verb") {
      mySentence[i] = getRandom(verb);
    } if (mySentence[i] === "object") {
      mySentence[i] = getRandom(object);
    }
  };
  mySentence = mySentence.join(" ");
  mySentence = mySentence.charAt(0).toUpperCase() + mySentence.slice(1) + ".";
  return mySentence;
}

function conjugate(subject) {
  if (mySubject === "first") {
    myVerb = myVerb[0];
  } if (mySubject === "second") {
    myVerb = myVerb[1];
  } if (mySubject === "third") {
    myVerb = myVerb[2];
  } if (mySubject === "first-plural") {
    myVerb = myVerb[3];
  } if (mySubject === "third-plural") {
    myVerb = myVerb[4];
  }
};
