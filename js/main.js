$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  /*var scene_title = new ScrollMagic.Scene({
      triggerElement: '#title',
      duration:"110%",
      triggerHook:0.5,
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
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page1>figcaption', 'fade-in')
    .addTo(controller);

  var scene_1_img = new ScrollMagic.Scene({
      triggerElement: '#page1',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page1>img', 'fade-in')
    .addTo(controller);

  var scene_2_caption = new ScrollMagic.Scene({
      triggerElement: '#page2',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page2>figcaption', 'fade-in')
    .addTo(controller);

  var scene_2_img = new ScrollMagic.Scene({
      triggerElement: '#page2',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page2>img', 'fade-in')
    .addTo(controller);


  var scene_3_caption = new ScrollMagic.Scene({
      triggerElement: '#page3',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page3>figcaption', 'fade-in')
    .addTo(controller);

  var scene_3_img = new ScrollMagic.Scene({
      triggerElement: '#page3',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page3>img', 'fade-in')
    .addTo(controller);

  var scene_4_caption = new ScrollMagic.Scene({
      triggerElement: '#page4',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page4>figcaption', 'fade-in')
    .addTo(controller);

  var scene_4_img = new ScrollMagic.Scene({
      triggerElement: '#page4',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page4>img', 'fade-in')
    .addTo(controller);


  var scene_5_caption = new ScrollMagic.Scene({
      triggerElement: '#page5',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page5>figcaption', 'fade-in')
    .addTo(controller);

  var scene_5_img = new ScrollMagic.Scene({
      triggerElement: '#page5',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page5>img', 'fade-in')
    .addTo(controller);

  var scene_6_caption = new ScrollMagic.Scene({
      triggerElement: '#page6',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page6>figcaption', 'fade-in')
    .addTo(controller);

  var scene_6_img = new ScrollMagic.Scene({
      triggerElement: '#page6',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page6>img', 'fade-in')
    .addTo(controller);


  var scene_7_caption = new ScrollMagic.Scene({
      triggerElement: '#page7',
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle('#page7>figcaption', 'fade-in')
    .addTo(controller);

  var scene_7_img = new ScrollMagic.Scene({
      triggerElement: '#page7',
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle('#page7>img', 'fade-in')
    .addTo(controller);

});