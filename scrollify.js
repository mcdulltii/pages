$(function() {
  $.scrollify({
    section : ".vidsect",
    scrollSpeed: 1400,
    scrollbars: false
  });

  $(".scroll,.scroll-btn").click(function(e) {
    e.preventDefault();
    $.scrollify.next();
  });
});
