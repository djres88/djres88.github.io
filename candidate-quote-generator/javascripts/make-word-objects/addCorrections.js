function replaceWords(candidateWords, editsList) {
  return candidateWords.map(function(word) {
    editsList.forEach(function(edit) {
      if (word.word === edit[0]) {
        word.word = edit[1];
      }
    });
    return word;
  });
  return candidateWords;
};

function removeWords(candidateWords, removeList) {
  return candidateWords.filter(function(word) {
     removeList.forEach(function(wordToRemove) {
       if (word.word === wordToRemove) {
         word.word = "remove";
       }
     });
     return word.word !== "remove";
  });
  return candidateWords;
};

function addCorrections(candidatesList) {
  return candidatesList.map(candidate) {
    removeWords(candidate.word, removals);
    replaceWords(candidate.word, corrections);
    return candidateWords;
  });
};

addCorrections(currentCandidates);

//I realize the function calls below could be one call. However, while all candidates share the same "corrections" array for now, eventually I might want to make the corrections arrays specific to each candidate. Candidates often use the same word (e.g. "deportation" or "DNC" in different contexts, and at some point it might be better to replace those words with phrases that more closely align with each candidate's vocabulary/positions. So I'm keeping the function calls separate for now.
removeWords(trumpWords, removals);
removeWords(sandersWords, removals);
removeWords(clintonWords, removals);
removeWords(cruzWords, removals);
replaceWords(trumpWords, corrections);
replaceWords(sandersWords, corrections);
replaceWords(clintonWords, corrections);
replaceWords(cruzWords, corrections);
