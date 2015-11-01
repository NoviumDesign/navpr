$(function() {
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
});

$(function() {
  $('#desktopNav, #mobileNav').onePageNav({
      currentClass: 'active',
      scrollThreshold: 0.28
  });
  $('#mobileNav a').click({
    $('#mobileNav').removeClass('active')
  })
});