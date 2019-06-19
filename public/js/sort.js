const show = function (data) {
	let html = '';
	for (let i in data) {
		html += '<tr>';
		for (let key in data[i]) {
			html += `<td>${data[i][key]}</td>`
		}
		html += '</tr>';
	}
	$('#content').html(html);
}

const customSort = function (input) {
	input = input.replace('一', '1');
	input = input.replace('二', '2');
	input = input.replace('三', '3');
	input = input.replace('四', '4');
	input = input.replace('五', '5');
	return input;
}

const sort = function (data, direct, key) {
	show(
		data.sort(function(nex, pre){
			if(key !== 'tw'){
				if (direct === 'down') {
					if (nex[key] > pre[key]) {
						return 1;
					} else {
						return -1;
					}
				} else {
					if (nex[key] < pre[key]) {
						return 1;
					} else {
						return -1;
					}
				}
			}else{
				let nn = customSort(nex[key]);
				let pp = customSort(pre[key]);
				if (direct === 'down') {
					if (nn > pp) {
						return 1;
					} else {
						return -1;
					}
				} else {
					if (nn < pp) {
						return 1;
					} else {
						return -1;
					}
				}
			}
			return data;
		})
	);
};

$(function () {
	let json = [];
	$.getJSON('data/sort.json', function (data) {
		json = data;
		show(json);
	});

	$('th').on('click', function () {
		const $this = $(this);
		if ($this.hasClass('down')) {
			$('th').removeClass();
			$this.addClass('up');
		} else {
			$('th').removeClass();
			$this.addClass('down');
		}
		const direct = $this.attr('class');
		const key = $this.data('key');
		sort(json, direct, key);
	});
});