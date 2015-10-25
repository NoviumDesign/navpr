$(function() {

  function fullScreen() {

    if ($(window).width() > 640) {
      $('.min-height-100').css('min-height', $(window).height() -54);
      $('.height-100').css('height', $(window).height() -54);
      $('.min-height-100-desktop').css('min-height', $(window).height() -54);
    }
  }

  $(window).resize(function() {
    fullScreen();
  });

  fullScreen();

});