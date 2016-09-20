$(document).ready(function() {
	initialize_cm();
});

function initialize_cm() {
	
}

function choose_project() {
	$("div#choose_post_type").slideUp('fast', function() {
		$("form#new_project_form").addClass('active');
		$("div#new_post_forms").slideDown();
	});
}

function choose_blog() {
	$("div#choose_post_type").slideUp('fast', function() {
		$("form#new_blog_form").addClass('active');
		$("div#new_post_forms").slideDown();
	});
}

function cancel_post() {
	$("div#new_post_forms").slideUp('medium', function() {
		$("form.active").removeClass('active');
		$("div#choose_post_type").slideDown('fast');
	});
}

function create_post() {
	switch( $("form.active").attr('id') ) {
		case 'new_project_form':
			create_project();
			break;
		case 'new_blog_form':
			create_blog_entry();
			break;
		default:
			break;
	}
}

function create_project() {
	$("form#new_project_form input, form#new_project_form textarea").empty();
	$("div#new_post_forms").slideUp('fast', function() {
		$("form.active").removeClass('active');
		$("div#new_post_forms").before('<h3>Project post successfully created!</h3>');
	});
}

function create_blog_entry() {
	$("form#new_blog_form input, form#new_blog_form textarea").empty();
	$("div#new_post_forms").slideUp('fast', function() {
		$("form.active").removeClass('active');
		$("div#new_post_forms").before('<h3>Blog post successfully created!</h3>');
	});
}