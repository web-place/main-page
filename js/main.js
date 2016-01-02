(function($) {
  $(window).load(function() {
    $("#loader").fadeOut("slow", function() {
      $("#preloader").delay(300).fadeOut("slow");
    });
  })
  var finalDate = '2017/01/01';
  $('div#counter').countdown(finalDate)
    .on('update.countdown', function(event) {
      $(this).html(event.strftime('<span>%D <em>days</em></span>' +
        '<span>%H <em>hours</em></span>' +
        '<span>%M <em>minutes</em></span>' +
        '<span>%S <em>seconds</em></span>'));
    });
  $('input').placeholder()
  $('.modal-toggles ul').on('click', 'a', function(e) {
    var html = $('html'),
      main = $('main, footer'),
      footer = $('footer'),
      curMod = $(this).attr('href'),
      modal = $(curMod),
      modClose = modal.find('#modal-close');
    main.fadeOut(500, function() {
      $('html,body').scrollTop(0);
      modal.addClass('is-visible');
    });
    e.preventDefault();
    if (html.hasClass('oldie')) {
      $(document).on('click', "#modal-close", function(evt) {
        $('html,body').scrollTop(0);
        modal.removeClass('is-visible');
        setTimeout(function() {
          main.fadeIn(500);
        }, 500);
        evt.preventDefault();
      });
    }
    else {
      modClose.on('click', function(evt) {
        $('html,body').scrollTop(0);
        modal.removeClass('is-visible');
        setTimeout(function() {
          main.fadeIn(500);
        }, 500);
        evt.preventDefault();
      });
    }
  });

  $("#owl-slider").owlCarousel({
    navigation: false,
    pagination: true,
    items: 4,
    navigationText: false
  });
  setTimeout(function() {

    $('main h1, #mod-about h1').fitText(1.1, {
      minFontSize: '28px',
      maxFontSize: '38px'
    });

  }, 100);
})(jQuery);
