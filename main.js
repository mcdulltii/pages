$(document).not( "loader-wrapper" ).load(function() {
    setTimeout(function(){
     $('body').addClass('loaded');}
     ,100);
});
