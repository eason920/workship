$(document).ready(function(){
	$('.dragDiv2 h3').on('mousedown', function(e){
		e.preventDefault();
		const $selected = $(this).parent(),
			offset = $selected.offset(),
			xDistance = offset.left - e.pageX,
			yDistance = offset.top - e.pageY,
			//
			$w = $(window),
			padding = 15,
			maxL = $w.width() - $selected.width() - padding,
			maxT = $w.height() - $selected.height() - padding,
			//
			$doc = $(document);
		
		$doc.on('mousemove.eason', function(e){
			let x = xDistance + e.pageX,
				y = yDistance + e.pageY;
			if( x >= maxL ){
				x = maxL;
			}else if( x <= padding ){
				x = padding;
			};
			if( y >= maxT ){
				y = maxT;
			}else if( y <= padding ){
				y = padding;
			};
			$selected.css({left: x, top: y});
		}).on('mouseup.eason', function(){
			$doc.off('.eason');
		})
	});
});