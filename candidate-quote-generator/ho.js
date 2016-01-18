var mySentence = "noun verb adjective noun , but not adjective noun";


var replaceWords = function(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    if(window[words[i]]) {
      words[i] = getRandom(window[words[i]]);
    }
  }
  var mySentence = words.join(" ");
  return mySentence;
}

replaceWords(mySentence);
