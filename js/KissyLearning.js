KISSY.use(['node'], function (S, Node) {

var $page, 
    features,
    i, len, temp;

$page = Node.one('#page');
if ($page) {
    features = $page.attr('data-feature');
}

if (features) {
    features = features.split(',')
    temp = {};
    for (i = 0, len = features.length; i < len; i++) {
        temp[features[i]] = true;
    }
    features = temp;
} else {
    features = {};
}

/**
 * 特性选择函数
 * 如果name被该页面指定了，才执行相应的func
 */
function initFeature(name, func) {
    if (features[name]) {
        func();
    }
}

// 主页图标说明弹出
initFeature('homeIconInfo', function () {
    var $intro = Node.one('#features .intro .inner'),
        introShowed = false, introTimer = null;
    Node.all('#features .feature').on('click', function () {
        var text = Node.one(this).one('p').text();
        $intro.text(text);
        clearTimeout(introTimer);
        introTimer = setTimeout(function () {
            $intro.slideUp(0.2);
            introShowed = false;
        }, 10000);
        if (!introShowed) {
            $intro.slideDown(0.2);
        }
        introShowed = true;
    });
});

// 代码高亮
initFeature('prettify', function () {
    Node.all('code').addClass('prettyprint');
    prettyPrint();
});

});