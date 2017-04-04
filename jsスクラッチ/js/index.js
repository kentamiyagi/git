$(function() {
  $(".jsbox").mouseover(function(){
    $(this).css("background-color","red");
  }).mouseout(function(){
    $(this).css("background-color","");
  });
});
