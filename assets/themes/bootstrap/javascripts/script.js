$(
  $('#contact-button').click(function(event){
    event.preventDefault();
    $('#email-button').fadeToggle(400);
    $('#github-button').fadeToggle(600);
    $('#twitter-button').fadeToggle(800);
  })
);