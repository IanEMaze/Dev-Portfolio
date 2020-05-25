//Home Page


//animating landing page
$(document).ready(function () {
  $(".header-text, .see-more, #arrow").slideUp(1).delay(1000).slideDown(800);
  $(".secondary_content").hide();
});

//showing div on scroll
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 50) {
        $(".secondary_content").show(1000);
    } else {
      $(".secondary_content").hide();
    }
});

//showing projects on button click then hiding button
$(document).ready(function($){ 
  $('#show-1').click(function() {   
    $('#obj-1').show(1000); 
    $("#show-1").toggle();
  });
  $('#show-2').click(function() {  
    $('#obj-2').show(1000);
    $("#show-2").toggle();
  });
});

