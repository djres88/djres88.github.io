//Takes an array of objects - a verb string and its type (transitive or intransitive) - and generates a new array of verb objects with the verb's most common conjugations. Each object contains the verb and its conjugations for five persons (I-you-s/he-we-they) and seven tenses. There's still a need to edit the irregular verbs later; nonetheless, this function saves a lot of time.
var verbify = function(allVerbs) {

  var conjugatedVerbObjects = [];

  allVerbs.forEach(function(object) {
    var newVerbObject = {}, verb = object.word, type = object.kind, root;

    //Grab the last letter of the verb for conjugation/spelling. If the last letter is an e, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).
    var checkLastLetter = verb[verb.length-1];
    if (checkLastLetter.match(/[e]/)) {
      root = verb.split("");
      root.pop([root.length-1]);
      root = root.join("");
    } else {
      root = verb;
    };

    //Create lookup value property to aid in adding speaker, verbType properties.
    newVerbObject.lookupValue = verb;
    newVerbObject.speaker = [];
    newVerbObject.verbType = type;

    //Create verb objects.
    newVerbObject.present = {first: verb, second: verb, third: verb + "s", plural: verb};
    newVerbObject.past = {first: root + "ed", second: root + "ed", third: root + "ed", plural: root + "ed"};
    newVerbObject.future = {first: "will " + verb, second: "will " + verb, third: "will " + verb, plural: "will " + verb};
    newVerbObject.presentProgressive = {first: "am " + root + "ing", second: "are " + root + "ing", third: "is " + root + "ing", plural: "are " + root + "ing"};
    newVerbObject.presentPerfect = {first: "have " + root + "ed", second: "have " + root + "ed", third: "has " + root + "ed", plural: "have " + root + "ed"};
    newVerbObject.pastProgressive = {first: "was " + root + "ing", second: "were " + root + "ing", third: "was " + root + "ing", plural: "were " + root + "ing"};
    newVerbObject.pastPerfect = {first: "had " + root + "ed", second: "had " + root + "ed", third: "had " + root + "ed", plural: "had " + root + "ed"};

    conjugatedVerbObjects.push(newVerbObject);
  });

  return conjugatedVerbObjects;
};



// //Testing in node/browser:
// var testObject = [
//   {
//     word: "believe",
//     kind: "intransitive"
//   }
// ]
//
// var verbs = verbify(testObject);
