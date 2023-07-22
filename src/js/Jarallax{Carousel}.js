!(function (a) {
  "use strict";
  var t = a(window),
    i = a(".welcome-slides");
  t.on("load", function () {
    a(".preloader").fadeOut("slow", function () {
      a(this).remove();
    });
  }),
    a.fn.tooltip && a('[data-toggle="tooltip"]').tooltip(),
    a.fn.classyNav && a("#famieNav").classyNav(),
    a.fn.sticky && a(".famie-main-menu").sticky({ topSpacing: 0 }),
    a.fn.owlCarousel &&
      (i.owlCarousel({
        items: 1,
        margin: 0,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1e3,
      }),
      i.on("translate.owl.carousel", function () {
        a("[data-animation]").each(function () {
          var t = a(this).data("animation");
          a(this)
            .removeClass("animated " + t)
            .css("opacity", "0");
        });
      }),
      i.on("translated.owl.carousel", function () {
        i.find(".owl-item.active")
          .find("[data-animation]")
          .each(function () {
            var t = a(this).data("animation");
            a(this)
              .addClass("animated " + t)
              .css("opacity", "1");
          });
      }),
      a("[data-delay]").each(function () {
        var t = a(this).data("delay");
        a(this).css("animation-delay", t);
      }),
      a("[data-duration]").each(function () {
        var t = a(this).data("duration");
        a(this).css("animation-duration", t);
      }),
      a(".testimonial-slides").owlCarousel({
        items: 1,
        margin: 0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1e3,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
      })),
    a.fn.scrollUp &&
      t.scrollUp({ scrollSpeed: 1500, scrollText: '<i class="arrow_up"></i>' }),
    a.fn.magnificPopup && a(".play-icon").magnificPopup({ type: "iframe" }),
    a.fn.jarallax && a(".jarallax").jarallax({ speed: 0.2 }),
    a('a[href="#"]').on("click", function (a) {
      a.preventDefault();
    }),
    a("#searchIcon").on("click", function () {
      a(".search-form").toggleClass("search-active");
    }),
    a(".closeIcon").on("click", function () {
      a(".search-form").removeClass("search-active");
    }),
    t.width() > 767 && new WOW().init();
})(jQuery);
