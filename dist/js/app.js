$(function() {
  "use strict";
  
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })
});