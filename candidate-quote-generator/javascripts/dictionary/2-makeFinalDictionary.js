//Adding properties to each word-object according to its specific part of speech.

//1. NOUN-OBJECTS

//helper functions that distinguish the different types of nouns
function isNoun(entry) {
  if (entry["speech"].match(/noun/)) {
    return true;
  }
}
function isSingular(entry) {
  if (entry["speech"] === "singular noun" || entry["speech"] === "pronoun singular") {
    return true;
  }
}
function isPlural(entry) {
  if (entry["speech"] === "plural noun" || entry["speech"] === "pronoun plural") {
    return true;
  }
}
function isPronoun(entry) {
  if(entry["speech"].match(/pronoun/)) {
    return true;
  }
}
function startsWithVowel(entry) {
  if(entry["word"].charAt(0).match(/[aeiou]/)) {
    return true;
  }
}

//The variables below hold article-like words that modify nouns. These include possessives (Obama's, our), singular quantifiers (one, this), and plural quantifiers (those, many).
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

//Add the relevant properties to each noun.
var dictionaryEditedNouns = dictionaryOriginal.map(function(entry) {
  if (isNoun(entry)) {
    if (isSingular(entry)) {
      entry.person = "third";
      if (isPronoun(entry)) {
      entry.articles = [""];
      } else if (startsWithVowel(entry)) {
      entry.articles = ["the", "an", possessives, quantifiersSingular]; // This structure is intentional. When pulling a random article, I want it to be much more likely (here, 50%) that the modifier is the/a/an; regular speech works that way.
      } else {
      entry.articles = ["the", "a", possessives, quantifiersSingular]; //<--replace "possessives" with the variable after printing to console.
      }
    }

    else if (isPlural(entry)) {
      entry.person = "plural";
      if (isPronoun(entry)) {
        entry.articles = [""];
      } else
        entry.articles = ["", "", possessives, quantifiersPlural]; // Once again, adding two null strings is by design. When pulling a random article, plural nouns will NOT have an article 50% of the time. It seems much easier to add this functionality here than to add another logic to the sentence constructor.
    }

    else { // Other nouns that do not receive an article — namely mass nouns and proper nouns — will automatically draw a blank string. It's easier to code this here than to embed the logic in the sentence constructor.
      entry.person = "third";
      entry.articles = [""];
      //Need to add the person (first/second/third/plural) manually. There aren't that many, so it's pretty quick to filter and change.
    }
  }

  return entry;
});


//----
//2. VERB-OBJECTS

//A few functions to help replace/format irregular verbs. These find the last letter (or in some cases the last two letters) in the infinitive form of the verb and replace the root, if necessary. This isn't a catchall, but it's a good start.
function endsInE(verbRoot) {
  var lastLetter = verbRoot[verbRoot.length-1];
  if (lastLetter === "e") {
    return true;
  }
}

function endsInY(verbRoot) {
  var lastLetter = verbRoot[verbRoot.length-1];
  var penultimateLetter = verbRoot[verbRoot.length-2];
  if (lastLetter === "y" && !penultimateLetter.match(/[aeiou]/)) { // "play" becomes "played", but "try" becomes "tried"
    return true;
  }
}

function endsInBMNPT(verbRoot) {
  var lastLetter = verbRoot[verbRoot.length-1];
  if (lastLetter.match(/[bmnpt]/)) {
    return true;
  }
}

//These functions do the work of actually replacing letters/reformatting the root.
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


//Run the replacements/removals for each tense. Can add to these if you think of more irregular patterns:
function presentIrregular(verb) {
  if (endsInY(verb)) {
    verb = replaceLastLetter(verb, "ie");
  }
  return verb
}

function pastIrregular(verb) {
  var lastLetter = verb[verb.length-1];
  if (endsInE(verb)) {
    verb = removeLastLetter(verb);
  }
  else if (endsInY(verb)) {
    verb = replaceLastLetter(verb, "i");
  }
  else if (endsInBMNPT(verb)) {
    verb = replaceLastLetter(verb, lastLetter + lastLetter) // (ship --> shipped, shun --> shunning, etc.)
  }
  return verb;
}

function progressiveIrregular(verb) {
  var lastLetter = verb[verb.length-1];
  if (endsInE(verb)) {
    verb = removeLastLetter(verb);
  }
  else if (endsInBMNPT(verb)) {
    verb = replaceLastLetter(verb, lastLetter + lastLetter) // (ship --> shipped, shun --> shunning, etc.)
  }
  return verb;
}

//makeVerbs adds conjugated verb forms to each verb in the dictionary. English has TONS of irregular verbs, though, and not all of them follow an easily identifiable pattern. There are some high-level patterns I can code in — like if the verb ends in "e" or "y", I can remove/replace the last letter before conjugating it — but otherwise, there's no real advantage to coding in all the specific irregulars beforehand (buy/bought, build/built, give/gave). It's easier to run this code and then just find/replace the irregular verbs in Word.
function makeVerbs(dict) {
  return dict.map(function(verb) {
    if (verb["speech"].match(/\sverb/)) {

      var root = verb["word"];
      var presentThirdRoot = presentIrregular(root);
      var pastRoot = pastIrregular(root);
      var progressiveRoot = progressiveIrregular(root);

      //Add conjugations as properties in each verb-object. NOTE/UPDATE: All the irregular past tenses are proving a little too difficult with the expanded vocabulary. In the interest of time, I'm going to hold off on past tense.
      verb.present = {first: root, second: root, third: presentThirdRoot + "s", plural: root};
      // verb.past = {first: pastRoot + "ed", second: pastRoot + "ed", third: pastRoot + "ed", plural: pastRoot + "ed"};
      verb.future = {first: "will " + root, second: "will " + root, third: "will " + root, plural: "will " + root};
      // verb.presentProgressive = {first: "am " + progressiveRoot + "ing", second: "are " + progressiveRoot + "ing", third: "is " + progressiveRoot + "ing", plural: "are " + progressiveRoot + "ing"};
      // verb.presentPerfect = {first: "have " + pastRoot + "ed", second: "have " + pastRoot + "ed", third: "has " + pastRoot + "ed", plural: "have " + pastRoot + "ed"};
      // verb.pastProgressive = {first: "was " + progressiveRoot + "ing", second: "were " + progressiveRoot + "ing", third: "was " + progressiveRoot + "ing", plural: "were " + progressiveRoot + "ing"};
      // verb.pastPerfect = {first: "had " + pastRoot + "ed", second: "had " + pastRoot + "ed", third: "had " + pastRoot + "ed", plural: "had " + pastRoot + "ed"};
    }
    return verb;
  });
}


// ^^^ Add irregular verb constructions to this function as needed.

//DICTIONARY BEFORE MANUAL EDITS:
var dictionaryUnedited = makeVerbs(dictionaryEditedNouns);
