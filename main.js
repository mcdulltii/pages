$(document).ready(function() {
  $("#portfolio").load("w3-row-padding w3-center w3-section", function() {
    setTimeout(function(){
     $('body').addClass('loaded');}
     ,3000);
   });
});
