$(function() {
 $(".jsbox").hover(function(){
   $(this).animate({
     width: "360",height: "360"
   })}, function(){
     $(this).animate({
       top: "0", left: "0",
       width: "300",height: "300"
     });
   });
});
