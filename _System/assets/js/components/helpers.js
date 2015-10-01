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