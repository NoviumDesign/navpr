
/* -------- _System/assets/js/components/active-nav.js -------- */ 

$(function() {
  $('#nav').onePageNav({
      currentClass: 'active',
      scrollThreshold: 0.28
  });
});

/* -------- _System/assets/js/components/helpers.js -------- */ 

$(function() {

    function fullScreen() {

        $('.min-height-100').css('min-height', $(window).height() -54);
        if ($(window).width() > 960) {
          $('.min-height-100-desktop').css('min-height', $(window).height() -54);
        }
    }

    $(window).resize(function() {
        fullScreen();
    });

    fullScreen();

});

/* -------- _System/assets/js/components/sticky-section.js -------- */ 

$(function() {
    $("section").stick_in_parent({
      offset_top: 54
    });
});

