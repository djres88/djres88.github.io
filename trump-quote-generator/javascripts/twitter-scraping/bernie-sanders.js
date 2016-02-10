var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

var myHandles = ['TedCruz', 'realDonaldTrump', 'BernieSanders', 'HillaryClinton'];

var getTweets = function(handles) {
  for (var i = 0; i < handles.length; i++) {
    var currentHandle = handles[i];
    var streamOfTweets = new TwitterPosts({
      username: currentHandle,
      retweets: false
    });

    var array = [];
    streamOfTweets.on('readable', function() {
      var tweet = streamOfTweets.read().text.replace("."," ");
      if (tweet.indexOf("@") === -1) {
        var words = tweet.split(" ");
        for (var j = 0; j < words.length; j++) {
          if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(words[j])) {
            array.push(words[j].toLowerCase());
          }
        }
      }
    });

    setTimeout(function() {
      array.split;
      console.log("HERE ARE " + currentHandle + "\'S WORDS: " + array.sort())
    }, 10000);
  }
}

getTweets(myHandles);
