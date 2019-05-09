// Menu LightBox
function filsortSwitch() {
	var $open = $(".aside-lb-open"),
		 $close = $(".aside-lb-close"),
		 $box = $(".aside-lb"),
		windowWidth = $(window).innerWidth();
	if (windowWidth <= 974) {// 991 - 17
		$box.css({ "display": "none" });
		// $('.aside-lb').click(function (e) {
		// 	$box.fadeOut();
		// 	$("body").removeAttr("style");
		// 	e.preventDefault();
		// });
	} else {
		$box.removeAttr("style");
	}
	$open.click(function (e) {
		$box.fadeIn();
		$("body").css({ "overflow-y": "hidden" });
		e.preventDefault();
	});
	$close.click(function (e) {
		$box.fadeOut();
		$("body").removeAttr("style");
		e.preventDefault();
	});
};
$(window).on("load resize", function () { filsortSwitch() });

// F3 Collapse
$(".art-collapse").click(function (e) {
	var $thissib = $(this).siblings();
	if ($thissib.is(":hidden")) {
		$(".art-list-f3.is-open").slideUp(150);
		$thissib.addClass("is-open").slideDown(150);
	} else {
		$thissib.slideUp(150).removeClass("is-open");
	}
	e.preventDefault();
});