//Object of candidates. The sentence constructor works better if all candidates are in one object (I can get a random candidate that way).
var candidates = {
  cruz: cruz,
  clinton: clinton,
  sanders: sanders,
  trump: trump
}

//First, we want functions that implement the corrections to each candidate's vocabulary.
function replaceWords(candidate, editsList) {
  return candidate.map(function(candidateWord) {
    editsList.forEach(function(item) {
      if (candidateWord["word"] === item[0]) {
        candidateWord["word"] = item[1];
      }
    });
    return candidateWord;
  });
};

//Removes unwanted words for each candidate.
function removeWords(candidate, removeList) {
  return candidate.filter(function(candidateWord) {
     removeList.forEach(function(wordToRemove) {
       if (candidateWord["word"] === wordToRemove) {
         candidateWord["word"] = "remove";
       }
     });
     return candidateWord["word"] !== "remove";
  });
};

//Next, addWords goes through each word in each candidate's (edited/corrected) vocabulary and looks for that word in dictionary-final.js. If the word is found, then the word-object from the dictionary is added to the candidate's array.
function addWords(candidate, dict) {
  var result = candidate.map(function(candidateWord) {
    dict.forEach(function(entry) {
      if (candidateWord.word === entry.word) {
        candidateWord = entry;
      }
    });
    return candidateWord;
  });
  return result;
}

//Lastly, I want to run a check for any final words that were not found in the dictionary. Do this by looking for words WITHOUT the "speech" property.
var newWords = function(candidate) {
  return candidate.filter(function(word) {
    return !(word.speech);
  });
}

//RUN THE BELOW TO CHECK FOR NEW WORDS. You can add new words to the lists of words to remove or correct, or add them to the dictionary:
// for (var person in candidates) {
//   console.log(newWords(candidates[person]));
// };

//runs the above code for each candidate
for (var person in candidates) {
  candidates[person] = removeWords(candidates[person], removals);
  candidates[person] = replaceWords(candidates[person], corrections);
  candidates[person] = addWords(candidates[person], dictionary);
};
