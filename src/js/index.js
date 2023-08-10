/*
  Calculate age based on birthdate (January 7th)
*/
function calculateAge(b, d = new Date()) {
	var a = d.getMonth();
	var c = d.getDate();
	return d.getFullYear() - b.getFullYear() - ((a < b.getMonth() || (a === b.getMonth() && c < b.getDate())) ? 1 : 0);
}

var ageElement = document.getElementById("age");
if (ageElement) {
	ageElement.textContent = calculateAge(new Date(2004, 0, 7));
}


/*
  Slidemenu
*/
(function () {
	var $body = document.body
		, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if (typeof $menu_trigger !== 'undefined') {
		$menu_trigger.addEventListener('click', function () {
			$body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
		});
	}

}).call(this);


/*
  Fade-Down Animation
*/
$(document).ready(function () {
	// Select elements with the data-animation attribute and apply the corresponding animation class
	$('[data-animation]').each(function () {
		var animation = $(this).data('animation');
		var delay = $(this).data('delay') || '0ms';
		$(this).addClass('animate__animated animate__' + animation).css('animation-delay', delay);
	});
});


/*
  Popup
*/
// Function to show the popup
function showPopup() {
	event.preventDefault();
	document.getElementById("popup").style.display = "block";
	document.body.appendChild(document.getElementById("popup")); // Append the popup to the body
}
// Function to hide the popup
function hidePopup() {
	document.getElementById("popup").style.display = "none";
}


/*
  Dropdown
*/
$(document).ready(function() {
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".dropdown").length) {
            $(".dropdown.open").removeClass("open");
            $(".dropdown ul").slideUp("fast");
        }
    });

    $(".dropdown").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).children("ul").slideUp("fast");
        } else {
            $(this).addClass("open");
            $(this).children("ul").slideDown("fast");
        }
    });

    $(".dropdown a").on("click", function (e) {
        e.stopPropagation(); 
        window.location.href = $(this).attr("href"); 
    });
});


/*
  Sorting Dropdown
*/
// Store the original order of items when the page loads
const productListing = document.querySelector('.product-listing');
const originalItems = Array.from(productListing.querySelectorAll('.item'));

const sortingSelector = document.querySelector('[data-bs-target="sorting-selector"]');
sortingSelector.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		const selectedValue = e.target.getAttribute('value');
		let items = Array.from(originalItems); // Make a copy of the original items to sort

		switch (selectedValue) {
			case 'price-low-to-high':
				items.sort((a, b) => {
					const priceA = parseFloat(a.querySelector('.s-cost strong').innerText.replace('$', ''));
					const priceB = parseFloat(b.querySelector('.s-cost strong').innerText.replace('$', ''));
					return priceA - priceB;
				});
				break;
			case 'price-high-to-low':
				items.sort((a, b) => {
					const priceA = parseFloat(a.querySelector('.s-cost strong').innerText.replace('$', ''));
					const priceB = parseFloat(b.querySelector('.s-cost strong').innerText.replace('$', ''));
					return priceB - priceA;
				});
				break;
			case 'name-a-to-z':
				items.sort((a, b) => {
					const nameA = a.querySelector('.item-text').innerText.toUpperCase();
					const nameB = b.querySelector('.item-text').innerText.toUpperCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
				break;
			case 'name-z-to-a':
				items.sort((a, b) => {
					const nameA = a.querySelector('.item-text').innerText.toUpperCase();
					const nameB = b.querySelector('.item-text').innerText.toUpperCase();
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
				break;
			default:
				items = Array.from(originalItems); // Reset the items back to the original order
				break;
		}

		// Clear existing items
		while (productListing.firstChild) {
			productListing.removeChild(productListing.firstChild);
		}
		// Append sorted items back to the product listing
		items.forEach((item) => {
			productListing.appendChild(item);
		});
	}
});


/*
  WOW Animation Activation
*/
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
		a.fn.classyNav && a("#Nav").classyNav(),
		a.fn.sticky && a(".main-menu").sticky({ topSpacing: 0 }),
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

!(function (e) {
	e.fn.classyNav = function (n) {
		var s = e(".classy-nav-container"),
			a = e(".classynav ul"),
			o = e(".classynav > ul > li"),
			l = e(".classy-navbar-toggler"),
			i = e(".classycloseIcon"),
			t = e(".navbarToggler"),
			d = e(".classy-menu"),
			r = e(window),
			c = e.extend(
				{
					theme: "light",
					breakpoint: 991,
					openCloseSpeed: 350,
					megaopenCloseSpeed: 700,
					alwaysHidden: !1,
					openMobileMenu: "left",
					dropdownRtl: !1,
					stickyNav: !1,
					stickyFooterNav: !1,
				},
				n
			);
		return this.each(function () {
			function n() {
				window.innerWidth <= c.breakpoint
					? s.removeClass("breakpoint-off").addClass("breakpoint-on")
					: s.removeClass("breakpoint-on").addClass("breakpoint-off");
			}
			("light" !== c.theme && "dark" !== c.theme) || s.addClass(c.theme),
				("left" !== c.openMobileMenu && "right" !== c.openMobileMenu) ||
				s.addClass(c.openMobileMenu),
				!0 === c.dropdownRtl && s.addClass("dropdown-rtl"),
				l.on("click", function () {
					t.toggleClass("active"), d.toggleClass("menu-on");
				}),
				i.on("click", function () {
					d.removeClass("menu-on"), t.removeClass("active");
				}),
				o.has(".dropdown").addClass("cn-dropdown-item"),
				o.has(".megamenu").addClass("megamenu-item"),
				a.find("li a").each(function () {
					e(this).next().length > 0 &&
						e(this)
							.parent("li")
							.addClass("has-down")
							.append('<span class="dd-trigger"></span>');
				}),
				a.find("li .dd-trigger").on("click", function (n) {
					n.preventDefault(),
						e(this)
							.parent("li")
							.children("ul")
							.stop(!0, !0)
							.slideToggle(c.openCloseSpeed),
						e(this).parent("li").toggleClass("active");
				}),
				e(".megamenu-item").removeClass("has-down"),
				a.find("li .dd-trigger").on("click", function (n) {
					n.preventDefault(),
						e(this)
							.parent("li")
							.children(".megamenu")
							.slideToggle(c.megaopenCloseSpeed);
				}),
				n(),
				r.on("resize", function () {
					n();
				}),
				!0 === c.alwaysHidden &&
				s.addClass("breakpoint-on").removeClass("breakpoint-off"),
				!0 === c.stickyNav &&
				r.on("scroll", function () {
					r.scrollTop() > 0
						? s.addClass("classy-sticky")
						: s.removeClass("classy-sticky");
				}),
				!0 === c.stickyFooterNav && s.addClass("classy-sticky-footer");
		});
	};
})(jQuery);