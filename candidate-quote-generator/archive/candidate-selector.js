var candidateList = ["Hillary Clinton", "Donald Trump", "Bernie Sanders", "Ted Cruz"];

var words = [
  {
  word: "test",
  candidate: ["hillary-clinton"]
  },
  {
  word: "test",
  candidates: ["donald-trump", "hillary-clinton"]
  }
];

var myCandidate = getRandom(candidateList);

var myWords = words.filter(function(key) {
  return key.candidates.indexOf(myCandidate) !== -1;
});
