/*
*Requires
*jquery
*jquery Easing - http::link.com
*/

var $navbar = $('.navbar');
var $navbarFixed = $('.navbar-fixed-top');

$(window).scroll( function() {

  //console.log("offset", $navbar.offset() );
  console.log("top", $navbar.offset().top );

  if ( $navbar.offset().top > 40 ){
    $navbarFixed.addClass("top-nav-collapse");
  } else {
    $navbarFixed.removeClass("top-nav-collapse");
  }
});


// listen for click - scroll page

$( function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    console.log(event);

    var $anchor = $(this);
    var href = $anchor.attr('href');
    var $anchorID = $(href);

    $('html, body').stop().animate({
      scrollTop: $( $anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');

  });

});
