$(function(){
	// v 演示用，請參考
	// $(".art-list-f2-item").eq(5).find(".art-list-f2-link").addClass("now");
	
	// first open
	setTimeout(function(){
		$(".is-first").addClass("is-open").siblings().slideDown(300);
	},800);
	$(".select-drop").selectbox();
	
	// change option
	var mgOldValue = 1;
	$('.sbOptions a').on('click',function(){
		var value = $(this).attr('rel'),
			now = '.is-' + value;
		if( mgOldValue != value){
			// console.log('got old != value');
			$('.unit').fadeOut(500)
			setTimeout(function(){
				$(now).fadeIn(300);
			},500);
		};
		mgOldValue = value;
	});
	
	// nua
	var nua = navigator.userAgent;
	if( /iphone/i.test(nua) || /android/i.test(nua) || /ipad/i.test(nua)){
		$('.qr-pc').css({'display':'none'});
	}else{
		$('.qr-mobi').css({'display':'none'});
	}
	
	// btn
	$('.is-android').click(function(){
		window.open('https://play.google.com/store/apps/details?id=com.app.appwebview','_blank');
	})
	$('.is-ios').click(function(){
		window.open('https://itunes.apple.com/us/app/huan-yu-jia-ting-quan-mei/id948490555?l=zh&ls=1&mt=8','_blank');
	});
});