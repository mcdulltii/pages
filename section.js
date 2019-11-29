$(function() {
  $.scrollify({
    section : ".vidsect",
    scrollSpeed: 1100
  });

  $(".scroll,.scroll-btn").click(function(e) {
    e.preventDefault();
    $.scrollify.next();
  });
});
