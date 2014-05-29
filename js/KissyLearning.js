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

// 主页图标说明弹出
if (features['homeIconInfo']) {
    (function() {
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
    })();
}

});