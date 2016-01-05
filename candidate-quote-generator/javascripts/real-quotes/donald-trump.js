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
    array.push(tweet);
  }
});

exports.array = array;
