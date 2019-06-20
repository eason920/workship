const show = function (data) {
	let $tbody = $('<tbody>');
	for (i = 0; i < data.length; i++) {
		$tbody.append(
			$('<tr>').append(
				$('<td>').append(
					$('<a>').text(data[i].title).attr('href', data[i].url)
				)));
	};
	$('#content').html($tbody.html());
}

const page = function (data, currentIndex, perIndexPage) {
	// PAGE NATION
	const totalIndex = Math.ceil(data.length / perIndexPage);
	let html = '';
	for (i = 1; i <= totalIndex; i++) {
		html += '<li>'
		if (currentIndex !== i) {
			html += `<a href='#' data-index='${i}'>${i}`
		} else {
			html += `<a href='#' data-index='${i}' class='active'>${i}`
		}
		html += '</a></li>'
	}
	$('#pageNation').html(html);

	// LIST
	const firstPage = (currentIndex - 1) * perIndexPage
	const latestPage = currentIndex * perIndexPage
	return data.filter(function(a){
		let i = data.indexOf(a);
		return i >= firstPage && i < latestPage;
	});
}

$(function () {
	let json = [];
	let currentIndex = 1;
	const perIndexPage = 6;
	let totalIndex;
	$.getJSON('data/page.json', function (data) {
		json = data;
		totalIndex = Math.ceil(json.length / perIndexPage);
		show(page(json, currentIndex, perIndexPage));
	});

	$('#pageNation').on('click', 'a', function (e) {
		e.preventDefault();
		const $this = $(this);
		if( !$this.hasClass('active')){
			currentIndex = $this.data('index');
			show(page(json, currentIndex, perIndexPage));			
		}
	});

	$('#prev').on('click', function () {
		currentIndex <= 1 ? currentIndex = 1 : currentIndex--;
		show(page(json, currentIndex, perIndexPage));
	});

	$('#next').on('click', function () {
		currentIndex >= totalIndex ? currentIndex = totalIndex : currentIndex++;
		show(page(json, currentIndex, perIndexPage));
	});

	$('#first').on('click', function () {
		currentIndex = 1;
		show(page(json, currentIndex, perIndexPage));
	});

	$('#last').on('click', function () {
		currentIndex = totalIndex;
		show(page(json, currentIndex, perIndexPage));
	});
});