$(function () {
	const $tag = $('.menu > a');
	$tag.on('click', function () {
		$('.menu > a.selected').removeClass();
		$(this).addClass('selected');
		$('.eason-box').load(
			$(this).attr('href')
		)
		location.hash = $(this).attr('href');
	}).filter(`[href="${location.hash.substr(1) || $tag.attr('href')}"]`).mouseenter();

	$tag.click(function (e) { e.preventDefault(); })

	$('.menu > a:eq(1)').click();

	$(window).on('hashchange', function () {
		$tag.filter(`[href="${location.hash.substr(1) || $tag.attr('href')}"]`).mouseenter();
	})
});