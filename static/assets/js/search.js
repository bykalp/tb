(function($) {

	$(document).ready(function() {
		var elem_a = $('#bmenu li a');
		elem_a.click(function() {
			$('#bmenu li a.selected').removeClass('selected');
			$(this).addClass('selected');
		});

		$('#searchthis').submit(function(event) {
			event.preventDefault();
			// AJAX HERE.

			//Main search-bar 
			$.get('/search', {
				q: $('#namanyay-search-box').val(),
				r: $('#search_nav ul li a.selected').text()
			}, function(response) {
				// parse json.
				console.log(response);
			});
			$('#banner').slideDown();	
			$('html, body').animate({
				scrollTop: $('#banner').offset().top
			});
			return false;
		});


		//top search-bar
		$('#searchthis-top').submit(function(event) {
			event.preventDefault();
			// AJAX HERE.

			$.get('/search', {
				q: $('#namanyay-search-box-top').val(),
				r: $('#seect.option.selected').text()
			}, function(response) {
				// parse json.
				console.log(response);
			});
		});


		var win = $(window);
		var topBar = $('#topBar');
		var header = $('#header');
		win.scroll(function() {
			if (win.scrollTop() > header.offset().top + header.height()) {
				topBar.fadeIn();
			} else if (topBar.is(':visible')) {
				topBar.fadeOut();
			}
		});
	});
})(jQuery);