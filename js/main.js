$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  /*var scene_title = new ScrollMagic.Scene({
      triggerElement: '#title',
      duration:"130%",
      triggerHook:0.1,
  }).setClassToggle('#title', 'fade-in')
  .addIndicators({
    name: 'fade title',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
    .addTo(controller);*/

  var scene_1_caption = new ScrollMagic.Scene({
      triggerElement: '#page1',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page1>.caption', 'fade-in')
    .addTo(controller);

  var scene_1_img = new ScrollMagic.Scene({
      triggerElement: '#page1',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page1>img', 'fade-in')
    .addTo(controller);

  var scene_2_caption = new ScrollMagic.Scene({
      triggerElement: '#page2',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page2>.caption', 'fade-in')
    .addTo(controller);

  var scene_2_img = new ScrollMagic.Scene({
      triggerElement: '#page2',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page2>img', 'fade-in')
    .addTo(controller);


  var scene_3_caption = new ScrollMagic.Scene({
      triggerElement: '#page3',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page3>.caption', 'fade-in')
    .addTo(controller);

  var scene_3_img = new ScrollMagic.Scene({
      triggerElement: '#page3',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page3>img', 'fade-in')
    .addTo(controller);

  var scene_4_caption = new ScrollMagic.Scene({
      triggerElement: '#page4',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page4>.caption', 'fade-in')
    .addTo(controller);

  var scene_4_img = new ScrollMagic.Scene({
      triggerElement: '#page4',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page4>img', 'fade-in')
    .addTo(controller);


  var scene_5_caption = new ScrollMagic.Scene({
      triggerElement: '#page5',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page5>.caption', 'fade-in')
    .addTo(controller);

  var scene_5_img = new ScrollMagic.Scene({
      triggerElement: '#page5',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page5>img', 'fade-in')
    .addTo(controller);

  var scene_6_caption = new ScrollMagic.Scene({
      triggerElement: '#page6',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page6>.caption', 'fade-in')
    .addTo(controller);

  var scene_6_img = new ScrollMagic.Scene({
      triggerElement: '#page6',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page6>img', 'fade-in')
    .addTo(controller);


  var scene_7_caption = new ScrollMagic.Scene({
      triggerElement: '#page7',
      duration:"20%",
      triggerHook:0.1,

  }).setClassToggle('#page7>.caption', 'fade-in')
    .addTo(controller);

  var scene_7_img = new ScrollMagic.Scene({
      triggerElement: '#page7',
      duration:"130%",
      triggerHook:0.6,

  }).setClassToggle('#page7>img', 'fade-in')
    .addTo(controller);

});