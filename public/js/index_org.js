$(function () {
	$(".menu>a").mouseenter(function (e) {
		$(".menu>a.selected").removeClass();
		$(".eason-box").load($(this).addClass("selected").attr("href"));
		location.hash = $(this).attr("href");
		e.preventDefault();
	}).filter("[href='" + (location.hash.substr(1) || $(".menu>a").attr("href")) + "']").mouseenter();
	$(window).on("hashchange", function () {
		$(".menu>a").filter("[href='" + (location.hash.substr(1) || $(".menu>a").attr("href")) + "']").mouseenter();
	});
});