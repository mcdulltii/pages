function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function() {
  $("#portfolio").load("w3-row-padding w3-center w3-section", function() {
    setTimeout(function(){
     $('body').addClass('loaded');}
     ,3000);
     toTop();
   });
});
