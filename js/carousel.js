// CAROUSEL
$(document).ready(function () {
    $(".books_section .owl-carousel").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        600: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  
    $(".about_opinions_section .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 20,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
  
        1200: {
          items: 1,
        },
      },
    });
  });