$(document).ready(function() {
  var count = 0;

  $(".nav").mouseover(function() {
    $(".instructions").show("slow")
    .mouseleave(function() {
      $(".instructions").hide("slow")
    });
  });

  $("#reset").click(function() {
    displayCurrent = 0;
    count = 0;
    $('#currentNumber').text(displayCurrent).css("background-color","red");
    $('#nextNumberIcon').text(count + 1);
    $('#instructionsFade').fadeIn();
    $("#playGame").fadeIn().css("background-color","red");
    $("#instructions").fadeIn();
    $("#instructionsHeader").fadeIn();
    $("#readyMessage").fadeIn();
    $("#reset").fadeOut();
    $("#instructionKeep").css("text-align","left");
  });

  $("#playGame").click(function() {
    var userFizzRepeat = $("#userFizzNum").val();
    var userBuzzRepeat = $("#userBuzzNum").val();
    $("#userSelectFizz").text(userFizzRepeat);
    $("#userSelectBuzz").text(userBuzzRepeat);
    $("#instructionsHeader").fadeOut();
    $("#instructionsFade").fadeOut();
    $("#readyMessage").fadeOut();
    $("#playGame").fadeOut().css("background-color","green");
    $("#reset").fadeIn();
    $("#currentNumber").css("background-color","green");
    $("#instructionKeep").css("text-align","center");
  });

  $(".icons").click(function() {
    var fizzNum = $("#userFizzNum").val();
    var buzzNum = $("#userBuzzNum").val();
    var displayCurrent = FizzBuzz.run((count+1), Number(fizzNum), Number(buzzNum));
    count += 1;
    $('#currentNumber').text(displayCurrent);
    $('#nextNumberIcon').text(count+1);
    if (displayCurrent === "FizzBuzz") {
      $("#currentNumber").animate({
        height: "50%",
        width: "50%"})
      .animate({
        height: "25%",
        width: "25%"})
    } else if (displayCurrent === "Fizz") {
      $("#currentNumber").animate({
        height: "18%",
        width: "12%"})
    } else if (displayCurrent === "Buzz") {
      $("#currentNumber").animate({
        height: "18%",
        width: "12%"})
    } else {
      $("#currentNumber").animate({
        height: "18%",
        width: "12%"})
    };
  });


  // Tests depending on user's click
  $("#fizzIcon").click(function() {
    if(displayCurrent === "Fizz"){
      // Think the jQuery animations are in a separate source file... Use alert as temporary code to test the if/else statement.
      alert("correct");
    } else {
      alert("incorrect")
    }
  });
  $("#buzzIcon").click(function() {
    if(displayCurrent === "Buzz"){
      // Think the jQuery animations are in a separate source file... Use alert as temporary code to test the if/else statement.
      alert("correct");
    } else {
      alert("incorrect")
    }
  });
  $("#fizzBuzzIcon").click(function() {
    if(displayCurrent === "FizzBuzz"){
      // Think the jQuery animations are in a separate source file... Use alert as temporary code to test the if/else statement.
      alert("correct");
    } else {
      alert("incorrect")
    }
  });
  $("#nextNumberIcon").click(function() {
    if(displayCurrent === count) {
      // Think the jQuery animations are in a separate source file... Use alert as temporary code to test the if/else statement.
      alert("correct");
    } else {
      alert("incorrect")
    }
  });

});
