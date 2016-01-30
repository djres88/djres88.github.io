//For adding properties to words (ran one time at the start). Most non-proper nouns take "a/an/the", so we'll start there.

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

var possessives = [];
var quantifiersSingular = [];
var quantifiersPlural = [];
function isPossessive()


var possessives = miniDictionary.filter(function(entry) {
  return entry["speech"].match(/possessive/)
}).map(function(word) {
 return word["word"];
});

var quanitifiersSingular = miniDictionary.filter(function(entry) {
  return entry["speech"] === "quantifier singular";
}).map(function(word) {
  return word["word"];
});

var quanitifiersPlural = miniDictionary.filter(function(entry) {
  return entry["speech"] === "quantifier plural";
}).map(function(word) {
 return word["word"];
});

var dictionaryFinal = miniDictionary.map(function(entry) {
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
    } else {
      entry.articles
    }
  }
}
