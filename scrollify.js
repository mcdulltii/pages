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

var videolist = document.getElementById("videos");
var navbar = document.getElementById("nav");
for (var i=0; i<videos.children-1; i++) {
  var dot = document.createElement("li");
  dot.className = "dot";
  navbar.appendChild(dot);
}
