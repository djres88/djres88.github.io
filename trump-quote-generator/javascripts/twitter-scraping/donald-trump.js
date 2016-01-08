var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

streamOfTweets = new TwitterPosts({
  username: 'realDonaldTrump',
  retweets: false
});

var array = [];

streamOfTweets.on('readable', function() {
  var tweet = streamOfTweets.read().text;
  if (tweet.indexOf("@") === -1) {
    var words = tweet.split(" ");
    for (var i = 0; i < words.length; i++) {
      if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(words[i])) {
        array.push(words[i].toLowerCase());
      }
    }
  }
});

setTimeout(function() {
  array.split
  console.log(array.sort())
}, 15000)

exports.array = array;
