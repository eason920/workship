$(function(){
	zindex = 1,
	$('.dragDiv1, .dragDiv2 h3').mousedown(function(e){
		e.preventDefault();
		var $selector = null,
			$doc = $(document),
			$this = $(this),
			x, y,
			ww = $(window).width();
		
		if($this.hasClass('dragDiv')){
			$selector = $this;
		}else{
			$selector = $this.parents('.dragDiv');
		}

		$selector.css({'zIndex': zindex ++});

		var offset = $selector.offset(),
			maxX = ww - $selector.width();
		x = offset.left - e.pageX;
		y = offset.top - e.pageY;

		$doc.on('mousemove.envent', function(e){
			x = x + e.pageX;
			if(x > maxX){
				x = maxX;
			}else if(x <= 0){
				x = 0;
			}
			console.log(x)
			$(this).css({
				'left': x,
				'top' : y + e.pageY
			}).addClass('draggable');
		}).on('mouseup.event', function(){
			if( $selector != null ){
				$(this).removeClass('draggable');
				$doc.off('.event');
				$selector = null;
			}
		})
	});
})