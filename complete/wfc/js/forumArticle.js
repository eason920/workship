$(document).ready(function(){
	// CTA
	function hiddenCTA(){
		var st = $(window).scrollTop();
		// console.log( st );
		var hwh = $(".header-wrapper").height(),
		pcpt = 80,
		art = $(".layout-main-art").height(),
		// intro = $(".layout-main-intro").innerHeight(),
		// card = $(".layout-main-card").outerHeight(true),
		wh = $(window).height(),
		heightTotal = hwh + pcpt + art - wh;
		
// console.log(
// `hwh is ${hwh},
// intro is ${intro},
// card is ${card},
// wh is ${wh},
// heightTotal is ${heightTotal}`)

		if( st > heightTotal ){
			$(".forum-cta").css({"opacity":0});
		}else{
			$(".forum-cta").css("opacity",1);
		}


		// #header-wrapper + padding-top 80 + .layout-main-intro + .layout-main-card & margin-bottom 23
		// padding-top: 150  + .layout-main-intro & margin-bottom: 12px + .layout-main-card
	}
	$(window).on("scroll ready", hiddenCTA);

	// CTA HASH
	$(document).ready(function () {
		$('.scrolling  a[href*="articleReport"]').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).attr('href');
			$(target).velocity('scroll', {
				duration: 800,// speed
				offset: -90,
				easing: 'ease',
				mobileHA: false
			});
		});
	});
});