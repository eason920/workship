$(function(){
	$(".faqbox-que").click(function(){
		var $this = $(this);
		if( $this.hasClass("is-open") ){
			$this.removeClass("is-open").siblings().slideUp();
		}else{
			$(".faqbox-que.is-open").removeClass("is-open").siblings().slideUp();
			$this.addClass("is-open").siblings().slideDown();
		}
	});
});