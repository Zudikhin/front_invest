$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    // $('.idea_slider').slick({
    //     dots: true,
    //     infinite: true,
    //     arrows: false,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    $('.idea_slider').slick({
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });


});