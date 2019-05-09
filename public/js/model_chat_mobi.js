$(function(){
	$("#mygallery").justifiedGallery();

	var var_scrolltop_before,
		var_mask_height,
		$tag_ww = $(window),
		$tag_bar = $(".mdb_chat_box_mobi_title"),
		$tag_mask = $(".ani_mask"),
		$tag_bbff = $("#mmBody,#mmfooter"),
		$tag_chat = $("#mdb_chat_box_mobi"),
		$btn_open = $(".mdb_chat_box_mobi_title");
	
	$btn_open.click(function(){
		if(!$(this).hasClass('is-open')){
			// 打開手機版聊天室
			$(this).addClass('is-open');

			var_scrolltop_before = $tag_ww.scrollTop();
			//action 1
			var_mask_height = $tag_ww.height() - 43 - 42;
			$tag_mask.css({ "height": var_mask_height, "transition": ".15s" });
			document.getElementById("chat_mobi_arrow").src = "img/mvmv/chat/turn_down.png";
			//action 2
			setTimeout(function () {
				_open_action2();
			}, 200);
			function _open_action2() {
				////$tag_bbff.css({"display":"none"});
				$tag_bbff.css({ "visibility": "hidden", "position": "fixed", "overflow": "hidden" });
				$tag_chat.css({ "display": "block" });
				$tag_bar.css({ "top": "43px", "bottom": "auto" });
				$tag_ww.scrollTop(9999);
				//action 3
				setTimeout(function () {
					_open_action3();
				}, 50);//!! ststem responsive time for OPEN
			};
			function _open_action3() {
				$tag_mask.css({ "transition": ".45s", "opacity": "0" });
				// action 4
				setTimeout(function () {
					_open_action4();
				}, 450);
			}
			function _open_action4() {
				$tag_mask.removeAttr("style");
			};
			return false;
		}
		else{
			// 關閉手機版聊天室
			$(this).removeClass('is-open');
			// action 1
			var_mask_height = $tag_ww.height() - 43 - 42;
			$tag_mask.css({ "opacity": "0", "height": var_mask_height });

			// action 2
			setTimeout(function () {
				_close_action2();
			}, 100);
			function _close_action2() {
				$tag_mask.css({ "transition": ".15s", "opacity": "1" });

				//action 3
				setTimeout(function () {
					_close_action3();
				}, 150);
			};
			function _close_action3() {
				$tag_bar.removeAttr("style");
				$tag_bbff.removeAttr("style");
				$tag_chat.removeAttr("style");
				$tag_ww.scrollTop(var_scrolltop_before);
				document.getElementById("chat_mobi_arrow").src = "img/mvmv/chat/turn_up.png";
				// action 4
				setTimeout(function () {
					_close_action4();
				}, 50);//!! system responsive time for CLOSE
			};
			function _close_action4() {
				$tag_mask.css({ "transition": ".2s", "height": "0" });
				// action 5
				setTimeout(function () {
					_close_action5();
				}, 200);
			}
			function _close_action5() {
				$tag_mask.removeAttr("style");
			};
			return false;
		}
		
	});

});