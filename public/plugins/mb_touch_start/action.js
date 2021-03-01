$(function(){
	
	var WIN = $(window);

	var BTN = $("#HEADER h3");
	
	var WRAPPER = $("#WRAPPER");
	
	var startX;
	
	var moveX;
	
//==右上角的按鈕=====================================

	BTN.on("touchstart click", AAA );
	
	function AAA(){
		
		WRAPPER.toggleClass("RR").toggleClass("LL");
		
		event.preventDefault();
	
	}
	
//==在營幕上左滑右滑=====================================
	
	WRAPPER.on("touchstart", TSTART);
	
	WRAPPER.on("touchmove", TMOVE);
	
	WRAPPER.on("touchend", TEND);
	
	function TSTART() {
				
		event.preventDefault();
								
		startX = event.targetTouches[0].pageX;
		
	}
		
	function TMOVE() {
		
		event.preventDefault();
		
		moveX = event.targetTouches[0].pageX - startX;
				
	}
	
	function TEND() {
		
		event.preventDefault();		
		
		if( moveX > 20 ){
			WRAPPER.removeClass("LL").addClass("RR");
			moveX=null;
		}
		
		if( moveX < -20 ){
			WRAPPER.removeClass("RR").addClass("LL");
			moveX=null;
		}
		
	}
	
});

