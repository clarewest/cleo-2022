$(function() {
	$('#google-maps').click(function(e) {
		$(this).find('iframe').css('pointer-events', 'auto');
	}).mouseleave(function(e) {
		$(this).find('iframe').css('pointer-events', 'none');
	});
})
