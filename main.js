$(document).ready(function() {
  $("#portfolio").load("w3-col m3", function() {
    setTimeout(function(){
     $('body').addClass('loaded');}
     ,100);
   });
});
