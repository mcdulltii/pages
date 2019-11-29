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
});
