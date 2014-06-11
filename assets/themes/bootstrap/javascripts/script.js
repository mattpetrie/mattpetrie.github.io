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
  var words = ["Ruby on Rails", "Backbone.js", "Bootstrap", "HTML5", "CSS3", "RSpec", "Capybara", "JavaScript", "Sass", "Node.js"]
  function toggleFlip(){
    $('.rotator-inner').toggleClass('flip');
    var text = words[Math.floor(Math.random() * words.length)];
    if(flipped === false){
      $('.back p').html(text);
      flipped = true;
    } else {
      $('.front p').html(text);
      flipped = false;
    }
  }

  $('#portfolio-link').click(function(){
    event.preventDefault();
    $('#intro').fadeOut();
    $('#portfolio').delay(600).fadeIn('slow');
  });
})