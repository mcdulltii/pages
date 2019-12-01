randomNumber = Math.floor(Math.random()*2+1);

$("#loader-wrapper").ready(function() {
   if (randomNumber == 1) {
      document.getElementById("rd1").style.display = "inline";
      document.getElementById("rd2").style.display = "none";
   }
   if (randomNumber == 2) {
      document.getElementById("rd1").style.display = "none";
      document.getElementById("rd2").style.display = "inline";
   }
});

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function onClickgrid(element) {
  var items = document.getElementsByClassName('item');
  var image = items[element].style["background-image"].match('\"(.*)\"')[1];
  document.getElementById("img01").src = image;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("caption").innerHTML = '';
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("skew-button").style.display = "none";
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("skew-button").style.display = "block";
  }
};

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(toTop());
