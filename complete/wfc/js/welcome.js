$(function(){
	// $(".art-list-f2-item").eq(1).find(".art-list-f2-link").addClass("now");
	// ^ 演示用，請參考


	//// VBOX-LIST WIDTH
	var perWidth = 265,
			perGutter = 8,
			move = ( perWidth + perGutter ) * 2;
			
	function vboxListWidth(target) {
		target.find(".vbox-item").css({ "width": perWidth, "marginRight": perGutter });
		//
		var count = target.find(".vbox-item").length,
			width = (perWidth + perGutter) * count - perGutter;
		target.find('.vbox-list').css({ "width": width });
		//
		target.find('.vbox').css({'height': target.find('.vbox-list').height()});
	}
	vboxListWidth($('.target1'));
	vboxListWidth($('.target2'));
	vboxListWidth($('.target3'));
	vboxListWidth($('.target4'));


	//// AWD / ADD IS-PC
	var nua = navigator.userAgent;
	if (!/iphone/i.test(nua) && !/ipad/i.test(nua) && !/android/i.test(nua)) {
		// console.log('is pc');
		var $target = $('.vbox-outer');
		$target.addClass('is-pc');


		var vWidth = $('.vbox').width();
		// NEX & PRE
		function vboxPreNex(target){
			var listWidth = target.find('.vbox-list').width(),
				maxMove = listWidth - vWidth,
				allPosi = 0;
			// NEX
			target.find('.vbox-nex').click(function(e){
				target.find('.vbox-pre').removeClass('is-end').css({'display':'block'});
				var position = allPosi - move;
				// console.log('%c'+position,'color: red')
				if(position <= -maxMove){
					position= -maxMove;
					$(this).addClass('is-end');
				}
				target.find('.vbox-list').stop(true,false).animate({'left': position},500);
				allPosi = position;
				e.preventDefault();
			});

			// PRE
			target.find('.vbox-pre').click(function(e){
				var position = allPosi + move;
				// console.log('%c'+position,'color: green');
				target.find('.vbox-nex').removeClass('is-end');
				if(position >= 0){
					position=0;
					$(this).addClass('is-end');
				}
				target.find('.vbox-list').stop(true,false).animate({'left': position},500);
				allPosi = position;
				e.preventDefault();
			})
		};
		vboxPreNex($('.target1'));
		vboxPreNex($('.target2'));
		vboxPreNex($('.target3'));
		vboxPreNex($('.target4'));
	}
})