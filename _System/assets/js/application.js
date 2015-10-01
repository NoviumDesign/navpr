
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

    if ($(window).width() > 640) {
      $('.min-height-100').css('min-height', $(window).height() -54);
      $('.min-height-100-desktop').css('min-height', $(window).height() -54);
    }
  }

  $(window).resize(function() {
    fullScreen();
  });

  fullScreen();

});

/* -------- _System/assets/js/components/navigation.js -------- */ 

$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active" );
});

$( "#mobileNav a" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( "#navToggle" ).toggleClass( "active" );
});

/* -------- _System/assets/js/components/sticky-section.js -------- */ 

$(function() {

  if ($(window).width() > 960) {
    $("section").stick_in_parent({
      offset_top: 54
    });
  }

});