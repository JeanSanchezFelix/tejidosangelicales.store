/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


/*
  Fade-Down Animation
*/
$(document).ready(function() {
// Select elements with the data-animation attribute and apply the corresponding animation class
$('[data-animation]').each(function() {
	var animation = $(this).data('animation');
	var delay = $(this).data('delay') || '0ms';
	$(this).addClass('animate__animated animate__' + animation).css('animation-delay', delay);
});
});

