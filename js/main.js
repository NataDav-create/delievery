$(function () {
  // var switchText = $('.delievery-goods__switch-text'),
  //   switchTitle = $('.delievery-goods__switch-title'),
  $('.details__slider-item__content-more').on('click', function () {
    $('.content__hidden').toggleClass('content__visible');
    $('.details__slider-item__content-more').addClass('hidden');
    $('.details__slider-item__content-more--2').addClass('active');

  });
  $('.details__slider-item__content-more--2').on('click', function () {
    $('.content__hidden').removeClass('content__visible');
    $('.details__slider-item__content-more').removeClass('hidden');
    $('.details__slider-item__content-more--2').removeClass('active');

  });

  $('.delievery-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/delievery-goods/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/delievery-goods/arrow-right.svg" alt=""></button>',
    // autoplay: true,
    fade: true
  });

  $('.details__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn details-slick-prev slick-prev"><img src="img/delievery-goods/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn details-slick-next slick-next"><img src="img/delievery-goods/arrow-right.svg" alt=""></button>',
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

  $(".details__switch").on("click", (function (e) {
    e.preventDefault();
    $('.details__switch ').removeClass('active');
    $(this).addClass('active');
    // var slideIndex = $(this).index();
    var slideIndex = $(this).data('index');
    console.log(slideIndex);
    $('.details__slider').slick('slickGoTo', slideIndex);
  }));

  $(".details__slider").on('click', (function (e) {
    e.preventDefault();
    $('.details__switch').removeClass('active');
    $('.details__slider').slick('slickGoTo', slideIndex);
    // $(this).addClass("active");
  }));

  $('.route__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.route__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.route__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    // $($(this).attr("href")).addClass("tab_content--active");
    return false;
  });


});