jQuery(document).ready(function () {

  /*======== 2. MENU SCROLL ========*/
  // 卷軸非置頂時的主 menu 控制
  $(window).load(function () {
    $('.body-wrapper').each(function () {
      var header_area = $('.header-wrapper');
      var main_area = header_area.children('.navbar');

      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function () {
        if (main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() === 0 || $(this).width() < 750)) {
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({ 'margin-top': original.nav_top }, {
            duration: 300, queue: false, complete: function () {
              header_area.css('height', 'auto');
            }
          });
        } else if (!main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top'))) {

          header_area.css('height', header_area.height());
          main_area.css({ 'opacity': '0' }).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({ 'opacity': 1 });

          navigation.css({ 'margin-top': '0px' });
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

  /*======== 4. MENU DROPDOWN ON HOVER ========*/
  var header_area = $('.header-wrapper');
  if (header_area.width() > 750) {
    $('.nav .dropdown').hover(function () {
      $(this).addClass('open');
    },
      function () {
        $(this).removeClass('open');
      }
    );
  }

  /*======== 9. BACK TO TOP ========*/
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#backToTop').css('opacity', 1);
      } else {
        $('#backToTop').css('opacity', 0);
      }
    });
  });

  /*======== 10. SMOOTH SCROLLING TO SECTION ========*/
  // 以動畫方式快速前往各錨點
  // 包跨 back to top
  $(document).ready(function () {
    $('.scrolling  a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var target = $(this).attr('href');
      $(target).velocity('scroll', {
        duration: 800,// speed
        offset: -90,
        easing: 'easeOutExpo',
        mobileHA: false
      });
    });
  });
});
