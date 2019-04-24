$(function () {
	function slider(){
		var 
			SItem = $(".slider-item"),
			SBody = $(".slider"),
			SBox = $(".slider-box"),
			SIdx = 0,
			SCount = SItem.length,
			SRatio = 0.5,
			SWidth = SBody.width();
			SHeight = SWidth * SRatio,
			SBody.css({"height":SHeight});
			SBox.css({"width":SWidth*5,"left": -SWidth});
			SItem.css({"width":SWidth,"height":SHeight});
			SItem.first().clone().appendTo(SBox);
			SItem.last().clone().prependTo(SBox);
		function run() {
			if (!SBox.is(":animated")) {
				SBox.stop(true, false).animate({ left: "-=" + SWidth }, function () {
					if (SIdx >= SCount - 1) {
						SIdx = -1;
						$(this).css("left", -SWidth);
					}
					SIdx++;
					dot();
				});
			}
		}
		var SSid = setInterval(run, 2000);
		$(".slider-box,.slider-nav,.slider-nex,.slider-pre").hover(function () {
			clearInterval(SSid);
		}, function () {
			SSid = setInterval(run, 2000);
		});
		function dot() {
			$(".slider-nav>span.active").removeClass();
			$(".slider-nav>span").eq(SIdx).addClass("active");
		}
		function back() {
			if (!SBox.is(":animated")) {
				if (SIdx <= 0) {
					SIdx = SCount;
					SBox.css("left", ( SIdx + 1 ) * -SWidth);
				}
				SBox.stop(true, false).animate({ left: "+=" + SWidth }, function () {
					SIdx--;
					dot();
				});
			}
		}
		$(".slider-nex").click(run);
		$(".slider-pre").click(back);
		$(".slider-nav > span").click(function () {
			SIdx = $(this).index() + 1;
			SBox.stop(true, false).animate({ left: SIdx * -SWidth });
			$(".slider-nav>span.active").removeClass();
			$(this).addClass("active");
		});
	}
	slider();
});