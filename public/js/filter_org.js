$(function(){
	var json;
	$.getJSON('data/filter.json',function(data){
		json = data;
		show(json);
	})

	function render(html, data) {
		var template;
		if (data instanceof Array) {
			template = html;
			html = ''
		}

		function replace(html, key, value) {
			key = '{{' + key + '}}';
			while (html.indexOf(key) > -1) {
				html = html.replace(key, value);
			}
			return html;
		}

		for (a in data) {
			if (template) {
				html += template;
				for (b in data[a]) {
					html = replace(html, b, data[a][b]);
				}
			} else {
				html = replace(html, a, data[a]);
			}
		}

		return html;
	}

	function show(json){
		$.get('temp.html',function(html){
			$('#list').html(render(html,json));
		})
	}

	$('#search').keyup(function(){
		var val = $(this).val().toLowerCase();
		show(
			json.filter(function(a){
				var source = a.name.toLowerCase();
				return source.indexOf(val) > -1; 
			})
		);
	});
});