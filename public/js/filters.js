var filters = [];
	
$(document).ready(function() {
	
	$("div#content").on("click", "span.content-tags", function() {
		$("div.content-block").hide();
		$("div#filter_bar").empty();
		add_filter($(this).text());
	})

	$("div#filter_bar").on("click", "a.close-filter", function() {
		$("div.content-block").hide();
		$("div#filter_bar").empty();
		remove_filter($(this).closest("span.content-tags").text());
		update_filters();
	})


})

function add_filter(filter) {
	var contains = false;
	for (var i = 0; i < filters.length; i++) {
		if (filters[i] === filter) { contains = true; }
	}
	if (!contains) {
		filters[filters.length] = filter;
		update_filters();
	}
}

function remove_filter(filter) {
	index = -1;
	for (var i = 0; index === -1 && i < filters.length; i++) {
		if (filters[i] === filter) {
			index = i;
		}
	}
	for (var i = index; i < filters.length - 1; i++) {
		filters[i] = filters[i + 1];
	}
	filters = filters.slice(0, filters.length - 1);
	update_filters();
}

function update_filters() {
	if (filters.length <= 0) {
		$("div.content-block").show();
	} else {
		for (var i = 0; i < filters.length; i++) {
			console.log(filters[i]);
			$("span.content-tags:contains(" + filters[i] + ")").closest("div.content-block").show();
			$("div#filter_bar").append('<span class="content-tags">' + filters[i] + '  <a class="close-filter">x</a></span>');
		}
		$("div#filter_bar").slideDown('fast');
	}
}

function clear_filters() {
	filters = [];
}