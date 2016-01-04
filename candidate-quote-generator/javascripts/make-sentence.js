// testing
var adjective = ["typical", "radical", "Islamist", "unbelievable"];
var subject = ["Obama", "ISIS", "debt"];
var adverb = ["slowly", "quickly", "repeatedly"];
var verb = ["build", "blow up", "need", "fire", "glow"];
var object = ["wall", "debt ceiling", "White House"];

//The following array includes several potential sentence types. The SENTENCE GENERATOR -- see function below -- randomly selects one of these types before filling in the sentence with words from a random candidate's Twitter feed. You can add new sentence types to the end of the array (but don't forget the commas).
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

var person = ["first", "second", "third", "first-plural", "third-plural"];

function conjugate(subject) {
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
  var myPerson = getRandom(person);
  var mySentence = getRandom(sentenceType).split(" ");
  for (var i = 0; i < mySentence.length; i++) {
    if (mySentence[i] === "subject") {
      mySentence[i] = getRandom(subject)[myPerson];
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
