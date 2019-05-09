$(function(){
	// UI
	var boxnow = 0;
	$(".FLY .content").css({ display: "none" }).eq(boxnow).css({ display: "block" });
	$(".FLY .menu span").eq(boxnow).addClass("boxon");
	$(".FLY .menu span").click(function () {
		boxnow = $(this).parent().index();
		$(".FLY .menu li span").removeClass("boxon").eq(boxnow).addClass("boxon");
		$(".FLY .content").css({ display: "none" }).eq(boxnow).css({ display: "block" });
	});

	//pull down
	$(".arrow").hover(function () {
		$(".pdw").css({ display: "block" });
	}, function () {
		$(".pdw").css({ display: "none" });
	});

	$(".pdw").hover(function () {
		$(this).css({ display: "block" });
	}, function () {
		$(this).css({ display: "none" });
	});

	//offset
	$('.dragDiv2 h3').mousedown(function(e){
		e.preventDefault();

		var $doc = $(document),
			$selected = $(this).parents('.dragDiv'),
			$win = $(window),
			maxL = $win.width() - $selected.width(),
			maxT = $win.height() - $selected.height(),
			//
			offset = $selected.offset(), 
			x = offset.left - e.pageX, 
			y = offset.top - e.pageY,
			tx, ty,
			padding = 5;

		$doc.on('mousemove.eason', function(e){
			tx = e.pageX + x;
			ty = e.pageY + y;
			if(tx >= maxL){
				tx = maxL - padding;
			}else if(tx <= padding){
				tx = padding;
			}
			if(ty >= maxT){
				ty = maxT - padding;
			}else if(ty <= padding){
				ty = padding;
			}
			$selected.css({
				left: tx, 
				top: ty
			});
		}).on('mouseup.eason', function(){
			$doc.off('.eason');
		});
	});
});