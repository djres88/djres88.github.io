//NOUNS

//For adding properties to nouns (ran one time at the start). Most non-proper nouns take "a/an/the", so we'll start there.
function isNoun(entry) {
  if (entry["speech"].match(/noun/)) {
    return true;
  }
}
function isSingular(entry) {
  if (entry["speech"] === "singular noun") {
    return true;
  }
}
function isPlural(entry) {
  if (entry["speech"].match(/plural/)) {
    return true;
  }
}
function startsWithVowel(entry) {
  if(entry["word"].charAt(0).match(/[aeiou]/)) {
    return true;
  }
}
// Can just manually edit part of speech for the pronouns; there aren't that many.

var possessives = dictionaryOriginal.filter(function(entry) {
  return entry["speech"].match(/possessive/)
}).map(function(word) {
 return word["word"];
});

var quanitifiersSingular = dictionaryOriginal.filter(function(entry) {
  return entry["speech"] === "quantifier singular";
}).map(function(word) {
  return word["word"];
});

var quanitifiersPlural = dictionaryOriginal.filter(function(entry) {
  return entry["speech"] === "quantifier plural";
}).map(function(word) {
 return word["word"];
});

var dictionaryEditedNouns = dictionaryOriginal.map(function(entry) {
  if isNoun(entry) {
    if isSingular(entry) {
      entry.person = "third";
      if startsWithVowel(entry) {
        entry.articles = ["the", "an", possessives, quantifiersSingular];
      } else {
        entry.articles = ["the", "a", possessives, quantifiersSingular];
      }
    }
    else if isPlural(entry) {
      entry.person = "plural";
      entry.articles = ["", possessives, quantifiersPlural]; // Adding the other articles as variables is by design. I want it to be likelier that getRandom returns the/a/an or, in the cases of plural nouns, returns blank.
    } else { // Other nouns that do not receive an article, namely pronouns and proper nouns, will automatically draw a blank string. It seems easier for the sentence generator to ALWAYS draw a random article (even though, for proper nouns, it will be blank) than to add another level of logic — I would need to something like "draw an article if the article property exists." This seems easier.
      entry.articles = [""];
      //Need to add the person (first/second/third/plural) manually. There aren't that many, so it's pretty quick to filter and change.
    }
  }
}

//VERBS

//makeVerbs adds conjugated verb forms to each verb in the dictionary. English has TONS of irregular verbs, though, and not all of them follow an easily identifiable pattern. There are some high-level patterns I can code in — like if the verb ends in "e" or "y", I can remove/replace the last letter before conjugating it — but otherwise, there's no real advantage to coding in all the specific irregulars beforehand (buy/bought, build/built, give/gave). It's easier to run this code and then just find/replace the irregular verbs in Word.
function makeVerbs(dict) {
  return candidate.map(function(verb) {
    if (verb["speech"].match(/verb\s/)) {

      var root = verb["word"];
      var rootIrregular = irregularPatterns(root);

      //Add conjugations as properties in each verb-object.
      verb.present = {first: root, second: root, third: root + "s", plural: root};
      verb.past = {first: rootIrregular + "ed", second: rootIrregular + "ed", third: rootIrregular + "ed", plural: rootIrregular + "ed"};
      verb.future = {first: "will " + root, second: "will " + root, third: "will " + root, plural: "will " + root};
      verb.presentProgressive = {first: "am " + root + "ing", second: "are " + root + "ing", third: "is " + root + "ing", plural: "are " + root + "ing"};
      verb.presentPerfect = {first: "have " + rootIrregular + "ed", second: "have " + rootIrregular + "ed", third: "has " + rootIrregular + "ed", plural: "have " + rootIrregular + "ed"};
      verb.pastProgressive = {first: "was " + root + "ing", second: "were " + root + "ing", third: "was " + root + "ing", plural: "were " + root + "ing"};
      verb.pastPerfect = {first: "had " + rootIrregular + "ed", second: "had " + rootIrregular + "ed", third: "had " + rootIrregular + "ed", plural: "had " + rootIrregular + "ed"};
    }
    return verb;
  });
}

//Grab the last letter of the verb for conjugation/spelling. If the last letter is an e, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).

function irregularPatterns(word) {
  var lastLetter, newRoot;

  lastLetter = word[word.length-1];

  if (lastLetter.match(/[e]/)) {
    newRoot = word.split("")
    newRoot.pop();
    newRoot = newRoot.join("");
  }
  if (lastLetter.match(/[y]/)) {
    newRoot = word.split("")
    newRoot[newRoot.length-1] = "i"
    newRoot = newRoot.join("");
  }
  return newRoot || word; // returns the newRoot or, if newRoot is undefined, returns the input word unchanged.
}
// ^^^ Add irregular verb constructions to this function as needed.

var dictionaryUnedited = makeVerbs(dictionaryEditedNouns);
