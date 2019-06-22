const perWidth = 265,
	perGutter = 8,
	$target = $('.vbox-outer');

// VBOX-LIST WIDTH
function vboxListWidth(target) {
	const $item = target.find(".vbox-item"),
		count = $item.length;
	$item.css({ width: perWidth, marginRight: perGutter });
	const width = $item.outerWidth(true) * count - perGutter,
		height = $item.height();
	target.find('.vbox').css({ height }).find('.vbox-list').css({ width });
};

// AWD / ADD IS-PC
function vboxPreNex(target) {
	$target.addClass('is-pc');

	const $pre = target.find('.vbox-pre'),
		$nex = target.find('.vbox-nex'),
		$list = target.find('.vbox-list'),
		// 
		move = (perWidth + perGutter) * 2,
		maxMove = ($list.width() - $('.vbox').width()) * -1;
	let left = 0;

	// NEX
	$nex.click(function (e) {
		$pre.removeClass('is-end').css({ display: 'block' });
		left -= move;
		if (left <= maxMove) {
			left = maxMove;
			$(this).addClass('is-end');
		}
		$list.stop(true, false).animate({ left }, 100);
		e.preventDefault();
	});

	// PRE
	$pre.click(function (e) {
		$nex.removeClass('is-end');
		left += move;
		if (left >= 0) {
			left = 0;
			$(this).addClass('is-end');
		}
		$list.stop(true, false).animate({ left }, 100);
		e.preventDefault();
	})
};

$(function () {
	for (i = 0; i < $target.length; i++) {
		vboxListWidth($target.eq(i));
		if (!/iphone|ipad|android/i.test(navigator.userAgent)) {
			vboxPreNex($target.eq(i));
		}
	};
})