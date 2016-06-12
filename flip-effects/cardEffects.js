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

  //Random neon colors on hover-over for the main button. This is just custom enough for each type of button to make refactoring kind of impractical, I think. It's really the buttonToggler, pluss the fontWeight and color stuff,
  var colorSwitcher;
  $('.have-a-look').hover(
    function() {
      clearInterval(buttonToggler);
      colorSwitcher = setInterval(function() {
        $('.have-a-look').css({
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

});
