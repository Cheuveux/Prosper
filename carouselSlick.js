$('.carousel-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel-slide'
  });
  $('.carousel-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel-img',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
