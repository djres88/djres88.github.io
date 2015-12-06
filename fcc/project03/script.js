$("document").ready(function() {
  var breakVal = Number($("#breakLength").text())*60;
  var sessionVal = Number($("#sessionLength").text())*60 - 1;

  //variable to track whether/not clock is running
  var running = false;

  //variable to detect session or break
  var inSession = true;

  //declare variable for setInterval() function
  var run;

  //format time
  function displayTime(secs) {
    var hr = Math.floor(secs / (60*60));
    var min = Math.floor(secs / 60);
    var s = secs % 60;
    if (hr < 10) {
      hr = "0" + hr;
    };
    if (min < 10) {
      min = "0" + min;
    };
    if (s < 10) {
      s = "0" + s;
    };
    return hr + ":" + min + ":" + s;
  }

  //create timer message based on break vs. in session
  function timerMessage() {
    if(inSession === true) {
      return "IN SESSION";
    } else {
      return "BREAK";
    }
  };

  //countdown clock
  function countdown() {
    var time = displayTime(sessionVal);
    $("#counter").text(time);
    sessionVal -= 1;
    if(sessionVal === -1) {
      sessionVal = breakVal;
      inSession = !inSession;
      $("#sessionStatus").text(timerMessage);
    }
  };

//customize timers
  $("#sessionPlus").click(function() {
    if ((running === false) && (Number($("#sessionLength").text() > 0))) {
      sessionVal = Number($("#sessionLength").text())*60;
      sessionVal += 60;
      $("#sessionStatus").text("READY");
      $("#sessionLength").text((sessionVal) / 60);
      $("#counter").text(countdown);
    }
  });
    $("#sessionMinus").click(function() {
    if ((running === false) && (Number($("#sessionLength").text() > 0))) {
      sessionVal = Number($("#sessionLength").text())*60;
      sessionVal -= 60;
      $("#sessionStatus").text("READY");
      $("#sessionLength").text((sessionVal) / 60);
      $("#counter").text(countdown);
    }
  });
    $("#breakPlus").click(function() {
    if ((running === false) && (Number($("#breakLength").text() > 0))) {
      breakVal = Number($("#breakLength").text())*60;
      breakVal += 60;
      $("#sessionStatus").text("READY");
      $("#breakLength").text((breakVal) / 60);
    }
  });
    $("#breakMinus").click(function() {
    if ((running === false) && (Number($("#breakLength").text() > 0))) {
      breakVal = Number($("#breakLength").text())*60;
      breakVal -= 60;
      $("#sessionStatus").text("READY");
      $("#breakLength").text((breakVal) / 60);
    }
  });

  //run timer
  $(".circle").click(function() {
    if (running === false) {
      running = true;
      run = setInterval(countdown, 1000);
      $("#sessionStatus").text(timerMessage);
    } else {
      running = false;
      clearInterval(run);
      $("#sessionStatus").text("PAUSED");
    }
  });

  //reset timer
  $("#reset").click(function() {
    clearInterval(run);
    running = false;
    inSession = true;
    $("#sessionStatus").text("READY");
    breakVal = Number($("#breakLength").text())*60;
    sessionVal = Number($("#sessionLength").text())*60 - 1;
    $("#counter").text(displayTime(sessionVal+1));
  });

});
