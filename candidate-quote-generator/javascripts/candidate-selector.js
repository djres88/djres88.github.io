var candidate = ["Hillary Clinton", "Donald Trump", "Bernie Sanders", "Ted Cruz"];

var words = [
  {
  word: "test",
  candidates: ["hillary-clinton"]
  },
  {
  word: "test",
  candidates: ["donald-trump", "hillary-clinton"]
  }
];

var myCandidate = getRandom(candidate);

var candidateWords = words.filter(function(key) {
  return key.candidates.indexOf(myCandidate) !== -1;
});
