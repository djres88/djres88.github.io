//addWords goes through each word in each candidate's (edited/corrected) vocabulary, and looks for that word in dictionary-final.js. If the word is found, then the word-object from the dictionary is added to the candidate's array.

//If the word is not found, I save it to an array I call "words not found". I can check this periodically and add the word to the dictionary (or to the corrections list, or to the removals list) as I see fit.

function addWord(candidateWords, dictionary) {
  candidateWords.forEach(function(word) {
    dictionary.forEach(function(entry) {
      if (word.word === entry.word) {
        word = entry;
      }
    });
  });
  return candidate;
}

function foundWords(candidateWords) {
  candidateWords.filter(function(word) {
    return word.speech !== null;
  });
};

function newWords(candidateWords) {
  candidateWords.filter(function(word) {
    return word.speech === null;
  });
}

//Create a new variable w/ each of candidate word-objects


//****CHECK FOR WORDS THAT DO NOT HAVE A TYPE (part of speech). Log them to the console and, for each word, decide whether to (1) add the word to the dictionary with its type, (2) correct the word to an acceptable word (i.e. one that's already in the dictionary) OR (3) add the word to the "remove words" list.
var wordNotFound;
for (var person in candidates) {
  var needsType = candidates[person].filter(function(word) {
    return word.speech === "CHECK";
  });
}
//*****AFTER YOU DECIDE ON EACH, RE-RUN THROUGH LINE 50. CONTINUE UNTIL YOU'RE LOGGING NOTHING.***
