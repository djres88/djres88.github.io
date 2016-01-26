//Here I take the arrays of objects from unformatted-candidate-wordlist.js and generate formatted word-objects for each candidate. Specifically, we need to add information (properties) to the noun and verb objects.

//List of candidates. Makes it easier to add/remove candidates as the race develops.
var candidates = {
  cruz: cruz,
  clinton: clinton,
  sanders: sanders,
  trump: trump
}

function replaceWords(candidate, editsList) {
  return candidate.map(function(candidateWord) {
    editsList.forEach(function(edit) {
      if (candidateWord["word"] === edit[0]) {
        candidateWord["word"] = edit[1];
      }
    });
    return candidateWord;
  });
};

function removeWords(candidate, removeList) {
  return candidate.filter(function(candidateWord) {
     removeList.forEach(function(wordToRemove) {
       if (candidateWord["word"] === wordToRemove) {
         candidateWord["word"] = "remove";
       }
     });
     return candidateWord["word"] !== "remove";
  });
  return candidate;
};

function addWordType(candidate, dictionary) {
  return candidate.map(function(candidateWord) {
    candidateWord.speech = "CHECK";
    dictionary.forEach(function(entry) {
      if (candidateWord["word"] === entry["word"]) {
        candidateWord.speech = entry["partofspeech"];
      }
    });
    return candidateWord;
  });
}

//Create a new variable w/ each of candidate word-objects
for (var person in candidates) {
  candidates[person] = removeWords(candidates[person], removals);
  candidates[person] = replaceWords(candidates[person], corrections);
  candidates[person] = addWordType(candidates[person], miniDictionary);
};

//****CHECK FOR WORDS THAT DO NOT HAVE A TYPE (part of speech). Log them to the console and, for each word, decide whether to (1) add the word to the dictionary with its type OR (2) add the word to the "remove words" array.
for (var person in candidates) {
  var needsType = candidates[person].filter(function(word) {
    return word.speech === "CHECK";
  });
  console.log(needsType);
}
//*****AFTER YOU DECIDE ON EACH, RE-RUN THROUGH LINE 50. CONTINUE UNTIL YOU'RE LOGGING NOTHING.***

//Adds articles to each candidate's noun-objects.
function makeNouns(candidate) {
  return candidate.map(function(candidateWord) {
    nounProperties.forEach(function(noun) {
      if (candidateWord["word"] === noun["word"]) {
        candidateWord.articles = nounProperties["articles"];
        candidateWord.person =  nounProperties["person"];
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


//DO THE WORK!
for (var person in candidates) {
  makeNouns(candidates[person]);
  makeVerbs(candidates[person]);
}
