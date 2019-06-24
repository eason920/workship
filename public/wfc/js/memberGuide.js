$(function(){
	// FIRST OPEN
	setTimeout(function(){
		$(".is-first").addClass("is-open").siblings().slideDown(300);
	},800);
	$(".select-drop").selectbox();
	
	// CHANGE OPTION
	let orgValue = 1;
	$('.sbOptions a').on('click',function(){
		let value = $(this).attr('rel'),
			now = '.is-' + value;
		if( orgValue != value){
			$('.unit').fadeOut(500);
			setTimeout(function(){
				$(now).fadeIn(300);
			},500);
		};
		orgValue = value;
	});
	
	// NUA
	var nua = navigator.userAgent;
	/iphone|android|ipad/i.test(nua) ? $('.qr-pc').css({display:'none'}) : $('.qr-mobi').css({display:'none'});
	
	// BTN
	$('.is-android').click(function(){
		window.open('android','_blank');
	})
	$('.is-ios').click(function(){
		window.open('ios','_blank');
	});
});