let levelData = {};
const color1 = '#f74769';
const color2 = 'rgba(247, 71, 105, .2)';
const today = new Date().getTime();
	
const renderFn = function(memData){
	$.getJSON('./data/level_basic.json?'+today, function(data){
		levelData = data;
		// =============================
		// == RADAR : FUNCTION
		// =============================
		const chartRadar = function (data, level, max) {
			new Chart($("#chartRadar"), {
				type: 'radar',
				data: {
					labels: levelData[level].title,
					datasets: [{
						data,
						backgroundColor: color2,
						borderColor: color1,
						pointBackgroundColor: color1,
						pointBorderColor: color1,
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: color1,
						borderWidth: .1
					}]
				},
				options: {
					responsive: false,
					maintainAspectRatio: true,
					scale: {
						gridLines: { // AREA : x & y 軸(axis)導引線
							display: true,
							color: '#fff',
							lineWidth: .2
						},
						angleLines: { // 放射導引線
							display: true,
							lineWidth: .2,
							color: '#fff'
						},
						ticks: { // AREA : 同心導引圈的「數字」
							beginAtZero: true,
							stepSize: 1, // 限定每圈彼此的間隔數字
							min: 0,
							max,
							backdropColor: 'transparent',// 文字背景清空
							display: false, // 導引圈數字隱藏
							borderColor: '#fff',
						},
						pointLabels: { // AREA : 各軸代表意義文字
							display: true,
							fontSize: 13, // 字級
							fontColor: "#f74769",
							fontFamily: "PingFangTC-Regular, Microsoft JhengHei, sans-serif"
						}
					},
					legend: { // AREA : 上方導引色塊
						display: false
					},
					tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
						enabled: false, // 是否要運作
						caretPadding: 10, // 與 point 的距離
						displayColors: false, // 小色塊顯示
					}
				}
			});
		};

		// ------------------------------------
		// -- RADAR : MSG WRITE
		// ------------------------------------
		const math = function (num, pos) {
			const size = Math.pow(10, pos);
			return Math.round(num * size) / size;
		}

		let memAry = [];
		const cutEnd = memData.radar.level.indexOf('-');
		const level = memData.radar.level.slice(0, cutEnd);
		// console.log(memData.radar.level, 'org');
		// console.log(level, 'is level');
		

		const stepMax = levelData[level].step;
		$('.canvars-box1').addClass(level);
		let index = 0;
		for( let a in levelData[level].group ){
			const unit = levelData[level].group[a];

			let ary;
			// console.log('idx', index);
			
			const memNum = memData.radar.data[index];
			// console.log(memNum);
			
			let now = '', miss = '', next = '';
			switch(true){
				case memNum < unit[0]:
					// console.log(a + ' is -0');
					now = level + '-1';
					miss = unit[0] - memNum;
					next = level + '-1';
					ary = math(memNum / (unit[0]), 1);
					break;
				case memNum >= unit[0] && memNum < unit[1] :
					// console.log(a + ' is -1');
					now = level + '-1';
					miss = unit[1] - memNum;
					next = level + '-2';
					ary = math((memNum - unit[0]) / (unit[1] - unit[0]), 1) + 1;
					break;				
				case memNum >= unit[1] && memNum < unit[2] :
					// console.log(a + ' is -2');
					now = level + '-2';
					miss = unit[2] - memNum;
					next = level + '-3';
					ary = math((memNum - unit[1]) / (unit[2] - unit[1]), 1) + 2;
					break;						
				case stepMax >= 4 &&memNum >= unit[2] && memNum < unit[3] :
					// console.log(a + ' is -3');
					now = level + '-3';
					miss = unit[3] - memNum;
					next = level + '-4';
					ary = math((memNum - unit[2]) / (unit[3] - unit[2]), 1) + 3;
					break;				
				case stepMax >= 5 && memNum >= unit[3] && memNum < unit[4] :
					// console.log(a + ' is -4');
					now = level + '-4';
					miss = unit[4] - memNum;
					next = level + '-5';
					ary = math((memNum - unit[3]) / (unit[4] - unit[3]), 1) + 4;
					break;
				case stepMax >= 6 && memNum >= unit[4] && memNum < unit[5] :
					// console.log(a + ' is -5');
					next = level + '-6';
					now = level + '-5';
					miss = unit[5] - memNum;
					ary = math((memNum - unit[4]) / (unit[5] - unit[4]), 1) + 5;
					break;
				default:
					// console.log(a + 'is -' + stepMax);
					now = level + '-' + stepMax;
					ary = stepMax;
					$('.ritem' + index).addClass('is-top');
			};
			
			// console.log( now, miss, next, ary);
			memAry.push(ary);

			$('.ritem' + index + ' .radar-now').text(memNum + ' ( ' + now + ' )');
			$('.ritem' + index + ' .radar-step').text('+' + miss + ' ➜ ' + next);
			index += 1
		};

		// ------------------------------------
		// -- RADAR : MAIN ACTION
		// ------------------------------------
		chartRadar(memAry, level, stepMax);
	

		// ====================================
		// == LINE : FUNCTION
		// ====================================
		const chartLine = function (target, path, year) {
			const count = memData[path][year].count === '' ? 0 : memData[path][year].count;
			target.siblings().find('.canvars-title-num').text(count);
			new Chart(target, {
				type: 'line',
				data: {
					labels: ["JAN", "FAR", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
					datasets: [{
						data: memData[path][year].data,
						backgroundColor: color2,
						borderColor: color1,
						pointBackgroundColor: color1,
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: color1,
						borderWidth: .4
					}]
				},
				options: {
					legend: {
						display: false
					},
					tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
						enabled: true, // 是否要運作
						caretPadding: 10, // 與 point 的距離
						displayColors: false, // 小色塊顯示
						backgroundColor: 'rgba(255,255,255,.8)',
						titleFontColor: '#000',
						bodyFontColor: '#333'
					},
					scales: {
						yAxes: [{
							gridLines: {
								// drawTicks: false,
								// display: false
								display: true,
								color: '#fff',
								lineWidth: .2
							},
							ticks: { // y 向文字
								fontColor: "#ccc",
								fontStyle: "normal",
								fontSize: 10,
								beginAtZero: true,
								maxTicksLimit: 5,
								padding: 0
							}
						}],
						xAxes: [{
							gridLines: {
								// zeroLineColor: "#ccc"
								display: true,
								color: '#fff',
								lineWidth: .2
							},
							ticks: { // x 向文字
								padding: 0, // 字 & 軸的距離
								fontColor: "#ccc",
								fontStyle: "normal",
								fontSize: 10
							}
						}]
					}
				}
			});
		};

		// ------------------------------------
		// -- LINE : MAIN ACTION
		// ------------------------------------
		for( let i = 1; i <= 4; i++){
			// ADD A TAG
			let html = '';
			let idx = 0;
			for(let a in memData['line'+i] ){
				const last = a.length - 1;
				html += "<a class='canvars-years-item";
				idx === last? html += " active": html += ""
				html += "' data-year='" + a + "' href='#'>" + a + "</a>";
				idx += 1;
			};
			$('#chartLine' + i + ' .canvars-years').html(html);

			// CLICK A TO CHANGE ACTIVE & CANVAS
			$('#chartLine' + i + ' .canvars-years-item').on('click', function(){
				const string = 'active'
				$('#chartLine' + i + ' .canvars-years-item').removeClass(string);
				$(this).addClass(string);
				const year = $(this).data('year');
				$('#chartLine' + i).find('canvas').remove();
				$('#chartLine' + i).find('.chartjs-size-monitor').remove(); // < new chart.js can create it
				$('#chartLine' + i).append('<canvas>');
				$('#chartLine' + i).find('canvas').css({height: 1, width: 1});
				chartLine( $('#chartLine' + i + ' canvas'), 'line' + i, year);
			}).eq(idx-1).click();
		};

		// ====================================
		// == WRITE DATA (NOT LINE OR RADAR)
		// ====================================
		const memberName = $('.is-name').text()
		const updateTime= memData.radar.Updatetime;
		$('.canvas-date-name').text(memberName);
		$('.canvas-date-time').text(updateTime);
		
	});
};