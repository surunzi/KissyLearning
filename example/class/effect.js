KISSY.use(['node', 'base'], function (S, Node, Base) {

// 图形基类
var Geometry = Base.extend({
    
    initializer: function () {
        var ele = Node.one(document.createElement('div'));
        this.set('ele', ele);
        this.addStyle();
    },
    
    addStyle: function () {
        var ele = this.get('ele'),
            c = this.get('c'),
            rotation = this.get('rotation');
        ele.css({
            'position': 'absolute',
            'opacity': 0.5,
            'width': 0,
            'height': 0,
            'background-color': c,
            'transform': 'rotate(' + rotation + 'deg)'
        });
    },
    
    render: function (canvas) {
        var ele = this.get('ele');
        canvas.append(ele);
    }
    
}, {
    name: 'Geometry',
    ATTRS: {
        ele: {
            value: null  
        },
        x: {
            value: 0
        },
        y: {
            value: 0
        },
        c: {
            value: ''
        },
        rotation: {
            value: ''
        }
    }
});

// 圆形
var Circle = Geometry.extend({
    
    addStyle: function () {
        this.callSuper();
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y');
        ele.css({
            'left': x,
            'top': y,
            'border-radius': '50%'
        });
    },
    
    render: function (canvas) {
        this.callSuper(canvas);
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y'),
            r = this.get('r');
        ele.animate({
            'left': x - r,
            'top': y - r,
            'width': r * 2,
            'height': r * 2
        }, 0.3);
    }
    
}, {
    name: 'Circle',
    ATTRS: {
        r: {
            value: 0
        }
    }
});

// 四边形
var Square = Geometry.extend({
    
    addStyle: function () {
        this.callSuper();
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y');
        ele.css({
            'left': x,
            'top': y
        });
    },
    
    render: function (canvas) {
        this.callSuper(canvas);
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y'),
            a = this.get('a');
        ele.animate({
            'left': x - a / 2,
            'top': y - a / 2,
            'width': a,
            'height': a
        }, 0.3);
    }
    
}, {
    name: 'Square',
    ATTRS: {
        a: {
            value: 0
        }
    }
});

// 三角形
var Triangle = Geometry.extend({
    
    addStyle: function () {
        this.callSuper();
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y'),
            c = this.get('c');
        ele.css({
            'left': x,
            'top': y,
            'background-color': 'transparent',
            'border-left': '0 solid transparent',
            'border-right': '0 solid transparent',
            'border-bottom': '0 solid ' + c
        });
    },
    
    render: function (canvas) {
        this.callSuper(canvas);
        var ele = this.get('ele'),
            x = this.get('x'),
            y = this.get('y'),
            a = this.get('a');
        ele.animate({
            'left': x - a / 2,
            'top': y - a / 2,
            'border-left-width': a / 2,
            'border-right-width': a / 2,
            'border-bottom-width': a
        }, 0.3);
    }
    
}, {
    name: 'Triangle',
    ATTRS: {
        a: {
            value: 0
        }
    }
});

// 取得整数随机数
function getRandomInt(low, up) {
    return Math.floor(Math.random() * (up - low) + low);
}

// 颜色
var colors = [
        '#F6EEDD', '#ACD4D9', '#FE109D',
        '#ECA7AC', '#EBC051', '#A19D92',
        '#7BAFC6', '#B1BBCC'
    ];

var canvas = Node.one('#canvas');
canvas.on('click', function (e) {
    var x = e.pageX,
        y = e.pageY,
        g;
    switch (getRandomInt(0, 3)) {
    case 0:
        g = new Circle({
            'x': x,
            'y': y,
            'rotation': Math.random() * 360,
            'r': Math.random() * 100 + 20,
            'c': colors[getRandomInt(0, colors.length)]
        });
        break;
    case 1:
        g = new Square({
            'x': x,
            'y': y,
            'rotation': Math.random() * 360,
            'a': Math.random() * 200 + 40,
            'c': colors[getRandomInt(0, colors.length)]
        });
        break;
    case 2:
        g = new Triangle({
            'x': x,
            'y': y,
            'rotation': Math.random() * 360,
            'a': Math.random() * 200 + 40,
            'c': colors[getRandomInt(0, colors.length)]
        });
        break;
    default:
        break;
    }
    
    g.render(canvas);
});

});