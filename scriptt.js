/*----------------Preloader----------------*/
   $(window).on('load', function(){
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut();
   });

/*----------------Carousel----------------*/
$(function(){
    $("#team-members").owlCarousel({
        items:2,
        autoplay:true,
        smartspeed:700,
        loop:true,
        autoplayhoverpause:true,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>']
    });
  });
  
/*----------------Progrss Bars----------------*/
$(function() {
    $(".progress-bar").each(function() {
            
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"
         }, 3000);
    });
});

/*----------------Portfolio----------------*/
$(window).on('load' , function(){
    $(".isotope").isotope({

    });
      $("#isotope-filters").on('click', 'button', function(){
       var filterValue = $(this).attr('data-filter')
       $(".isotope").isotope({
          filter: filterValue 
      });
      $("#isotope-filters").find(".active").removeClass('active');
      $(this).addClass('active'); 
    });
});

/*----------------Magnifer----------------*/
$(function(){
  $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          enabled:true
        }
      // other options
  });
});

/*----------------Testimonial----------------*/
$(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      autoplay:true,
      smartspeed:700,
      loop:true,
      autoplayhoverpause:true,
      nav:true,
      dots:false,
      navText:['<i class="fas fa-angle-left"></i>' ,'<i class="fas fa-angle-right"></i>']
  });
});

/*----------------stats----------------*/
$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});


/*---------------animation-----------------*/
//animate on scroll
$(function(){
  new WOW().init();
});

//home animation on page load
$(window).on('load',function(){
  $("#home-heading-1").addClass("animated fadeInDown")
  $("#home-heading-2").addClass("animated fadeInLeft")
  $("#home-text").addClass("animated zoomIn")
});

