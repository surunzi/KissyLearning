KISSY.use(['node', 'anim'], function (S, Node, Anim) {
   
// 黑条进入
Node.one('#banner').animate({
    'width': '100%'
}, 1, 'easeIn').animate({
   'height': '50px'
}, 0.3, 'easeIn');
    
var $ = Node.all,
    w, h,
    $boxes = $('#boxes li'),
    $menus = $('#menu li'),
    $info = Node.one('#info'),
    $text = $info.one('.text');
    $close = $info.one('.close');

// 初始化方块位置
w = window.innerWidth;
h = window.innerHeight;
$boxes.each(function () {
    this.css({
        'left': w / 2 - Math.random() * w + 200,
        'top': h /2 - Math.random() * h + 200,
        'transform': 'rotate(' + Math.random() * 360 + 'deg) scale(0.5)',
        'opacity': 0.2,
        'display': 'block'
    });
});

// 方块聚集
function gatherBoxes() {
    var left = 0,
        top = 0,
        i = 1;
    $boxes.each(function () {
        var anim = new Anim(this, {
            'left': left,
            'top': top,
            'transform': 'rotate(0deg) scale(1)',
            'opacity': 1
        }, 4, 'elasticBoth');
        anim.run();
        left += 100;
        if (left === 400) {
            left = 0;
            top += 100;
        }
    });
}

// 方块散开
function scatterBoxes() {
    w = window.innerWidth;
    h = window.innerHeight;
    $boxes.each(function () {
        var anim = new Anim(this, {
            'left': w / 2 - Math.random() * w + 200,
            'top': h /2 - Math.random() * h + 200,
            'transform': 'rotate(' + Math.random() * 360 + 'deg) scale(0.5)',
            'opacity': 0.2
        }, 4, 'elasticBoth');
        anim.run();
    });
}

$menus.on('click', function () {
    $text.html($(this).one('span').html());
    $menus.fadeOut(0.3, function () {
        gatherBoxes();
    });
    setTimeout(function () {
        $info.fadeIn(0.3);
    }, 4300);
});

$close.on('click', function () {
    $info.fadeOut(0.3, function () {
        scatterBoxes();
        setTimeout(function () {
            $menus.fadeIn(0.3);
        }, 4300);
    });
});

// 背景圆圈
var $circle = $('#circle'),
    color = ['#94d1cc', 'f5bfd6', 'ffea73'];

function drawCircle() {
    w = window.innerWidth;
    h = window.innerHeight;
    var r = Math.random() * 400 + 50,
        x = Math.random() * w,
        y = Math.random() * h;
    $circle.css({
        'width': 0,
        'height': 0,
        'opacity': 1,
        'left': x,
        'top': y,
        'display': 'block',
        'border-color': '#' + color[Math.floor(Math.random() * 3)]
    });
    Anim($circle, {
        'width': r,
        'height': r,
        'opacity': 0,
        'left': x - r / 2,
        'top': y - r / 2
    }, 0.5, 'easeIn', function () {
        setTimeout(drawCircle, 1000);
    }).run();
}

drawCircle();
    
});