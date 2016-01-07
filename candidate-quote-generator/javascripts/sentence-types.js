//The following array includes several potential sentence types. The SENTENCE GENERATOR -- see function below -- randomly selects one of these types before filling in the sentence with words from a random candidate's Twitter feed. You can add new sentence types to the end of the array (but don't forget the commas).
var sentenceType = [
  "noun-subject adverb verb adjective noun",
  "noun-subject verb noun",
  "noun-subject verb adjective noun",
  "I believe noun-subject verb noun",
  "noun-subject verb noun adverb",
  "noun-subject adverb verb noun",
  "noun-subject verb adjective noun adverb",
  "noun-subject verb noun — noun and adjective noun",
  "noun-subject verb noun and noun adverb",
  "adjective noun-subject verb noun",
  "adjective noun-subject adverb verb noun",
  "adjective noun-subject verb adjective noun",
  "Listen — noun-subject verb noun okay?",
  "That is adjective",
  "I am adjective",
  "adverb noun-subject verb noun"
];

// //node
// exports.sentenceType = sentenceType;
