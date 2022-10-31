$(document).ready(function(){
	// Banner Slick slider
    $(".banner-slider").slick({
      dots: true,
      infinite: true,
      autoplay:true,
      adaptiveHeight: true,
      arrows: false,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
    });
  // End banner slick-slider

  //Service page banner slider start
    $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: true,
      useTransform: true,
      dots: false,
      speed: 400,
      autoplay:true,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
     });

     $('.slider-nav')
      .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }]
    });


    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');

      $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
  //Service page banner slider end

  // testimonial Slick slider
    $(".testimonial-slider").slick({
      dots: true,
      infinite: true,
      autoplay:true,
      adaptiveHeight: true,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          dots: false,
        }
      }, {
        breakpoint: 640,
        settings: {
          dots: false,
        }
      }, {
        breakpoint: 426,
        settings: {
          dots: false,
      }
      },{
        breakpoint: 376,
        settings: {
          dots: false,
      }
      }]
    });
  // End testimonial slick-slider

  // flag Slick slider
    $(".flag-slider").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      autoplay:true,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
      },{
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
      }]
    });
  // End flag slick-slider

  // logo white Slick slider
    $(".logo-white-slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      autoplay:true,
      arrows: false,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
  // End logo white slick-slider

  // logo Slick slider
    $(".logo-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay:true,
      arrows: true,
      nextArrow: '<i class="slick-prev fa fa-angle-left"></i>',
      prevArrow: '<i class="slick-next fa fa-angle-right"></i>',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
  // End logo slick-slider

  

  /*Fancy Box start*/
    $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
    });
  /*Fancy Box end*/
});

  /*Countdown numbers start*/
    // (function($) {
    //     'use strict';

    //     $('.count-number').rCounter();
    // })(jQuery);
  /*Countdown number end*/
  /*Countdown numbers start*/
  $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 100,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 3000});

/*Countdown numbers end*/
