$(function () {
  var switchText = $('.delievery-goods__switch-text'),
    switchTitle = $('.delievery-goods__switch-title');
  $('.delievery-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/delievery-goods/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/delievery-goods/arrow-right.svg" alt=""></button>',
    // autoplay: true,
    fade: true
  });


  $(".delievery-goods__switch-title").on("click", (function (e) {
    e.preventDefault();
    $('.delievery-goods__switch-title ').removeClass('active');
    $(this).addClass('active');
    // var slideIndex = $(this).index();
    var slideIndex = $(this).data('index');
    console.log(slideIndex);
    $('.delievery-slider').slick('slickGoTo', slideIndex);
  }));

  $(".delievery-slider").on('click', (function (e) {
    e.preventDefault();
    $('.delievery-goods__switch-title').removeClass('active');
    $('.delievery-slider').slick('slickGoTo', slideIndex);
    $(this).addClass("active");
  }));


});