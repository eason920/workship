$(function(){
	var zIndex = 10;
	$('.dragDiv1, .dragDiv2 h3').mousedown(function(e){
		e.preventDefault();

		var $doc = $(document),
			$selector = null,
			x, y,
			$this = $(this),
			offset;

		if($this.hasClass('dragDiv')){
			$selector = $this;
		}else{
			$selector = $this.parents('.dragDiv');
		}

		offset = $selector.offset();
		x = offset.left - e.pageX;
		y = offset.top - e.pageY;

		$selector.css('zIndex', zIndex ++).addClass('draggable');

		$doc.on('mousemove.eason', function(e){
			console.log('moving');
			$selector.css({
				'left': e.pageX + x,
				'top': e.pageY + y
			})
		}).on('mouseup.eason', function(){
			console.log('mouse is up');
			if($selector != null){
				$selector.removeClass('draggable');
				$selector = null;
				$doc.off('.eason');
			}
		});
		
	});
});