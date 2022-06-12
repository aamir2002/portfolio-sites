$(function () {
  
  var header = $('header');
  var intro = $('.intro');
  let introH = intro.innerHeight();
  var scrollPos = $(window).scrollTop();
  let nav__link = $('.nav__link');

  $(window).on('scroll load resize', function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass('header__fixed');
    } else {
      header.removeClass('header__fixed');
    }
  })
  
})