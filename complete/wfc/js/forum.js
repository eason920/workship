$(function(){
	// LIGHT BOX CONTROL in MOBILE
	function filsortSwitch(){
		var filsortOpen = $(".forum-filsort-open"),
			filsortClose = $(".forum-filsort-close"),
			filsort = $(".forum-filsort-ui"),
			windowWidth = $(window).innerWidth();
		if( windowWidth <= 974 ){// 991 - 17
			filsort.css({"display":"none"});
		}else{
			filsort.removeAttr("style");
		}

		filsortOpen.click(function(e){
			filsort.css({"display":"block"});
			$("body").css({"overflow-y":"hidden"});
			e.preventDefault();
		});
		filsortClose.click(function(e){
			filsort.css({"display":"none"});
			$("body").removeAttr("style");
			e.preventDefault();
		});
	};

	// filsortSwitch();
	// $(window).resize(function(){
	// 	filsortSwitch();
	// });
	$(window).on("load resize",function(){filsortSwitch()});	


	// CARD IMG HEIGHT
	function cardImgHeight(){
		var itemWidth = $(".forum-cardbox-item").width(),
			img = $(".forum-cardbox-img");
		img.css({"height":itemWidth});
	};
	$(window).on("load resize",function(){cardImgHeight()});	

	// CARD IMG BG
	function cardImgBg(){
		var itemBg = $(".forum-cardbox-item").data("background");
		console.log(itemBg);
	};
	cardImgBg();

	// CTA
	function hiddenCTA(){
		var st = $(window).scrollTop();
		// console.log( st );
		var hwh = $(".header-wrapper").height(),
		pcpt = 80,
		intro = $(".layout-main-intro").innerHeight(),
		card = $(".layout-main-card").outerHeight(true),
		wh = $(window).height(),
		heightTotal = hwh + pcpt + intro + card - wh;
  
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

