var words = [
  {
  word: "test",
  part-of-speech:
  person: ""
  candidates: ["Hillary Clinton"]
  },
  {
  word: "test",
  candidates: ["Donald Trump", "Hillary Clinton"]
  }
];

var candidateWords = words.filter(function(key) {
  return key.candidates.indexOf(myCandidate) !== -1;
});
