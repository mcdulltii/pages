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

  $(".top").click(function(e) {
    e.preventDefault();
    $.scrollify.move("#1");
  });
});

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("top").style.display = "block";
  } else {
    document.getElementsByClassName("top").style.display = "none";
  }
};
