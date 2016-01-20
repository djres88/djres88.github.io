//Takes an array of verb-strings and generates an array of JS Objects, where each object contains the verb along with its conjugations for five persons (I-you-s/he-we-they) and six tenses (present and past, as well as the progressive and perfect tenses for both present and past). I still need to manually edit the irregular verbs later, but still quite a bit faster than copy/pasting
var verbify = function(array) {
  var arrayOfVerbObjects = [];
  array.forEach(function(verb) {
    var verbObject = {}, pConjugation;

    //Grab the last letter of the verb for conjugation/spelling. If the last letter is a vowel, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).
    var lastLetter = verb[verb.length-1];
    if (lastLetter.match(/[aeiou]/)) {
      pConjugation = verb.split("");
      pConjugation.pop([pConjugation.length-1]);
      pConjugation = pConjugation.join("");
    } else {
      pConjugation = verb;
    };

    //Create object
    verbObject.present = {first: verb, second: verb, third: verb + "s", plural: verb};
    verbObject.past = {first: pConjugation + "ed", second: pConjugation + "ed", third: pConjugation + "ed", plural: pConjugation + "ed"};
    verbObject.future = {first: "will " + verb, second: "will " + verb, third: "will " + verb, plural: "will " + verb};
    verbObject.presentProgressive = {first: "am " + pConjugation + "ing", second: "are " + pConjugation + "ing", third: "is " + pConjugation + "ing", plural: "are " + pConjugation + "ing"};
    verbObject.presentPerfect = {first: "have " + pConjugation + "ed", second: "have " + pConjugation + "ed", third: "has " + pConjugation + "ed", plural: "have " + pConjugation + "ed"};
    verbObject.pastProgressive = {first: "was " + pConjugation + "ing", second: "were " + pConjugation + "ing", third: "was " + pConjugation + "ing", plural: "were " + pConjugation + "ing"};
    verbObject.pastPerfect = {first: "had " + pConjugation + "ed", second: "had " + pConjugation + "ed", third: "had " + pConjugation + "ed", plural: "had " + pConjugation + "ed"};

    arrayOfVerbObjects.push(verbObject);
  });
  return arrayOfVerbObjects;
};

//Testing in node:
var testArray = ["spook", "warn", "believe", "go"];
var conjugated = verbify(testArray);
