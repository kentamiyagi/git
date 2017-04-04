$(function () {
  $("#tab li").click(function(){
    var Num = $("#tab li").index(this);
    $("#post li").css('display','none');
    $("#post li").eq(Num).css('display','block');
  });
});