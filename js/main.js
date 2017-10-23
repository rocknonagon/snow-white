$(document).ready(function(){
  lazyload();
  
  var controller = new ScrollMagic.Controller();

    $('figure').each(function(){

      var img_scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration:"120%",
        triggerHook:0.1,
    })
      .setClassToggle($(this).find('img')[0], 'fade-in')
      .addTo(controller);

      var caption_scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration:"120%",
        triggerHook:0.1,

    })
      .setClassToggle($(this).children('figcaption')[0], 'fade-in')
      .addTo(controller);
  });

    $('.pin-me').each(function(){
      
      var pin_scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0,
        duration:"100%"
      })
        .setPin(this, {pushFollowers : false})
        .addTo(controller);
    });

      


});