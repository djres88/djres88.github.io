//The following array includes several potential sentence types. The SENTENCE GENERATOR -- see function below -- randomly selects one of these types before filling in the sentence with words from a random candidate's Twitter feed. You can add new sentence types to the end of the array (but don't forget the commas). NOTE: for formatting reasons, commas should be preceded by a space.

var sentenceType = [
  "noun-subject verb noun",
  "noun-subject verb adjective noun",
  "noun-subject verb noun , but not adjective noun",
  "we need adjective noun and not adjective noun",
  "with noun in noun , noun-subject verb noun",
  "if noun-subject verb noun , there will be noun",
  "who says noun-subject verb noun",
  "when will noun-subject verb noun",
  "adjective noun-subject verb noun and noun",
  "noun-subject verb noun and noun , but not adjective noun",
  "noun-subject verb noun , but not adjective noun",
  "let's make noun adjective again",
  "noun-subject , adjective noun , verb noun",
  "I believe noun-subject verb noun",
  "noun-subject adverb verb noun",
  "noun-subject verb noun as well as noun",
  "adjective noun-subject verb noun",
  "Hey, listen, noun-subject verb noun",
  "That is adjective",
  "I am adjective",
  "noun-subject means noun-subject",
  "noun said that noun-subject verb noun",
  "according to noun , noun-subject verb noun",
  "noun-subject must not be adjective",
  "noun-subject cannot remain adjective",
  "noun and noun are adjective"
];

// //node
// exports.sentenceType = sentenceType;
