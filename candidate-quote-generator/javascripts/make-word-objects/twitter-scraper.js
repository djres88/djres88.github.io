//Adding feature: get unique words only (less sorting later).

var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

function getTweets(handle) {
  var streamOfTweets = new TwitterPosts({
    username: handle,
    retweets: false
  });

  var tweets = [], words;

  //Push tweets to an array for sorting below.
  streamOfTweets.on('readable', function() {
    tweets.push(streamOfTweets.read().text);
  });

  //Give the scraper some time -- at least 60 seconds (to be safe) -- to pull all available tweets from each handle. Generally the scaper takes ~800 tweets, as that's how far back Twitter's UI goes.
  setTimeout(function() {
    var directQuotesOnly = tweets.filter(function(tweet) { return tweet[0] !== "\""; }); //Some tweets are quotes from other people. Filtering by "retweets: false" takes care of most of these, but Trump likes to cut/paste quotes rather than retweeting. But he DOES include a leading quote (\") when retweeting, so I filter them out that way.
    var wordsArray = directQuotesOnly.join("").split(" ").sort().filter(function(word) { //Split the words back into an array so that each word is its own element, then sort and filter the array.
      return !word.match(/(http|pictwitter|#|@)/); // Filter words that are... actual words (i.e. not websites, hashtags, etc.)
    });

    words = unique(wordsArray); // Get only unique words (no need to store duplicates in the array)

    console.log("**********HERE ARE THE WORDS FOR", handle, "*********", wordsArray);
  }, 10000);
}

getTweets("realDonaldTrump");
// getTweets("HillaryClinton");
// getTweets("BernieSanders");
// getTweets("TedCruz");
