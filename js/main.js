$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var scene_title = new ScrollMagic.Scene({
      triggerElement: '#title'
  }).setClassToggle('#title', 'fade-in')
    .addTo(controller);

  var scene_1 = new ScrollMagic.Scene({
      triggerElement: '#page1'
  }).setClassToggle('#page1', 'fade-in')
    .addTo(controller);

  var scene_2 = new ScrollMagic.Scene({
      triggerElement: '#page2'
  }).setClassToggle('#page2', 'fade-in')
    .addTo(controller);

  var scene_3 = new ScrollMagic.Scene({
      triggerElement: '#page3'
  }).setClassToggle('#page3', 'fade-in')
    .addTo(controller);

  var scene_4 = new ScrollMagic.Scene({
      triggerElement: '#page4'
  }).setClassToggle('#page4', 'fade-in')
    .addTo(controller);

  var scene_5 = new ScrollMagic.Scene({
      triggerElement: '#page5'
  }).setClassToggle('#page5', 'fade-in')
    .addTo(controller);

  var scene_6 = new ScrollMagic.Scene({
      triggerElement: '#page6'
  }).setClassToggle('#page6', 'fade-in')
    .addTo(controller);

  var scene_7 = new ScrollMagic.Scene({
      triggerElement: '#page7'
  }).setClassToggle('#page7', 'fade-in')
    .addTo(controller);

});