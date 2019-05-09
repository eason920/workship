$(function(){
	function fullScreen(){
		// LAYOUT-MAIN-FULL
		var windowWidth = $(window).innerWidth();
		// left & right
		var rowWidth = $('.container-main > .row').innerWidth(),
			subWidth = $('.layout-sub').innerWidth(),
			fullBgPositionLR = (windowWidth - rowWidth) / -2 - 15;
		// middle
		var colOne = $('.container-col-1 .layout-main').innerWidth(),
			fullBgPositionC = (windowWidth - colOne) / -2;
		$('.layout-main-full-bg').css({ width: windowWidth });
		if (windowWidth >= 975) {
			$('.layout-main-full-left').css({ left: fullBgPositionLR });
			$('.layout-main-full-right').css({ right: fullBgPositionLR });
			$('.layout-main-full-center').css({ left: fullBgPositionC });
		}
	};
	fullScreen();
	$(window).resize(function(){
		fullScreen();
	});
});