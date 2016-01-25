//Here we make the word-objects for each candidate. Specifically, we need to add information (properties) to the noun and verb objects.

//List of candidates. Makes it easier to add/remove candidates as the race develops.
var candidates = [cruz, clinton, sanders, trump];

//Adds articles to each candidate's noun-objects.
function makeNouns(candidate) {
  return candidate.map(function(candidateWord) {
    candidateWord.articles = false;
    articlesList.forEach(function(articleLookup) {
      if (candidateWord["word"] === articleLookup["word"]) {
        candidateWord.articles = articleLookup.articles;
      }
    });
    return candidateWord;
  });
}

//Adds conjugated verb forms to each candidate's verb-objects.
function makeVerbs(candidate) {
  return candidate.map(function(verb) {
    if (verb["speech"].match(/verb\s/)) {

      var root = verb["word"];
      var rootIrregular = formatRootIfIrregular(root);

      //Add conjugations as properties in each verb-object.
      verb.present = {first: root, second: root, third: root + "s", plural: root};
      verb.past = {first: rootIrregular + "ed", second: rootIrregular + "ed", third: rootIrregular + "ed", plural: rootIrregular + "ed"};
      verb.future = {first: "will " + root, second: "will " + root, third: "will " + root, plural: "will " + root};
      verb.presentProgressive = {first: "am " + rootIrregular + "ing", second: "are " + rootIrregular + "ing", third: "is " + rootIrregular + "ing", plural: "are " + rootIrregular + "ing"};
      verb.presentPerfect = {first: "have " + rootIrregular + "ed", second: "have " + rootIrregular + "ed", third: "has " + rootIrregular + "ed", plural: "have " + rootIrregular + "ed"};
      verb.pastProgressive = {first: "was " + rootIrregular + "ing", second: "were " + rootIrregular + "ing", third: "was " + rootIrregular + "ing", plural: "were " + rootIrregular + "ing"};
      verb.pastPerfect = {first: "had " + rootIrregular + "ed", second: "had " + rootIrregular + "ed", third: "had " + rootIrregular + "ed", plural: "had " + rootIrregular + "ed"};
    }
    return verb;
  });
}

//Grab the last letter of the verb for conjugation/spelling. If the last letter is an e, it is (usually) removed when conjugating past/progressive/perfect tenses (e.g. believe --> believing, believed).
function formatRootIfIrregular(word) {
  var lastLetter, newRoot;
  lastLetter = word[word.length-1];
  if (lastLetter.match(/[e]/)) {
    newRoot = word.split("")
    newRoot.pop();
    newRoot = newRoot.join("");
  }
  return newRoot || word; // returns the newRoot or, if newRoot is undefined, returns the input word unchanged.
}
// ^^^ Add irregular verb constructions to this function as needed.

candidates.forEach(function(candidate) {
  makeNouns(candidate);
  makeVerbs(candidate);
});
