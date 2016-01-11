$(document).ready(function() {

  var headerLoop = function(){
    $("#great").fadeOut(5000, function() {
      $("#great").text(getRandom(adjective).toUpperCase()).fadeIn(5000, headerLoop);
    });
  }
  headerLoop();

  $("#newQuote").click(function() {
     var myQuote = generateSentence();
     var mySpeaker = "Donald Trump";
     $(".currentQuote").show()
     $("#quote").text(myQuote);
     $("#speaker").text(mySpeaker);
  });
});
