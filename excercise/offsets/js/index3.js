$(function(){
	zindex = 1,
	$('.dragDiv1, .dragDiv2 h3').mousedown(function(e){
		e.preventDefault();
		var $selector = null,
			$doc = $(document),
			$win = $(window),
			$this = $(this),
			x, y;
		
		if($this.hasClass('dragDiv')){
			$selector = $this;
		}else{
			$selector = $this.parents('.dragDiv');
		}

		$selector.css({'zIndex': zindex ++});

		var offset = $selector.offset(),
			maxX = $win.width() - $selector.width(),
			maxY = $win.height() - $selector.height();
		x = offset.left - e.pageX;
		y = offset.top - e.pageY;

		$doc.on('mousemove.event', function(e){
			var tx = x + e.pageX,
				ty = y + e.pageY;
			if(tx >= maxX){
				tx = maxX - 2;
			}else if(tx <= 0){
				tx = 0;
			}
			if(ty <= 0){
				ty = 0;
			}else if(ty >= maxY){
				ty = maxY - 2;
			}
			$selector.css({
				'left': tx,
				'top' : ty
			}).addClass('draggable');
		}).on('mouseup.event', function(){
			if( $selector != null ){
				$doc.off('.event');	
				$selector.removeClass('draggable');
				$selector = null;
			}
		})
	});
})