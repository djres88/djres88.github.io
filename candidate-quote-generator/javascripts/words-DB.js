var words = [
  {
  word: "I",
  part-of-speech: "subject"
  person: "first"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "you",
  part-of-speech: ["subject", "object"]
  person: "second"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "he",
  part-of-speech: "subject"
  person: "third"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "she",
  part-of-speech: "subject"
  person: "third"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "we",
  part-of-speech: ["subject", "object"]
  person: "first-plural"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "they",
  part-of-speech: ["subject", "object"]
  person: "third-plural"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "Mexicans",
  part-of-speech: ["subject", "object"]
  person: "third-plural"
  candidates: ["Donald Trump"]
  },
  {
  word: "Rosie O'Donnell",
  part-of-speech: ["subject", "object"]
  person: "third"
  candidates: ["Donald Trump"]
  },
  {
  word: "rapists and murderers",
  part-of-speech: ["subject", "object"]
  person: "third-plural"
  candidates: ["Donald Trump"]
  },
  {
  word: "a wall",
  part-of-speech: ["subject", "object"]
  person: "third"
  candidates: ["Donald Trump"]
  },
  {
  word: "Barack Obama",
  part-of-speech: ["subject", "object"]
  person: "third"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "ISIS",
  part-of-speech: ["subject", "object"]
  person: "third"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "the debt",
  part-of-speech: ["subject", "object"]
  person: "third"
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
  {
  word: "think",
  part-of-speech: ["verb"],
  past: "thought",
  candidates: ["Hillary Clinton", "Donald Trump", "Ted Cruz", "Bernie Sanders"]
  },
];

var candidateWords = words.filter(function(key) {
  return key.candidates.indexOf(myCandidate) !== -1;
});
