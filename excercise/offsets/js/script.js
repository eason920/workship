$(function(){
	// 先設定一些用來記錄滑鼠點擊時的滑鼠座標及區塊座標等必要參數
	// isDown 是用來記錄是否按住不放
	var $doc = $(document), 
		$selected = null, 
		_zIndex = 10;

	$('.dragDiv1, .dragDiv2 h3').mousedown(function(event){
		event.preventDefault();

		var $this = $(this);

		if($this.hasClass('dragDiv')){
			$selected = $this;
		}else{
			$selected = $this.parents('.dragDiv');
		}

		var _offset = $selected.offset(), 
			_x = _offset.left - event.pageX, 
			_y = _offset.top - event.pageY;

		$selected.css('z-index', _zIndex++).addClass('draggable');

		$doc.on('mousemove.abgne', function(event){
			$selected.css({
				left: event.pageX + _x, 
				top: event.pageY + _y
			});
		}).on('mouseup.abgne', function(){
			if($selected != null){
				$doc.off('.abgne');
				$selected.removeClass('draggable');
				$selected = null;
			}
		});
	});
});