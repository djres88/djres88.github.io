$(document).ready(function() {
  $("#great").text(getRandom(adjective).toUpperCase());
  $("#newQuote").click(function() {
     var myQuote = generateSentence();
     var mySpeaker = "Donald Trump";
     $(".currentQuote").show()
     $("#quote").text(myQuote);
     $("#speaker").text(mySpeaker);
  });
});
