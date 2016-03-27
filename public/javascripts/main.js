var PRIMARY_COLOR = 'rgb(255, 64, 48)';
var SECONDARY_COLOR = '#FFF';
var BG_COLOR = '#f2f2f2';

$(document).ready(function() {
	
	// $('div#intro_bottom').click(function() {
	// 	$('#intro').slideUp("medium", function() {
	// 		$('.main').show();
	// 		initialize_home();
	// 	});
	// });

	$('#navlinks ul li').hover(function() {
		$(this).find('span.nav-highlight').css('background-color', PRIMARY_COLOR);
	}, function() {
		$(this).find('span.nav-highlight').css('background-color', BG_COLOR);
	});

	$('#navlinks ul li').click(function() {
		$(window).scrollTop(0);
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

		hide_all_notices();
	});

	$('#brand').click(function(event) {
		$(window).scrollTop(0);
		$('span.nav-highlight-active').removeClass('nav-highlight-active');
		initialize_home();
		hide_all_notices();
	});

});

function initialize_home() {
	$('body').css('background-color', BG_COLOR);
	$('div#content').load('/api/home/', function(responseText, textStatus, jqXHR) {
		if (textStatus === "error") {
			$("#load-error").show();
		}
	});
	clear_filters();
	
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

function hide_all_notices() {
	$("div#load_error").slideUp('fast');
	$("div#filter_bar").slideUp('fast');
}