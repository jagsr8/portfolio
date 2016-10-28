function initialize_resume() {
	$('#navlinks ul li#nav_resume > span.nav-highlight').addClass('nav-highlight-active');
	$('div#content').load('/api/resume/', function(responseText, textStatus, jqXHR) {
		if (textStatus === "error") {
			$("#load-error").show();
		}

		$('#intro_loading').fadeOut();
	});
	clear_filters();
}