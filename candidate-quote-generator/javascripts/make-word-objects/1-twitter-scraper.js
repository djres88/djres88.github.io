//Get unique words for each candidate (used in getTweets below).
function unique(array) {
  var result = [];
  array.forEach(function(item) {
    if(result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

//Scrape tweets
var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

function getTweets(handle) { // Pass the candidate's handle. Now it's easy to add/remove candidates later, if needed.
  var streamOfTweets = new TwitterPosts({
    username: handle,
    retweets: false
  });

  var tweets = [];

  //Push tweets to an array for sorting below.
  streamOfTweets.on('readable', function() {
    tweets.push(streamOfTweets.read().text);
  });

  //Give the scraper some time -- at least 25 seconds -- to pull all available tweets from each handle. Generally the scaper takes ~800 tweets, as that's how far back Twitter's UI goes.
  return setTimeout(function() {
    var wordsFiltered = tweets.filter(function(tweet) { //Some tweets are quotes from other people. Filtering by "retweets: false" takes care of most of these, but Trump likes to cut/paste quotes rather than retweeting. But he DOES include a leading quote (\") when retweeting, so I filter them out that way.
      return tweet[0] !== "\"";
    }).join(" ").replace(/[.&?,\:\-\—!\(\)\n]/g, "").toLowerCase(); // remove special characters and set all to lowercase

    var wordsFinal = unique(wordsFiltered.split(" ").sort().filter(function(word) { //Split the words back into an array so that each word is its own element, then sort and filter the array, removing words that are not actual words (e.g. weblinks and hashtags). Then grab only the unique elements from the result.
      return !word.match(/(http|pictwitter|#|@)/); //
    })).map(function(word) { // Map the words into objects for pasting into 2-unformatted words.js
      word = { "word": word }
      return word;
    });

    console.log("**********HERE ARE THE WORDS FOR", handle, "*********", wordsFinal); // Not mandatory but I like to have the visual when I run this in node.

    return wordsFinal;
  }, 10000);

}

//Create word-objects for each candidate.
var clinton = getTweets("HillaryClinton");
var cruz = getTweets("TedCruz");
var sanders = getTweets("BernieSanders");
var trump = getTweets("realDonaldTrump");
