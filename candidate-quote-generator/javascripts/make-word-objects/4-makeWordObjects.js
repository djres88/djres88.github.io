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
        candidateWord.speech = entry["speech"];
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

//****CHECK FOR WORDS THAT DO NOT HAVE A TYPE (part of speech). Log them to the console and, for each word, decide whether to (1) add the word to the dictionary with its type, (2) correct the word to an acceptable word (i.e. one that's already in the dictionary) OR (3) add the word to the "remove words" list.
for (var person in candidates) {
  var needsType = candidates[person].filter(function(word) {
    return word.speech === "CHECK";
  });
  console.log(needsType);
}
//*****AFTER YOU DECIDE ON EACH, RE-RUN THROUGH LINE 50. CONTINUE UNTIL YOU'RE LOGGING NOTHING.***
