var gradients = document.getElementById('gradient-stack').children;

var links = document.getElementsByTagName('a');

function transitionGradientIn(index) {
  console.log('got here', links[index], gradients[index]);
  gradients[index].className = 'visible';
}

function transitionGradientOut(index) {
  gradients[index].className = '';
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  Array.prototype.forEach.call(links, function(link, index) {
    link.addEventListener('mouseover', function() {
      transitionGradientIn(index);
    });

    link.addEventListener('mouseout', function() {
      transitionGradientOut(index);
    });
  });
});
