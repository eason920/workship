$(function(){
	var nua = navigator.userAgent;
	var $lv = $("#lsview");
	$lv.addClass("is-ani");
	$(window).scroll(function(){
		var wst = $(window).scrollTop();
		if(nua.match(/(iPhone|iPod|Android)/)){
			// MOBI
			if(wst > $(".lsview_m_area").height() ){
				$lv.removeAttr("class");
			}else{
				$lv.addClass("is-ani");
			};
		}else{
			// PC
			if(wst> $(".lsview_pc").height()){
				$lv.removeAttr("class");
			}else{
				$lv.addClass("is-ani");
			};
		};
	});
});