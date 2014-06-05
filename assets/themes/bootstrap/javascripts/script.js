$(function(){
  var $win = $(window);

  $('#contact-button').click(function(event){
    event.preventDefault();
    $(event.target).hide().delay(11000).fadeIn();
    toggleButtons();
    setTimeout(toggleButtons, 10000);
  });

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

function toggleButtons(){
  $('#email-button').fadeToggle()
  $('#github-button').delay(200).fadeToggle()
  $('#twitter-button').delay(400).fadeToggle();
}