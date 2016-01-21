//Adding feature: get unique words only (less sorting later).
var unique = function(array) {
  var result = [];
  array.forEach(function(item) {
    if(result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

var getTweets = function(handle) {
  var streamOfTweets = new TwitterPosts({
    username: handle,
    retweets: false
  });

  var tweets = [];
  var words;

  streamOfTweets.on('readable', function() {
    //As the scraper pulls tweets, push each tweet to an array.
    tweets.push(streamOfTweets.read().text);

    setTimeout(function() { // give scraper time to pull tweets
      var removeQuotes = tweets.filter(function(tweet) { //Some tweets are quotes from other people. Remove these -- only want the candidate's words.
        return tweet[0] !== "\"";
      });
      var stringOfTweets = removeQuotes.join(" ").replace(/[.&?,\-\—!\(\)]/g, "").replace(/\n/g, " ").toLowerCase(); //Join all words into a single string and format.
      var arrayOfWords = stringOfTweets.split(" ").sort(); //Split the words back into an array so that each word is its own element, then sort and filter the array.
      var allWords = arrayOfWords.filter(function(word) {
        return !word.match(/(http|pictwitter|#|@)/); // Filter words that are... actual words (i.e. not websites, hashtags, etc.)
      });
      words = unique(allWords); // Get only unique words (no need to store duplicates in the array)
    }, 7000);
  });

  setTimeout(function() {
    console.log("HERE ARE THE WORDS FOR @", handle, ": ", words);
  }, 7500);
}

getTweets("realDonaldTrump");
getTweets("HillaryClinton");
getTweets("BernieSanders");
getTweets("TedCruz");
