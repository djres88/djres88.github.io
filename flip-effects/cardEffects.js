$(document).ready(function() {
  var flips = document.getElementsByClassName("project-image");
  // Dynamically generate flipscards for each project image (based on id front-#{i})
  for (var i = 1; i <= flips.length; i++) {
    $("#front-"+i).flip({
      trigger: "hover",
      reverse: "true"
    });
  }
});
