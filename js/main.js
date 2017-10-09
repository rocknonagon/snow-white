$(document).ready(function(){
  $("img.lazy ").each(function() {
    $(this).attr("src", $(this).attr("data-original"));
    $(this).removeAttr("data-original");
});

  var controller = new ScrollMagic.Controller();

  $('figure').each(function(){
    
    var caption_scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration:"60%",
      triggerHook:0.5,

  }).setClassToggle($(this).children('figcaption')[0], 'fade-in')
    .addTo(controller);

  var img_scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration:"110%",
      triggerHook:0.7,

  }).setClassToggle($(this).children('img')[0], 'fade-in')
    .addTo(controller);
  });

});