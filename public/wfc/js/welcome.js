const $item = $('.vbox-item'),
	$outer = $('.vbox-outer'),
	perWidth = 265,
	perGutter = 8;

function vboxWidth(target) {
	const width = (perWidth + perGutter) * target.find('.vbox-item').length - perGutter;
	target.find('.vbox-list').css({ width });
}

function vboxMove(target) {
	const $pre = target.find('.vbox-pre'),
		$nex = target.find('.vbox-nex'),
		$list = target.find('.vbox-list'),
		move = (perWidth + perGutter) * 2;
	let left = 0;

	// NXT
	$nex.on('click', function(e){
		e.preventDefault();
		const maxLeft = ($list.width() - target.find('.vbox').width()) * -1;
		$pre.removeClass('is-end').css({display: 'block'});
		left -= move;
		if(left <= maxLeft){
			left = maxLeft;
			$(this).addClass('is-end');
		}
		$list.stop(true, false).animate({ left }, 100);
	});

	// PRE
	$pre.on('click', function(e){
		e.preventDefault();
		$nex.removeClass('is-end');
		left += move;
		if(left >= 0){
			left = 0;
			$(this).addClass('is-end');
		}
		$list.stop(true, false).animate({ left }, 100);
	});
}

$(function () {
	$item.css({ width: perWidth, marginRight: perGutter });
	$('.vbox').css({ height: $item.height() });

	for(i = 0; i < $outer.length; i++){
		vboxWidth($outer.eq(i));
	};
	
	if(!/iphone|android|ipad/i.test(navigator.userAgent)){
		$outer.addClass('is-pc');
		for(i = 0; i < $outer.length; i++){
			vboxMove($outer.eq(i));
		};
	};
});