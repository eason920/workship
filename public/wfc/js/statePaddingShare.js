$(function(){
	function share(){
		var $window = $(window),
			 $ww = $window.width(),
			 $item = $(".layout-card-item"),
			 $state = $(".act-state-word");
			 $sw = $state.data("width");
		$state.css({"width":$sw});
		if ($ww > 991 + 17){
			$item.css({"paddingLeft":$sw + 15});
		}
	}
	share();
});