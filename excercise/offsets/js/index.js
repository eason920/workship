$(function(){
	// 先設定一些用來記錄滑鼠點擊時的滑鼠座標及區塊座標等必要參數
	// isDown 是用來記錄是否按住不放
	var _zindex = 10;

	$('.dragDiv1, .dragDiv2 h3').mousedown(function(event){
		event.preventDefault();
		var $doc = $(document), 
			$selected = null, 
			$this = $(this);

		if($this.hasClass('dragDiv')){
			$selected = $this; // for dragDiv1
		}else{
			$selected = $this.parents('.dragDiv');// for dragDiv2
		}

		var _offset = $selected.offset(), 
			_x = _offset.left - event.pageX, 
			_y = _offset.top - event.pageY;

		$selected.css('z-index', _zindex ++).addClass('draggable');

		$doc.on('mousemove.eason', function(event){
			x = event.pageX + _x,
			y = event.pageY + _y
			$selected.css({
				left: x, 
				top: y
			});
		}).on('mouseup.eason', function(){
			if($selected != null){
				$doc.off('.eason');
				$selected.removeClass('draggable');
				$selected = null;
			}
		});
	});
});