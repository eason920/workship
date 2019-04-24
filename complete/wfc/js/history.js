$(function(){
	// $(".art-list-f2-item").eq(2).find(".art-list-f2-link").addClass("now");
	// ^ 演示用，請參考
	
	// unit status & content , inline width share width
	if( $(window).width() > 991 + 17 ){
		function historyShare(){
			var paddingWidth = 18;
			var $carnival = $('.carnival-state'),
				cWidth = $carnival.data('width');
			$carnival.css({'width':cWidth});
			$('.carnival-box').css({'paddingLeft': cWidth + paddingWidth});
			//
			var $te = $('.te-state'),
				tWidth = $te.data('width');
			$te.css({'width':tWidth});
			$('.te-box').css({'paddingLeft': tWidth + paddingWidth});
			//
			var $cap = $('.cap-state'),
				capWidth = $cap.data('width');
			$cap.css({'width':capWidth});
			$('.cap-box').css({'paddingLeft': capWidth + paddingWidth});
		}
		historyShare();
	}
	
	// dorp down menu
	$(".select-drop").selectbox();

	// collapse - default
	setTimeout(function(){
		$('.collapse-first').find('.layout-collapse-content').slideDown(300);
		$('.collapse-first').find('.layout-collapse').addClass('open');
	},600);
	// collapse - action
	$('.layout-collapse').click(function(){
		$('.layout-collapse-content').slideUp(200);
		if( !$(this).hasClass('open')){
			$('.layout-collapse').removeClass('open');
			$(this).siblings().slideToggle(300);
			$(this).addClass('open');			
		}else{
			$('.layout-collapse').removeClass('open');
		}
	});

	// anchor
	$('.linkBox a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var target = $(this).attr('href'),
			offset;
		if( $(window).width() >= 768 ){
			offset = -135;
		}else{
			offset = -101;
		}
		setTimeout(function(){
			$(target).velocity('scroll', {
				duration: 1200,// speed
				offset: offset,
				easing: 'easeOutExpo',
				mobileHA: false
			});
		},310);
	});

	// link box
	function hisCollapse(btn,target){
		console.log('active');
		btn.click(function(){
			if( !target.find('.layout-collapse').hasClass('open') ){
				target.find(".layout-collapse").click();
			}
		});		
	}
	for(var i=1;i<=4;i++){
		hisCollapse($('.link'+i),$('#target'+i));
	}

	// IS-MAPS ADDRESS
	$('.is-maps').click(function(){
		var address = 'https://www.google.com/maps/place/'+$(this).parent().parent().parent().parent().siblings().find('.is-address').html();
		$(this).attr('href',address);
	});

	// H-COLLAPSE SLIDE-TOGGLE
	$('.coll-btn').click(function(e){
		var temp = $(this).text();
		$(this).text($(this).data('text'));
		$(this).data('text',temp);
		var target= $(this).parent().parent().parent().parent().parent().siblings().eq(1);
		target.slideToggle(300);
		e.preventDefault();
	});
});
