//burger menu

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {
        $(".top-bar").toggleClass("top-bar-close");
        $(".middle-bar").toggleClass("middle-bar-close");
        $(".bottom-bar").toggleClass("bottom-bar-close");
    });
});

//side sideNav

 function sideNav() {
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }  
}

$(window).resize(function() {
  sideNav();
});