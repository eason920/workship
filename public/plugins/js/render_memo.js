function render(html, data) {
    function replace(html, key, value) {
        key="{{" + key + "}}";
        while(html.indexOf(key)>-1) {
            html = html.replace(key, value);
        }
        return html;
    }
    var template;
    if (data instanceof Array) {
        console.log('is array')
        template = html;
        console.log('template is\n'+template)
        html = "";
    }else{
        console.log('not array');
    }
    for (var a in data) {
        if (template) {
            console.log('=== is a+b ===')
            console.log(a)
            html += template;
            console.log(html)
            for (var b in data[a]) {
                console.log(b)
                html = replace(html, b, data[a][b]);
            }
        } else {
            console.log('=== is a only ===')
            console.log(a)
            html = replace(html, a, data[a]);
        }
    }
    return html;
}
