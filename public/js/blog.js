function initialize_blog() {
	$('#navlinks ul li#nav_blog > span.nav-highlight').addClass('nav-highlight-active');
	$('div#content').load('/api/blog/', function(responseText, textStatus, jqXHR) {
		if (textStatus === "error") {
			$("#load-error").show();
		}
	});
	clear_filters();
}