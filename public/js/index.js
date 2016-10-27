$(document).ready(function() {
	// initialize_home();
	
	$('div#intro_bottom').click(function() {
		$('#intro').slideUp("medium", function() {
			$('.main').show();
			initialize_projects();
		});
	});

	$('#navlinks ul li.menu-item').hover(function() {
		$(this).find('span.nav-highlight').addClass('nav-highlight-hover');
	}, function() {
		$(this).find('span.nav-highlight').removeClass('nav-highlight-hover');
	});

	$('li.menu-item').click(function() {
		$(window).scrollTop(0);
		var selection = $(this).prop('id');
		$('span.nav-highlight-active').removeClass('nav-highlight-active');
		$('#navlinks ul li.menu_item#' + selection + ' span.nav-highlight').addClass('nav-highlight-active');

		switch (selection) {
			case 'nav_about':
				initialize_about();
				break;
			case 'nav_projects':
				initialize_projects();
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

	$('div#subheader li.menu-item').click(function() {
		$('div#subheader').hide();
	});

	$('#brand').click(function() {
		$(window).scrollTop(0);
		// $('span.nav-highlight-active').removeClass('nav-highlight-active');
		initialize_home();
		hide_all_notices();
	});
});

function initialize_about() {
	// $('body').css('background-color', 'blue');
}

function initialize_resume() {
	// $('body').css('background-color', 'red');
}

function toggle_menu() {
	$('#subheader').toggle();
}

function hide_all_notices() {
	$("div#load_error").slideUp('fast');
	$("div#filter_bar").slideUp('fast');
}