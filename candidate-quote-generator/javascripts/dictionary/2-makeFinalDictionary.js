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

var quantifiersSingular = dictionaryOriginal.filter(function(entry) {
  return entry["speech"] === "quantifier singular";
}).map(function(word) {
  return word["word"];
});

var quantifiersPlural = dictionaryOriginal.filter(function(entry) {
  return entry["speech"] === "quantifier plural";
}).map(function(word) {
 return word["word"];
});

var dictionaryEditedNouns = dictionaryOriginal.map(function(entry) {
  if (isNoun(entry)) {
    if (isSingular(entry)) {
      entry.person = "third";
      if (startsWithVowel(entry)) {
        entry.articles = ["the", "an", possessives, quantifiersSingular];
      } else {
        entry.articles = ["the", "a", possessives, quantifiersSingular];
      }
    }
    else if (isPlural(entry)) {
      entry.person = "plural";
      entry.articles = ["", possessives, quantifiersPlural]; // Adding the other articles as variables is by design. I want it to be likelier that getRandom returns the/a/an or, in the cases of plural nouns, returns blank.
    } else { // Other nouns that do not receive an article, namely pronouns and proper nouns, will automatically draw a blank string. It seems easier for the sentence generator to ALWAYS draw a random article (even though, for proper nouns, it will be blank) than to add another level of logic — I would need to something like "draw an article if the article property exists." This seems easier.
      entry.articles = [""];
      //Need to add the person (first/second/third/plural) manually. There aren't that many, so it's pretty quick to filter and change.
    }
  }

  return entry;
});

//VERBS

//makeVerbs adds conjugated verb forms to each verb in the dictionary. English has TONS of irregular verbs, though, and not all of them follow an easily identifiable pattern. There are some high-level patterns I can code in — like if the verb ends in "e" or "y", I can remove/replace the last letter before conjugating it — but otherwise, there's no real advantage to coding in all the specific irregulars beforehand (buy/bought, build/built, give/gave). It's easier to run this code and then just find/replace the irregular verbs in Word.
function makeVerbs(dict) {
  return dict.map(function(verb) {
    if (verb["speech"].match(/\sverb/)) {

      var root = verb["word"];
      var pastRoot = pastIrregular(root);
      var progressiveRoot = progressiveIrregular(root);

      //Add conjugations as properties in each verb-object.
      verb.present = {first: root, second: root, third: root + "s", plural: root};
      verb.past = {first: pastRoot + "ed", second: pastRoot + "ed", third: pastRoot + "ed", plural: pastRoot + "ed"};
      verb.future = {first: "will " + root, second: "will " + root, third: "will " + root, plural: "will " + root};
      verb.presentProgressive = {first: "am " + progressiveRoot + "ing", second: "are " + progressiveRoot + "ing", third: "is " + progressiveRoot + "ing", plural: "are " + progressiveRoot + "ing"};
      verb.presentPerfect = {first: "have " + pastRoot + "ed", second: "have " + pastRoot + "ed", third: "has " + pastRoot + "ed", plural: "have " + pastRoot + "ed"};
      verb.pastProgressive = {first: "was " + progressiveRoot + "ing", second: "were " + progressiveRoot + "ing", third: "was " + progressiveRoot + "ing", plural: "were " + progressiveRoot + "ing"};
      verb.pastPerfect = {first: "had " + pastRoot + "ed", second: "had " + pastRoot + "ed", third: "had " + pastRoot + "ed", plural: "had " + pastRoot + "ed"};
    }
    return verb;
  });
}

//A few functions to help replace/format irregular verbs.
function endsInE(verbRoot) {
  var lastLetter = verbRoot[verbRoot.length-1];
  if (lastLetter === "e") {
    return true;
  }
}

function endsInY(verbRoot) {
  var lastLetter = verbRoot[verbRoot.length-1];
  if (lastLetter === "y") {
    return true;
  }
}

function removeLastLetter(verbRoot) {
  var newRoot = verbRoot.split("");
  newRoot.pop();
  newRoot = newRoot.join("");
  return newRoot;
}

function replaceLastLetter(verbRoot, replacement) {
  var newRoot = verbRoot.split("");
  newRoot[newRoot.length-1] = replacement;
  newRoot = newRoot.join("");
  return newRoot;
}

//Run the replacements/removals. Can add to these if you think of more irregular patterns.
function pastIrregular(verb) {
  if (endsInE(verb)) {
    removeLastLetter(verb);
  }
  if (endsInY(verb)) {
    replaceLastLetter(verb, "i");
  }
  return verb;
}

function progressiveIrregular(verb) {
  if(endsInE(verb)) {
    removeLastLetter(verb);
  }
  return verb;
}
// ^^^ Add irregular verb constructions to this function as needed.

//DICTIONARY BEFORE MANUAL EDITS:
var dictionaryUnedited = makeVerbs(dictionaryEditedNouns);
