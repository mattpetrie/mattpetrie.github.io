$(function(){
  setInterval(swapTech, 6000);
  setTimeout(function(){
    setInterval(swapAdjective, 6000)
  }, 3000);

  var flipped = false
  var words1 = ["Ruby on Rails", "JavaScript", "jQuery", "SQL", "HTML5", "CSS3"] 
  var words2 = ["Backbone.js", "RSpec", "Capybara", "Sass", "Node.js", "CoffeeScript", "Git"]
  function swapTech(){
    $('.rotator-inner').toggleClass('flipX');
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

  var adjFlipped = false
  words3 = ["dynamic", "useful", "impactful", "efficient", 
    "effective", "innovative", "adaptable", "spectacular", "interactive", "beautiful"]
  function swapAdjective(){
    $("#adjective-inner").toggleClass('flipY');
    var text = words3[Math.floor(Math.random() * words3.length)];
    if(adjFlipped === false){
      $('#adj-back p').html(text);
      adjFlipped = true;
    } else {
      $('#adj-front p').html(text);
      adjFlipped = false;
    }
  }

  $('#portfolio-link').click(function(){
    $('#intro').fadeOut();
    $('#portfolio').delay(600).fadeIn('slow');
  });

  $('#intro-link').click(function(){
    $('#portfolio').fadeOut();
    $('#intro').delay(600).fadeIn('slow');
  });

})