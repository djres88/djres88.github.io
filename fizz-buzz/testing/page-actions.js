$(document).ready(function() {
  $(".nav").hover(function() {
    $(".instructions").show("slow");
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
    var fizzNum = Number$("#userFizzNum").val();
    var buzzNum = Number$("#userBuzzNum").val();
    var displayCurrent = FizBuzz.run(FizBuzz.count+1, fizzNum, buzzNum)
    FizzBuzz.count += 1;
    $('#currentNumber').text(displayCurrent);
    $('#nextNumberIcon').text(FizzBuzz.count+1);
  });

/*
    if ((FizzBuzz.divisibleBy(count+1, Number(fizzNum))) && (FizzBuzz.divisibleBy(count+1, Number(buzzNum)))) {
      displayCurrent = "FizzBuzz";
      $("#currentNumber").animate({height: "50%", width: "50%"}, 200).animate({height: "25%", width: "25%"}, 200)
    } else if (FizzBuzz.divisibleBy(count+1, Number(fizzNum))) {
      displayCurrent = "Fizz";
      $("#currentNumber").animate({
        height: "17%",
        width: "12%"
      })
    } else if (FizzBuzz.divisibleBy(count+1, Number(buzzNum))) {
      displayCurrent = "Buzz";
      $("#currentNumber").animate({
        height: "17%",
        width: "12%"
      })
    } else {
      displayCurrent = count + 1;
      $("#currentNumber").animate({
        height: "17%",
        width: "12%"
      })
    };
    count += 1;
    $('#currentNumber').text(displayCurrent);
    $('#nextNumberIcon').text(count+1);
  });
*/
  /* Tests depending on user's click */
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
});
