$(document).ready(function () {
  $("h3").click(function (event) {
    event.stopPropagation();
    var a = event.isPropagationStopped();
    console.log(a);
    alert("you clicked h3");
  });
  $("div").click(function () {
    alert("you clicked div");
  });
});
