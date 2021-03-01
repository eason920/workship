let player;//***** 用以全域控制 youtube
const youtube = function (videoId) {
	// append script
	const tag = document.createElement('script');
	tag.src = "youtube_iframe_api.js";
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	function onYouTubeIframeAPIReady() {
		player = new YT.Player('y-box', {
			videoId,
			playerVars: {
				autoplay: 1,
				playsinline: 1,
				loop: 1,
				rel: 0,
				controls: 0,
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}
	function onPlayerReady(event) {
		event.target.mute();
		event.target.playVideo();
	}
	function onPlayerStateChange(evt) {
		if (evt.data === YT.PlayerState.ENDED) {
			evt.target.playVideo();
		}
	}
	window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}
$(function () {
	$('.y-bigger').click(function () {
		console.log('got bigger');

		youtube('CZoYuWA21SU');
		if ($('#y-box').hasClass('is-first-time')) {
			setTimeout(function () {
				$('#y-box').addClass('action');
			}, 700);
		} else {
			$('#y-box').addClass('action');
			player.playVideo();//**** 控制 youtube 撥放 
		}
	});
	$('.y-small').click(function () {
		$('#y-box').removeClass()
		player.pauseVideo();//***** 控制 youtube 停止
	});
});