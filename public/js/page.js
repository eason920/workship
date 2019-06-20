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
	const totalPage = data.length - 1;
	const firstPage = (currentIndex - 1) * perIndexPage //0 , 5, 20;
	const latestPage = firstPage + perIndexPage - 1 //4, 9, 24
	const totalIndex = Math.ceil(data.length / perIndexPage);
	//
	if (currentIndex > totalIndex) {
		currentIndex = totalIndex;
	}
	if (latestPage >= totalPage) {
		lastPage = totalPage;
	}
	let newData = [];
	for (i = 0; i <= totalPage; i++) {
		if (i >= firstPage && i <= latestPage) {
			newData.push(data[i]);
		}
	}

	// page nation
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

	return newData;
}

$(function () {
	let json = [];
	let currentIndex = 1;
	const perIndexPage = 5;
	let totalIndex = '';

	$.getJSON('data/page.json', function (data) {
		json = data;
		totalIndex = Math.ceil(data.length / perIndexPage);
		show(page(json, currentIndex, perIndexPage));
	});

	$('#pageNation').on('click', 'a', function (e) {
		e.preventDefault();
		currentIndex = $(this).data('index');
		show(page(json, currentIndex, perIndexPage));
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