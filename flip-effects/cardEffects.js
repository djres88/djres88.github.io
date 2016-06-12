// Generate a random neon color. Because it's awesome, that's why.
var colorCount = 0;
function randomColor() {
  var neons = ["#fe0000",	"#fdfe02", "#0bff01", "#011efe", "#fe00f6"];
  colorCount += 1;
  colorCount %= 4;
  return neons[colorCount];
}

$(document).ready(function() {
  // Dynamically generate flipscards for each project image (based on id front-#{i})
  var flips = document.getElementsByClassName("proj");
  for (var i = 1; i <= flips.length; i++) {
    $("#front-"+i).flip({
      trigger: "hover",
      reverse: "true"
    });
  }

  // Have the button border width grow/reset. Hints that the user should click it. Super cheesy? Maybe. Did it WORK, though?
  var borderThickness = 0.2;
  
  var buttonToggler = setInterval(function() {
    borderThickness = (borderThickness %= 0.8) + 0.2;
    $('.have-a-look').css({
      "border-width": borderThickness + "em"
    });
  }, 200);

  //Random neon colors on hover-over for the main button.
  var colorSwitcher;
  $('.have-a-look').hover(
    function(el) {
      clearInterval(buttonToggler);
      colorSwitcher = setInterval(function() {
        $(el.target).css({
          color: "white",
          fontWeight: "bold",
          backgroundColor: randomColor()
        });
      }, 70);
    },
    function() {
      clearInterval(colorSwitcher);
      buttonToggler = setInterval(function() {
        borderThickness = (borderThickness %= 0.8) + 0.2;
        $('.have-a-look').css({
          "border-width": borderThickness + "em"
        });
      }, 200);
      $('.have-a-look').css({
        backgroundColor: "transparent"
      });
    }
  );

  // Random neon colors on hover-over for the me-and-links a tags.
  $(".me-and-links").children("a").hover(
    function(el) {
      colorSwitcher = setInterval(function() {
        $(el.target).css({
          color: randomColor(),
          fontWeight: "bold"
        });
      }, 70);
    },

    function(el) {
      clearInterval(colorSwitcher);
      $(el.target).css({
        color: "black",
        fontWeight: "normal"
      });
    }, 70);
});
