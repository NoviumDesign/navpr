$(function() {
  $('#desktopNav').onePageNav({
      currentClass: 'active',
      scrollThreshold: 0.28,
      scrollSpeed: 2500
  });
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if ($(window).width() > 640) {
    if (y > $(window).height() -54) {
      $('.symbol').show();
    } else {
      $('.symbol').hide();
    }
  }
});

$(document).scroll(function() {
  console.log($(this).scrollTop());
});