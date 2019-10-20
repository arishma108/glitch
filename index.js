$('svg').hover(function() {
  $(this).addClass('glitch');
}, function() {
  $(this).removeClass('glitch');
});

$('svg').hover(function() {
  $(this).removeClass('glitchout');
}, function() {
  $(this).addClass('glitchout');
});
