$(function(){
	$(".lsview_pc_bg").parallax("50%",0.075);
	$(".lsview_pc_sofa").parallax("50%",0.1);
	$(".lsview_pc_snow1").parallax("50%",0.3);
	$(".lsview_pc_snow2").parallax("50%",0.15);

	_view_m_height=$(".lsview_m_area").height();
	$(".lsview_m_bg").css({height:_view_m_height});

	$(".lsfooter_mbtn").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
	});
	$(".lsfooter_pcbtn").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
	});

	////

	var nua = navigator.userAgent;
	var LV = $("#lsview");
	LV.addClass("is-ani");
	$(window).scroll(function(){
		var wst = $(window).scrollTop();
		if(nua.match(/(iPhone|iPod|Android)/)){
			if(wst > _view_m_height){
				LV.removeAttr("class");
			}else{
				LV.addClass("is-ani");
			};
		}else{
			if(wst>638){
				LV.removeAttr("class");
			}else{
				LV.addClass("is-ani");
			};
		};
	});
});