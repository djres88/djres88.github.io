//Takes an array of objects - a verb string and its type (transitive or intransitive) - and generates a new array of verb objects with the verb's most common conjugations. Each object contains the verb and its conjugations for five persons (I-you-s/he-we-they) and seven tenses. There's still a need to edit the irregular verbs later; nonetheless, this function saves a lot of time.

var makeVerbObjects = function(allVerbs) {
  return allVerbs.map(function(verb) {
    var root = verb.lookupValue;
    var rootIrregular = formatRootIfIrregular(root);

    verb.speaker = []; // will push the speakers later with addSpeaker.

    //Add conjugations as properties in each verb-object.
    verb.present = {first: root, second: root, third: root + "s", plural: root};
    verb.past = {first: rootIrregular + "ed", second: rootIrregular + "ed", third: rootIrregular + "ed", plural: rootIrregular + "ed"};
    verb.future = {first: "will " + root, second: "will " + root, third: "will " + root, plural: "will " + root};
    verb.presentProgressive = {first: "am " + rootIrregular + "ing", second: "are " + rootIrregular + "ing", third: "is " + rootIrregular + "ing", plural: "are " + rootIrregular + "ing"};
    verb.presentPerfect = {first: "have " + rootIrregular + "ed", second: "have " + rootIrregular + "ed", third: "has " + rootIrregular + "ed", plural: "have " + rootIrregular + "ed"};
    verb.pastProgressive = {first: "was " + rootIrregular + "ing", second: "were " + rootIrregular + "ing", third: "was " + rootIrregular + "ing", plural: "were " + rootIrregular + "ing"};
    verb.pastPerfect = {first: "had " + rootIrregular + "ed", second: "had " + rootIrregular + "ed", third: "had " + rootIrregular + "ed", plural: "had " + rootIrregular + "ed"};

    return verb;
  });
};

//Grab the last letter of the verb for conjugation/spelling. If the last letter is an e, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).
function formatRootIfIrregular(word) {
  var lastLetter, newRoot;
  lastLetter = word[word.length-1];
    if (lastLetter.match(/[e]/)) {
      newRoot = word.split("").pop([lastLetter]).join(""); // splits the word into an array of its component letters, removes the last letter from the array, and rejoins the letters into a string.
    }
  return newRoot || word; // returns the newRoot or, if newRoot is undefined, returns the input word unchanged.
}


// //Testing in node/browser:
var testObject = [
  {
    lookupValue: "believe",
    verbType: "intransitive"
  }
]
// //
// var verbs = makeVerbObjects(testObject);
