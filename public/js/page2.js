const show = function (data) {
	// console.log('show', data);
	let $tbody = $('<tbody>');
	for (i = 0; i < data.length; i++){
		$tbody.append(
			$('<tr>').append(
				$('<td>').append(
					$('<a>').text( data[i].title ).attr('href', data[i].url)
	)));};
	$('#content').html($tbody.html());
}

const pager = function(data, currentIndex){
	// console.log('pager', data);
	const perIndexPage = 5;
	const totalPage = data.length;
	const firstPage = (currentIndex - 1) * perIndexPage //0 , 5;
	const latestPage = firstPage + perIndexPage - 1 //4, 9
	totalIndex = Math.floor(totalPage / perIndexPage);
	//
	if(currentIndex > totalIndex){
		currentIndex = totalIndex;
	}
	if(latestPage >= totalPage){
		lastPage = totalPage;
	}
	console.log('ti', totalIndex, 'ci', currentIndex, 'lp', lastPage);
	
	//
	
	//
	let newData = [];
	for(i = 0; i <= totalPage; i++){
		if( i >= firstPage && i <= latestPage ){
			newData.push(data[i]);
		}
	}
	return newData;
}

$(function(){
	let json = [];
	let totalIndex;
	let currentIndex = 5;
	$.getJSON('data/page.json', function(data){
		// console.log(data);
		json = data;
		show(pager(json, currentIndex));
	});
});