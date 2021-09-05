$(function () {
	// ====================================
	// == 撥號 v
	// ====================================
	$('.call-on').click(function(e){
		e.preventDefault();
		$('.call-on').hide();
        $('.call-off').fadeIn();

        console.log('call-on');
        const indx = $('#indx').val();//member..indx
        Get_CTI_Url("dialout",indx);
	});
	$('.call-off').click(function(e){
		e.preventDefault();
		const check = confirm("確定掛斷此通電話 ?");
		if( check ){
            // ACTION HERE <<

            console.log('call-off');
            const indx = $('#indx').val();//member..indx
            Get_CTI_Url("hangon", indx);
			$('.call-off').hide();
			$('.call-on').fadeIn();
		};
    });
    function Get_CTI_Url(todo, indx) {//寫檔並輸出優立迅的網址
        //console.log('Get_CTI_Url*'+todo+'*'+indx+'*');
        $.ajax({
            'url': "SA_sys_member_cti.aspx",
            'type': 'POST',
            'dataType': 'html',
            'data': {
                type: todo,
                indx: indx
            },
            success: function (data) {
                //console.log('Get_CTI_Url=success*'+data+'*');
                CTI(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //console.log('Get_CTI_Url=error');
                alert("CTI "+todo+" error:" + XMLHttpRequest.status);
            }
        });
    }
    function CTI(url) {
        var $iframe = $('.saarea-iframe');
        $iframe.attr('src', url);
        $('.saarea-iframe').show();//建議改hide
        $('.saarea-note').hide();
        $('.saarea-book').hide();
        $('.saarea-mms').hide();

        console.log('CTI*' + url + '*');
    }
	
	// =============================
	// == NAME & SEX
	// =============================
	const nameWidth = $('#RealName1').width();
	$('#Sex1').css({left: nameWidth});

	// =============================
	// == CLICK TO INCLUDE VALUE
	// =============================
	$('.tmp-select-item').click(function(){
		const value = $(this).data('value');
		$(this).parent().parent().siblings('input').val(value);
	})


	// =============================
	// == DEFAULT CLICK 
	// =============================
	const valLv = $('#lv').val();
	const valStatus = $('#status').val();
	const $tmpLItem = $('.is-tmp-l .tmp-select-item');
	const $tmpRItem = $('.is-tmp-r .tmp-select-item');
	const $tmp3Item = $('.is-tmp-3rd .tmp-select-item');

	// L & R
	const defClick = function(target, source){
		target.each(function () {
			const value = $(this).data('value');
			if (value == source) {
				$(this).click();
			}
		});	
	}
	defClick( $tmpLItem, valLv);
	defClick( $tmpRItem, valStatus);

	// 3RD
	$tmp3Item.eq(0).click();


	// =============================
	// == USE PLUGIN : PERFECT SCROLL BAR FOR LEFT
	// =============================
	$('.is-tmp-l').on('mouseover.addBarL',function(){
		setTimeout(function(){
			new PerfectScrollbar('.is-tmp-l .tmp-select-dropscro');
		}, 200);
		$(this).off('.addBarL');
	});
	$('.is-tmp-r').on('mouseover.addBarR', function () {
		setTimeout(function(){
			new PerfectScrollbar('.is-tmp-r .tmp-select-dropscro');
		}, 200);
		$(this).off('.addBarR');
	});
	$('.is-tmp-3rd').on('mouseover.addBar3', function () {
		setTimeout(function(){
			new PerfectScrollbar('.is-tmp-3rd .tmp-select-dropscro');
		}, 200);
		$(this).off('.addBar3');
	});


	// =============================
	// == TEXTAREA INCLUDE TEXT FORMAT
	// =============================
    $tmp3Item.click(function () {
        const value = $(this).data('value');
        console.log('copy msg*' + value + '*');
        sasysText(value);
	});


	// =============================
	// == SUBMIT CHECK
	// =============================
    $('input[type="submit"].sambr-editbox-btn').click(function () {
		const indx = $('#indx').val();//member..indx
		const lv = $('#lv').val();//原等級
		const status = $('#status').val();//原狀態
		const valL = $('.is-tmp-l input').val();//畫面上指定的等級
		const valR = $('.is-tmp-r input').val();//畫面上指定的狀態
        const valTxt = $('.sambr-editbox-textarea').val().trim();
        const role_id = $('#role_id').val();//由角色代號決定要寫到什麼筆記

        console.log('success*' + lv + '*' + status + '*' + valL + '*' + valR + '*' + valTxt + '*' + indx + '*' + role_id + '*');

        //未分等級不可更改狀態
        if (valL === '-1') {
            console.log('#' + valL + '#' + valR + '#' + valTxt + '#');
            sasysErr(3);
            return false;
        } else if (valL === '-1' || valR === '-1') {   // && valTxt === '' 
			// v 名單等級、狀態，二者其一落在請選擇時
			console.log('#' + valL + '#' + valR + '#' + valTxt + '#');
			sasysErr(1);
			return false;
		} else {
			// v 電訪筆記有值時
			if (valTxt.length > 1000) {
				sasysErr(2);
			} else {
                sasysSuccess(lv, status, valL, valR, valTxt, indx, role_id);
			}
			return false
		}
	});


	// =============================
	// == COPY
	// =============================
	function copyUrl() {
      var text = $('.sambr-editbox-textarea');
		text.select(); // 選擇物件
		document.execCommand("Copy"); // 執行瀏覽器複製命令
		alert("文字己拷貝");
  }
	$('.is-copy-btn').click(function(){
		copyUrl();
	});

	// ====================================
	// == CLEAN
	// ====================================
	$('.is-clear').click(function(){
		$('.sambr-editbox-textarea').val('');
		return false;	
	});


	// =============================
	// == LEFT HEIGHT
	// =============================
	const hTotal = $('.sambr').height();
	const h2 = $('.is-row2').outerHeight(true);
	const hBtnBox = $('.sambr-btnbox').outerHeight(true);
	const hCourse = $('.sambr-course').outerHeight(true);
	const hEdit = $('.sambr-edit').outerHeight(true);

	let h1, hEditBox, hTextArea;
	const textHeight = function(){
		h1 = $('.is-row1').outerHeight(true);
		hEditBox = hTotal - h1 - h2 - hBtnBox - hCourse - hEdit;
		// $('.sambr-editbox').css({height: hEditBox});
		hTextArea = hEditBox - 145 - 45;// 45 = 誤差

		// console.log('h1', h1, 'hEditBox', hEditBox, 'textarea',hTextArea);
		// $('.sambr-editbox-textarea').css({height: hTextArea});		
	}
	textHeight();
	// $('.is-col1-1 .icon-edit, .is-col1-1 .sambr-btnbox-item').click(function(){
	$('.is-col1-1 a, .is-col1-1 .sambr-btnbox-item').click(function(){
		setTimeout(function(){
			textHeight();
		},50);
		
	});



	// =============================
	// == LABEL & LISTBOX
	// =============================
	const $sambrItem = $('.sambr-navbox-item')
	$sambrItem.click(function () {
		$sambrItem.removeClass('active');
		$(this).addClass('active');
		// INFO BOX
		const index = $(this).index();
		$('.sambr-listbox').hide().eq(index).show();
	});

	// USE PLUGIN PERFECT SCROLL BAR FOR RIGHT
	new PerfectScrollbar('.sambr-listbox-outer');


	// =============================
	// == CLOSE LB
	// =============================
	$('body').on('keydown.closs', function(e){
		if( e.keyCode === 27 ){
			parent.closeLightBox();			
		}
	});


	// ============================================================
	// ============================================================
	// ============================================================
	// ============================================================
	// ============================================================
	


	

	// ====================================
	// == TITLE
	// ====================================
	$('.sambrt-title').click(function(){
		$(this).hide();
		$(this).siblings('span').hide();
		$(this).siblings('.sambrt-fix').show();
	});
	$('.sambrt-fix-send, .sambrt-fix-back').click(function(){
		const $parent = $(this).parent();
		$parent.hide();
		$parent.siblings('span').show();
		$parent.siblings('.sambrt-title').show();
	});

	// ====================================
	// == INFO BOX TITLE
	// ====================================
	$('.sambri').click(function(){
		const $this = $(this);
		// const $span = $('.sambri-bar span');
		// const text = $span.text();
		// $span.text( $span.data('text') ).data('text', text);
		$this.toggleClass('is-open');
	});


	// ====================================
	// == RIGHT TOP ICON ARROW
	// ====================================
	// $('.sambr-btnbox').slideUp(0);
	// $('.sambr-box.is-right //block-open')
	$('.icon-white.is-rt').click(function(){
		const $target = $('.sambr-box.is-right');
		const $this = $(this);
		$this.toggleClass('active');
		$target.toggleClass('is-arrow-active');
		if( !$this.hasClass('active') ){
			$target.removeClass('block-open');
			$('.sablock-close').fadeOut(100);
			$('.sablock-open').removeClass('active');
		}
	});


	// ====================================
	// == COPY
	// ====================================
	const source= $('.is-copysource');
	source.val( $('.is-copyfrom').text().trim() );
	const copyText = function(){
		source.select();
		document.execCommand('Copy');
	};

	$('.is-copier').click(function(){
		copyText();
		$msg = $('.satitle-pro-msg');
		$msg.addClass('action');
		setTimeout(function(){
			$msg.removeClass('action');
		}, 2500);
	});
	
	// ====================================
	// == SABLOCK
	// ====================================
	const $sablockOpen = $('.sablock-open');
	const $sablockClose = $('.sablock-close');
	const $outer = $('.is-right');
	const blockClose = function(){
		$sablockOpen.removeClass('active');
		$outer.removeClass('block-open');
		$sablockClose.fadeOut();
	}
	$sablockOpen.click(function(){
		if( !$(this).hasClass('active') ){
			if( $outer.hasClass('block-open')){
				$outer.removeClass('block-open');
				$sablockOpen.removeClass('active');
				$(this).addClass('active');
				setTimeout(function(){
					$outer.addClass('block-open');
				},500);
			}else{
				$(this).addClass('active');
				$outer.addClass('block-open');
			};
			$sablockClose.fadeIn();
		}else{
			blockClose();
		};
	});

	$sablockClose.click(function(){
		blockClose();
	});


	// .saarea-note, .saarea-book, .saarea-mms
	$('.is-area-note').click(function(){
		$('.saarea-book, .saarea-mms').hide();
		$('.saarea-note').fadeIn();
	});

	$('.is-area-book').click(function(){
		$('.saarea-note, .saarea-mms').hide();
		$('.saarea-book').fadeIn();
	});

	$('.is-area-mms').click(function(){
		$('.saarea-note, .saarea-book').hide();
		$('.saarea-mms').fadeIn();
	});


	// ====================================
	// == DATA PICKER
	// ====================================
	// new Date()
	const defDateCheck = $('.datepicker .form-control').attr('value');
	let defDate;
	defDateCheck === undefined? defDate = new Date() : defDate = defDateCheck;

	$('.datepicker').datepicker({
		autoclose: true,
		todayHighlight: true,
		language: 'zh-CN',
		format: 'yyyy / mm / dd'
	}).datepicker('update', defDate );
	
	$('.is-area-date .icon-calendar').click(function(){
		$('.is-area-date .form-control').focus();
	});


	// ====================================
	// == COLORFULL
	// ====================================
	const $colorBox = $('.sambrt-box.is-title-status');
	const colorH = $colorBox.height()
	const colorSH = $('.sambrt-box.is-title-sex').height();
	if( colorSH > colorH ){
		const marginTop = Math.floor( ( colorSH - colorH ) );
		$colorBox.css({marginTop});
	}


	// ====================================
	// == TEXT LIMIT
	// ====================================
	const $limitCh = $('.sambrt-title.is-name');
	const $limitEn = $('.is-title-english .sambrt-title');
	const $limitPhone = $('.sambrt-phone');
	const limitAry = [ $limitCh, $limitEn, $limitPhone ]
	for(a in limitAry){
		limitAry[a].height() > 30 ? limitAry[a].addClass('is-limit-row2') : null;
	}
});