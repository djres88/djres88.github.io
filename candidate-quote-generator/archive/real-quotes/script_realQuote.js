$(document).ready(function() {
 $("#newQuote").click(function() {
   var quoteIndex = Math.floor(Math.random()*quotesList.length);
   var myQuote = quotesList[quoteIndex].quote;
   var mySpeaker = quotesList[quoteIndex].speaker;
   var myTopic = quotesList[quoteIndex].topic;
   $(".currentQuote").show()
   $("#quote").text(myQuote);
   $("#speaker").text(mySpeaker);
   $("#topic").text(myTopic);
 });
});
