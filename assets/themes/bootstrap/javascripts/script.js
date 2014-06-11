$(function(){
  setInterval(toggleFlip, 5000);
  setInterval(swapAdjective, 8000)

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

  words3 = ["dynamic", "purposeful", "impactful", "efficient", 
    "effective", "innovative", "adaptable", "spectacular", "interactive", "beautiful"]
  function swapAdjective(){
    var $span = $('#adjective-inner p')
    $span.fadeOut()
    var text = words3[Math.floor(Math.random() * words3.length)];
    setTimeout(function(){
      $span.html(text).fadeIn();
    }, 600);
  }
})