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
	var $doc = $(document), 
		$selected = null, 
		zIndex = 10;

	$('.dragDiv2 h3').mousedown(function(event){
		event.preventDefault();

		var $this = $(this);

		if($this.hasClass('dragDiv')){
			$selected = $this;
		}else{
			$selected = $this.parents('.dragDiv');
		}

		var _offset = $selected.offset(), 
			x = _offset.left - event.pageX, 
			y = _offset.top - event.pageY;

		$selected.css('z-index', zIndex++).addClass('draggable');

		$doc.on('mousemove.abgne', function(event){
			$selected.css({
				left: event.pageX + x, 
				top: event.pageY + y
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