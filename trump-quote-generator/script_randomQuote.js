$(document).ready(function() {
 $("#newQuote").click(function() {
   var myQuote = generateSentence();
   var mySpeaker = "Donald Trump";
   $(".currentQuote").show()
   $("#quote").text(myQuote);
   $("#speaker").text(mySpeaker);
 });
});
