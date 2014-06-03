$(function(){
  $('#contact-button').click(function(event){
    event.preventDefault();
    $('#email-button').fadeToggle(400);
    $('#github-button').fadeToggle(600);
    $('#twitter-button').fadeToggle(800);
  });

  var $win = $(window);
  var $li = $('.nav li').first();
  $win.scroll(function(){
    if($win.scrollTop() > 100){
      $li.fadeIn();
    } else {
      $li.fadeOut();
    }
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});