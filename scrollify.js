$(function() {
  $.scrollify({
    section : ".vidsect",
    scrollSpeed: 500,
    scrollbars: false
  });

  $(".scroll,.scroll-btn").click(function(e) {
    e.preventDefault();
    $.scrollify.next();
  });

  $("#myBtn").click(function(e) {
    e.preventDefault();
    $.scrollify.move("#1");
  });
});

$(document).on('scroll', function(e){
    if (document.URL.match(/#1/g) == null) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
});
