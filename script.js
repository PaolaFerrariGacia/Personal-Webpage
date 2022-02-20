function scrollSection(seccionId) {
  //alert( seccionId );
  var body = $('html, body');
  body.stop().animate({ scrollTop:  $( seccionId ).offset().top - 160  }, 1000, 'swing', function () {
    //alert('Finished animating');
  });
}
