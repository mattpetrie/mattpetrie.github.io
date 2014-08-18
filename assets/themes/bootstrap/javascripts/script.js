$(function(){

  if(window.location.hash == "#portfolio"){
    $('#intro').hide();
    showPortfolio();
  }

  window.onhashchange = function(){
    if (window.location.hash == "#portfolio"){
      showPortfolio();
    } else {
      showIntro();
    }
  };
  setInterval(swapTech, 6000);
  setTimeout(function(){
    setInterval(swapAdjective, 6000);
  }, 3000);

  var flipped = false;
  var words1 = ["Ruby on Rails", "JavaScript", "jQuery", "SQL", "HTML5", "CSS3", "Grunt.js"]; 
  var words2 = ["Backbone.js", "RSpec", "Capybara", "Sass", "Node.js", "Mocha", "CoffeeScript", "Git"];
  var words1Counter = 0;
  var words2Counter = 0;

  function swapTech(){
    var text;
    $('.rotator-inner').toggleClass('flipX');
    if(flipped === false){
       text = words2[words2Counter];
       words2Counter = (words2Counter === words2.length) ? 0 : words2Counter + 1;
      $('.back p').html(text);
      flipped = true;
    } else {
      text = words1[words1Counter];
      words1Counter = (words1Counter === words1.length) ? 0 : words1Counter + 1;
      $('.front p').html(text);
      flipped = false;
    }
  }

  var adjFlipped = false;
  words3 = ["dynamic", "useful", "impactful", "efficient", "responsive",
    "effective", "innovative", "adaptable", "spectacular", "interactive", "beautiful"];
  var words3Counter = 0;

  function swapAdjective(){
    $("#adjective-inner").toggleClass('flipY');
    var text = words3[words3Counter];
    words3Counter = (words3Counter === words3.length) ? 0 : words3Counter + 1;
    if(adjFlipped === false){
      $('#adj-back p').html(text);
      adjFlipped = true;
    } else {
      $('#adj-front p').html(text);
      adjFlipped = false;
    }
  }

  $('#portfolio-link').click(function(){
    showPortfolio();
  });

  $('#intro-link').click(function(){
    showIntro();
  });

  function showPortfolio(){
    $('#intro').fadeOut();
    $('#portfolio').delay(600).fadeIn('slow');
  }

  function showIntro(){
    $('#portfolio').fadeOut();
    $('#intro').delay(600).fadeIn('slow');
  }
});