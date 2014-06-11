// $(function(){
//   $('#contact-button').click(function(event){
//     event.preventDefault();
//     $('#email-button').fadeToggle(400);
//     $('#github-button').fadeToggle(600);
//     $('#twitter-button').fadeToggle(800);
//   });

//   var $win = $(window);
//   var $li = $('.nav li').first();
//   $win.scroll(function(){
//     if($win.scrollTop() > 100){
//       $li.fadeIn();
//     } else {
//       $li.fadeOut();
//     }
//   });

//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
$(function(){
  setInterval(toggleFlip, 5000);

  var flipped = false
  var words1 = ["Ruby on Rails", "JavaScript", "jQuery", "SQL", "HTML5", "CSS3"] 
  var words2 = ["Backbone.js", "RSpec", "Capybara", "Sass", "Node.js", "CoffeeScript", "Git"]
  function toggleFlip(){
    $('.rotator-inner').toggleClass('flip');
    if(flipped === false){
       var text = words2[Math.floor(Math.random() * words2.length)];
      $('.back p').html(text);
      flipped = true;
    } else {
      var text = words1[Math.floor(Math.random() * words1.length)];
      $('.front p').html(text);
      flipped = false;
    }
  }

  $('#portfolio-link').click(function(){
    event.preventDefault();
    $('#intro').fadeOut();
    $('#portfolio').delay(600).fadeIn('slow');
  });

  $('#intro-link').click(function(){
    event.preventDefault();
    $('#portfolio').fadeOut();
    $('#intro').delay(600).fadeIn('slow');
  });
})