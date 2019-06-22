$(function () {
	// UI
	let boxNow = 0;
	const $flyContent = $(".FLY .content"),
		$flySpan = $(".FLY .menu span");

	$flyContent.css({ display: "none" }).eq(boxNow).css({ display: "block" });
	$flySpan.click(function () {
		boxNow = $(this).parent().index();
		$flySpan.removeClass("boxon").eq(boxNow).addClass("boxon");
		$flyContent.css({ display: "none" }).eq(boxNow).css({ display: "block" });
	}).eq(boxNow).addClass("boxon");

	// DROP DOWN
	const $pdw = $(".pdw")
	$(".arrow").hover(function () {
		$pdw.css({ display: "block" });
	}, function () {
		$pdw.css({ display: "none" });
	});

	$pdw.hover(function () {
		$(this).css({ display: "block" });
	}, function () {
		$(this).css({ display: "none" });
	});
});