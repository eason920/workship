const show = function (data) {
	let html = ''
	for (i = 0; i < data.length; i++) {
		html += `<tr><td>`
		html += `<a href='${data[i].url}'>${data[i].title}`
		html += `</a></td></tr>`
	}
	$('#content').html(html);

}

const page = function (data, per, current) {
	// PAGE NATION
	const maxIndex = Math.ceil(data.length / per);
	let html = '';
	for (i = 1; i <= maxIndex; i++) {
		html += `<li>`
		i !== current ? html += `<a href='#'>${i}` : html += `<a href='#' class='active'>${i}`
		html += `</a></li>`
	}
	$('#pageNation').html(html);

	// LIST
	const first = per * (current - 1);
	const last = per * current;
	return data.filter(function (item) {
		let i = data.indexOf(item);
		return i >= first && i < last;
	});
}

$(function () {
	let json = [];
	let currentIndex = 3;
	let maxIndex = 0;
	const perIndexPage = 6;
	$.getJSON('data/page.json', function (data) {
		json = data;
		maxIndex = Math.ceil(json.length / perIndexPage);
		show(page(json, perIndexPage, currentIndex));
	});

	$('#pageNation').on('click', 'a', function (e) {
		e.preventDefault();
		$this = $(this);
		if (!$this.hasClass('active')) {
			currentIndex = Number($this.text());
			show(page(json, perIndexPage, currentIndex));
		}
	});

	$('#first').on('click', function () {
		currentIndex = 1;
		show(page(json, perIndexPage, currentIndex));
	});

	$('#last').on('click', function () {
		currentIndex = maxIndex;
		show(page(json, perIndexPage, currentIndex));
	});

	$('#prev').on('click', function () {
		currentIndex > 1 ? currentIndex-- : currentIndex = 1;
		show(page(json, perIndexPage, currentIndex));
	});

	$('#next').on('click', function () {
		currentIndex < maxIndex ? currentIndex++ : currentIndex = maxIndex;
		show(page(json, perIndexPage, currentIndex));
	});

	// DEBUG
	$('#content').on('click', 'a', function (e) {
		e.preventDefault();
	})
});