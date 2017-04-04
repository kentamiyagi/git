$(function () {
  $("button").click(function () {
    $("body").append("<div id='glayLayer'></div>", "<div id='overLayer'><img src='images/blue.gif'></div>", "<div>");
    $("#overLayer,#glayLayer").fadeIn("slow");
    $("#overLayer")
    $("#glayLayer").click(function () {
      $("#overLayer,#glayLayer").fadeOut("slow", function () {
        $("#overLayer,#glayLayer").remove();
      });
    });
  });
});