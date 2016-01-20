//Takes an array of verb-strings and generates an array of JS Objects, where each object contains the verb along with its conjugations for five persons (I-you-s/he-we-they) and six tenses (present and past, as well as the progressive and perfect tenses for both present and past). I still need to manually edit the irregular verbs later, but still quite a bit faster than copy/pasting
var verbify = function(array) {
  var arrayOfVerbObjects = [];
  array.forEach(function(verb) {
    var verbObject = {}, root;

    //Grab the last letter of the verb for conjugation/spelling. If the last letter is a vowel, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).
    var lastLetter = verb[verb.length-1];
    if (lastLetter.match(/[aeiou]/)) {
      root = verb.split("");
      root.pop([root.length-1]);
      root = root.join("");
    } else {
      root = verb;
    };

    //Create object
    verbObject.present = {first: verb, second: verb, third: verb + "s", plural: verb};
    verbObject.past = {first: root + "ed", second: root + "ed", third: root + "ed", plural: root + "ed"};
    verbObject.future = {first: "will " + verb, second: "will " + verb, third: "will " + verb, plural: "will " + verb};
    verbObject.presentProgressive = {first: "am " + root + "ing", second: "are " + root + "ing", third: "is " + root + "ing", plural: "are " + root + "ing"};
    verbObject.presentPerfect = {first: "have " + root + "ed", second: "have " + root + "ed", third: "has " + root + "ed", plural: "have " + root + "ed"};
    verbObject.pastProgressive = {first: "was " + root + "ing", second: "were " + root + "ing", third: "was " + root + "ing", plural: "were " + root + "ing"};
    verbObject.pastPerfect = {first: "had " + root + "ed", second: "had " + root + "ed", third: "had " + root + "ed", plural: "had " + root + "ed"};

    arrayOfVerbObjects.push(verbObject);
  });
  return arrayOfVerbObjects;
};

//Testing in node:
var testArray = ["spook", "warn", "believe", "go"];
var conjugated = verbify(testArray);
