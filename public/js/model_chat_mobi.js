$(function(){
	// PLUGIN : JUSTIFIED-GALLERY
	$('#mygallery').justifiedGallery();
	
	// MAIN ANIMATE
	let scrolltopBefore, maskHeight
	const $ww = $(window),
		$tagBar = $('.mdb_chat_box_mobi_title'),
		$mask = $('.ani_mask'),
		$bbff = $('#mmBody,#mmfooter'),
		$chat = $('#mdb_chat_box_mobi'),
		$arrow = $('#chat_mobi_arrow');
	
	$('.mdb_chat_box_mobi_title_deco1').click(function(){
		if(!$(this).hasClass('is-open')){
			// READY
			$(this).addClass('is-open');
			scrolltopBefore = $ww.scrollTop();

			// ACTION 1
			maskHeight = $ww.height() - 43 - 42;
			$mask.css({ height: maskHeight, transition: '.15s' });
			$arrow.attr('src', 'img/mvmv/chat/turn_down.png');
			
			// ACTION 2
			setTimeout(function () {
				$bbff.css({ visibility: 'hidden', position: 'fixed', overflow: 'hidden' });
				$chat.css({ display: 'block' });
				$tagBar.css({ top: '43px', bottom: 'auto' });
				$ww.scrollTop(9999);
			}, 200);
			
			// ACTION 3
			setTimeout(function () {
				$mask.css({ transition: '.45s', opacity: 0 });
			}, 250);//!! system response time for OPEN
			
			// ACTION 4
			setTimeout(function () {
				$mask.removeAttr('style');
			}, 700);
		}
		else{
			// READY
			$(this).removeClass('is-open');

			// ACTION 1
			maskHeight = $ww.height() - 43 - 42;
			$mask.css({ opacity: 0, height: maskHeight });

			// ACTION 2
			setTimeout(function () {
				$mask.css({ transition: '.15s', opacity: 1 });
			}, 100);
			
			// ACTION 3
			setTimeout(function () {
				$tagBar.removeAttr('style');
				$bbff.removeAttr('style');
				$chat.removeAttr('style');
				$ww.scrollTop(scrolltopBefore);
			}, 250);
			
			// ACTION 4
			setTimeout(function () {
				$mask.css({ transition: '.2s', height: 0 });
			}, 300);//!! system response time for CLOSE
			
			// ACTION 5
			setTimeout(function () {
				$arrow.attr('src', 'img/mvmv/chat/turn_up.png');
				$mask.removeAttr('style');
			}, 500);
		}
	});
});