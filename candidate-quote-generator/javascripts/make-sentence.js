var sentenceTypes = [
  adjective + " " + subject + " " + adverb + " " + verb + " " + object,
  subject + " " + verb + " " + object
]

function generateSentence() {
  var myAdjective = getRandom(adjectives);
  var mySubject = getRandom(subjects);
  var myAdverb = getRandom(adverbs);
  var myVerb = getRandom(verbs);
  var myObject = getRandom(objects);
  var mySentence = getRandom(sentenceType);
  return mySentence;
}
