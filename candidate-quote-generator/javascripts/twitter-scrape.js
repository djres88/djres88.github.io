var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

var getTweets = function(handle) {
  var streamOfTweets = new TwitterPosts({
    username: handle,
    retweets: false
  });

  //Push candidate's words to an array:
  streamOfTweets.on('readable', function() {
    var tweet = streamOfTweets.read().text.replace("."," ");
    if (tweet.indexOf("@") === -1) {
      var candidateWords = tweet.split(" ");
      candidateWords.map(function(word) {
        word = word.toLowerCase();
        return (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(word));
        //ADD _uniq!
      })
    }
  });

  //Print words:
  setTimeout(function() {
    candidateWords.split
    console.log("HERE ARE THE WORDS FOR @" + handle + ": " + candidateWords.sort());
  }, 10000);
}

getTweets("realDonaldTrump");
getTweets("HillaryClinton");
getTweets("BernieSanders");
getTweets("TedCruz");
