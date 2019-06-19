$(function(){
	let json = [];
	$.getJSON('data/filter.json', function(data){
		json = data;
		show(json);
	});

	const render = function(html, data){
		let temp = '';
		for(let i in data){
			temp += html;
			for(let key in data[i]){
				const orgStr = `{{${key}}}`;
				const newStr = data[i][key];
				temp = temp.replace(orgStr, newStr);
			}
		}
		return temp;
	};

	const show = function(data){
		$.get('temp.html', function(html){
			$('#list').html(render(html, data));
		})
	}

	$('#search').on('keyup', function(){
	let val = $(this).val().toLowerCase();
		show(
			json.filter(function(item){
				return item.name.toLowerCase().indexOf(val) >= 0;
			})
		);
	});
});