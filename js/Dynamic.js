var Dynamic = function() { //案例库插件
	//构造数据源
	var webdata = 
		[{
			id: 1,
			title: 'demo1',
			img:'1',
			desc: 'demo1 Text placeholder...'
		}, {
			id: 2,
			title: 'demo2',
			img:'2',
			desc: 'demo2 Text placeholder...'
		}, {
			id: 3,
			title: 'demo3',
			img:'3',
			desc: 'demo3 Text placeholder...'
		}]//WEB应用数据;
	var Init = function(id, obj) { //格式化列表页数据
		var _sel = $(id).find('ul'),
			_html = [];
		for(var i = 0; i < obj.length; i++) {
			var item = obj[i];
			_html.push('<li><a href="info.html?id=' + item.id + '">');
			_html.push('<img src="images/case/' + item.img + '.jpg" class="img" />');
			_html.push('<h3 class="am-text-truncate">' + item.title + '</h3>');
			_html.push('<p>' + item.desc + '</p>');
			_html.push('</a></li>');
		}
		_sel.html(_html.join(''));
	}
	var Initpage = function(id) { //组装详情页数据
		var caseinfo_title = $('#caseinfo_title'),
			caseinfo_logo = $('#caseinfo_logo'),
			caseinfo_img = $('#caseinfo_img'),
			caseinfo_desc = $('#caseinfo_desc'),
			caseinfo_content = $('#caseinfo_content');
			item = webdata[(id - 1)];
		caseinfo_title.html(item.title);
		caseinfo_desc.html(item.desc);
		caseinfo_logo.attr('src', 'images/case/' + item.img + '_logo.jpg').show();
		caseinfo_img.attr('src', 'images/case/' + item.img + '.jpg').show();
		caseinfo_content.load('images/case/' + item.img + '.txt');
		$('head title').prepend(item.title+'-');
	}
	var _url = location.search.split('=')
	var _id = _url[1];
	if(!_id) {
		Init('#demo', webdata); //组装数据
	}else{
		Initpage(_id); //加载详情页数据
	}
}

Dynamic(); //案例库插件