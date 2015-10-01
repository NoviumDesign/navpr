$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active" );
});

$( "#mobileNav a" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( "#navToggle" ).toggleClass( "active" );
});