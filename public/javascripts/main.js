var PRIMARY_COLOR = 'rgb(255, 64, 48)';
var SECONDARY_COLOR = '#FFF';
var BG_COLOR = '#f2f2f2';

$(document).ready(function() {
	


	$('#navlinks ul li').hover(function() {
		$(this).find('span.nav-highlight').css('background-color', PRIMARY_COLOR);
	}, function() {
		$(this).find('span.nav-highlight').css('background-color', BG_COLOR);
	});

	$('#navlinks ul li').click(function() {
		$('span.nav-highlight-active').removeClass('nav-highlight-active');
		$(this).find('span.nav-highlight').toggleClass('nav-highlight-active');

		switch ($(this).prop('id')) {
			case 'nav_about':
				initialize_about();
				break;
			case 'nav_resume':
				initialize_resume();
				break;
			case 'nav_blog':
				initialize_blog();
				break;
			default:
				initialize_home();
				break;
		}
	});

	$('#brand').click(function(event) {
		$('span.nav-highlight-active').removeClass('nav-highlight-active');
		initialize_home();
	});

});

function initialize_home() {
	$('body').css('background-color', BG_COLOR);
}

function initialize_about() {
	$('body').css('background-color', 'blue');
}

function initialize_resume() {
	$('body').css('background-color', 'red');
}

function initialize_blog() {
	$('body').css('background-color', 'yellow');
}