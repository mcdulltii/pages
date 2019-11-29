if(window.innerWidth > 1024) {
  var videolist = document.getElementById("videos");
  var navbar = document.getElementById("nav");
  var vidlength = videolist.children.length+1;
  for (var i=1; i<vidlength; i++) {
    var dot = document.createElement("li");
    dot.className = "dot "+i.toString();
    navbar.appendChild(dot);
  }

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

    for (var i=1; i<vidlength; i++) {
      $("."+i.toString()).click(function(e) {
        e.preventDefault();
        $.scrollify.move("#"+($(e.target).attr('class')).match(/\d+/)[0]);
      });
    }
  });
}
