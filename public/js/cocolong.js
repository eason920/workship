$(function () {
	const heightM = $(".lsview-m").height();
	const viewBox = $("#lsview");

	// MOBILE UI
	$(".lsview-mbg").css({ height: heightM });

	// ANIMATE CONTROL
	viewBox.addClass("is-ani");
	$(window).scroll(function () {
		const nua = navigator.userAgent;
		const wst = $(window).scrollTop();
		if (nua.match(/(iPhone|iPod|Android)/)) {
			wst > heightM ? viewBox.removeClass("is-ani") : viewBox.addClass("is-ani");
		} else {
			wst > $('.lsview-pc').height() ? viewBox.removeClass("is-ani") : viewBox.addClass("is-ani");
		}
	});

	// BACK TO TOP
	$(".lsfooter-mbtn, .lsfooter-pcbtn").click(function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
});