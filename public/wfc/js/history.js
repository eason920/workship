function pWidth(box, state){
	const width = state.data('width'),
		paddingWidth = 18,
		paddingLeft = width + paddingWidth;
		
	state.css({ width });
	box.css({ paddingLeft });
}

$(function(){
	// 寬 991 + 時，「報名狀態」與「資訊區」排列於同一行
	// 僅 carnival、te、cap 三單元引用
	$(window).on('resize', function(){
		let ww = $(window).width();
		const name = ['carnival', 'te', 'cap'];
		if( ww > 991 + 17 ){
			let i = 0;
			while (name[i]) {
				pWidth($('.' + name[i] + '-box'), $('.' + name[i] + '-state'));
				i ++;
			}
		}else{
			let i = 0;
			while(name[i]) {
				console.log(name[i]);
				$('.' + name[i] + '-box').removeAttr('style');
				i ++;
			}
		}		
	})

	// collapse 預設自動開啟排序第一組
	setTimeout(function(){
		const target = $('.collapse-first');
		target.find('.layout-collapse-content').slideDown(300);
		target.find('.layout-collapse').addClass('open');
	},600);

	// collapse 點擊事件
	const $collapse = $('.layout-collapse')
	$collapse.click(function(){
		$('.layout-collapse-content').slideUp(200);
		if( !$(this).hasClass('open')){
			$collapse.removeClass('open');
			$(this).addClass('open').siblings().slideToggle(300);
		}else{
			$collapse.removeClass('open');
		}
	});

	// 錨
	$('.linkBox a').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		const target = $(this).attr('href');
		let offset;
		$(window).width() >= 768 ? offset = -135 : offset = -101;
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
		btn.click(function(){
			if( !target.find('.layout-collapse').hasClass('open') ){
				target.find(".layout-collapse").click();
			}
		});		
	}
	for(i=1;i<=4;i++){
		hisCollapse($('.link'+i),$('#target'+i));
	}

	// IS-MAPS ADDRESS
	$('.is-maps').click(function(){
		const address = 'https://www.google.com/maps/place/'+$(this).parent().parent().parent().parent().siblings().find('.is-address').html();
		$(this).attr('href', address);
	});

	// H-COLLAPSE SLIDE-TOGGLE
	$('.coll-btn').click(function(e){
		const temp = $(this).text();
		$(this).text($(this).data('text'));
		$(this).data('text',temp);
		const target= $(this).parent().parent().parent().parent().parent().siblings().eq(1);
		target.slideToggle(300);
		e.preventDefault();
	});
});
