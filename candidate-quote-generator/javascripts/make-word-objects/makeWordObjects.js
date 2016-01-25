var candidates = [cruz, clinton, sanders, trump];

//Takes each candidate's unformatted array of word-objects and, for each part of speech, returns a new array of objects with relevant properties for that part of speech. For example, the function `makeVerbObjects` adds a bunch of conjugations for each word of type "verb".

function makeNouns(candidate) {
  var nouns = candidate.filter(function(candidateWord) {
    return candidateWord.speech.match("noun");
  });
  return nouns;
}


var makeVerbObjects = function(allVerbs) {

  return allVerbs.map(function(verb) {

    var root = verb.lookupValue;
    var rootIrregular = formatRootIfIrregular(root);

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


// // //Testing in node/browser:
// var testObject = [
//   {
//     lookupValue: "believe",
//     verbType: "intransitive"
//   }
// ]
// // //
// // var verbs = makeVerbObjects(testObject);
