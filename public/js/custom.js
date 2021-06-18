(function($) {
  "use strict";

  /* ..............................................
	   Loader 
	   ................................................. */
  $(window).on("load", function() {
    $(".preloader").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    $("body").delay(450).css({
      overflow: "visible",
    });
  });

  /* ..............................................
	   Fixed Menu
	   ................................................. */

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("fixed-menu");
    } else {
      $(".main-header").removeClass("fixed-menu");
    }
  });


  /* ..............................................
	   Tooltip
	   ................................................. */

  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* ..............................................
	   Scroll
	   ................................................. */

  $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    $("#back-to-top").click(function() {
      $("html, body").animate({
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });

  // close dropdown menu when clicking on an element

  $(document).on('click', function(event) {
    var $clickedOn = $(event.target),
      $collapsableItems = $('.collapse'),
      isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
      isLink = ($clickedOn.closest('a').length == 1),
      isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    if ((!isToggleButton && isLink) || isOutsideNavbar) {
      $collapsableItems.each(function() {
        $(this).collapse('hide');
      });
    }
  });

      // mascara telefone e bloqueio de letras

  $(document).ready(function() {

    var SPMaskBehavior = function(val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 00000-0000';
      },
      spOptions = {
        onkeypress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
      };
    $("#telefone").mask(SPMaskBehavior, spOptions);
    if(!((SPMaskBehavior >= "0") && (SPMaskBehavior <= "9")));
  })

  $(".flipper").click(function() {
    var target = $( event.target );
    if ( target.is("a") ) {
      //follow that link
      return true;
    } else {
      $(this).toggleClass("flip");
    }
    return false;
  });

})(jQuery);
