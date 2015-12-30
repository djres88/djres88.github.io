var adjective = ["typical"];
var subject = ["I", "you", "we"];
var adverb = ["slowly"];
var verb = ["walk"];
var object = ["the wall"];

var sentenceType = [
  ["subject"] + " " + ["adverb"] + " " + ["verb"] + " " + ["adjective"] + " " + ["object"],
  ["subject"] + " " + ["verb"] + " " + ["object"]
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
    } else if (mySentence[i] === "object") {
      mySentence[i] = getRandom(object);
    }
  };
  return mySentence.join(" ");
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
