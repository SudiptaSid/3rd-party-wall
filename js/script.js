// Wow js
new WOW().init();

// Isotope
$(".aboutGrid").isotope();

// Preloader
jQuery(window).on("load", function () {
  jQuery(".preloader").fadeOut(500);
});

// Sticky Navbar
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".mainHeader .navbar").addClass("sticky");
  } else {
    $(".mainHeader .navbar").removeClass("sticky");
  }
});

// Back to top
$(document).ready(function () {
  $("#scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });
});

// Smooth Scroll
$(".scroll")
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        var offset = 100;
        $("html").animate(
          {
            scrollTop: target.offset().top - offset,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });

var sidDoc;

(function ($) {
  "use strict";
  sidDoc = {
    init: function () {
      this.bannerSlider();
      this.gallery();
    },

    // Hero Slider One
    bannerSlider() {
      var bannerSliderOne = $("#heroSliderOne");

      bannerSliderOne.on("init", function (e, slick) {
        var $firstAnimatingElements = $(".singleBanner:first-child").find(
          "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
      });

      bannerSliderOne.on(
        "beforeChange",
        function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $(
            '.singleBanner[data-slick-index="' + nextSlide + '"]'
          ).find("[data-animation]");
          doAnimations($animatingElements);
        }
      );

      // active banner slider
      bannerSliderOne.slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow:
          '<div class="slick-arrow slick-prev"><i class="lni lni-arrow-left"></i></div>',
        nextArrow:
          '<div class="slick-arrow slick-next"><i class="lni lni-arrow-right"></i></div>',
      });

      // Do for slider animation
      function doAnimations(elements) {
        var animationEndEvents =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data("delay");
          var $animationType = "animated " + $this.data("animation");
          $this.css({
            "animation-delay": $animationDelay,
            "-webkit-animation-delay": $animationDelay,
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    },

    // Project Slider
    gallery() {
      var gslider = $(".projectSlider");
      gslider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        dots: false,
        arrows: true,
        prevArrow:
          '<div class="slick-arrow slick-prev"><i class="lni lni-arrow-left"></i></div>',
        nextArrow:
          '<div class="slick-arrow slick-next"><i class="lni lni-arrow-right"></i></div>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      // Init magnificPopup on Menu Gallery
      $(".projectSlider").each(function () {
        // the containers for all your galleries
        var additionalImages = $(".slick-slide .projectPopup");
        additionalImages.magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
          mainClass: "mfp-fade",
        });
      });
    },
  };

  $(document).ready(function () {
    sidDoc.init();
  });
})(jQuery);
