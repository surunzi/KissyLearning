KISSY.add(function (S, Node) {

var canvas, ctx, requestAnim, particles = [], angle = 0, isStopped, isInit = false;

function init() {
    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.globalCompositeOperation = 'lighter';
    
    requestAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    
    var $canvas = Node.one(canvas);
    $canvas.css({
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'left': 0,
        'top': 0
    });
    
    Node.one('body').append(canvas);
    
    Node.one(window).on('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#fff';
    });
    
    for (var i = 0; i < 250; i++) {
        particles[i] = new Particle();
    }
    
    isInit = true;
}

function begin() {
    isStopped = false;
    if (!isInit) {
        init();
    }
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isStopped) {
        return;
    }
    
    for (var i = 0, len = particles.length; i < len; i++) {
        ctx.beginPath();
        p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r + 3, 0, Math.PI*2, true);
        p.x += Math.sin(angle + p.d);
        p.y += Math.cos(angle + p.d) + 2;
        if (p.x > canvas.width + 5) {
            p.x = -5;
            p.d = Math.random() * 50;
        } else if (p.x < -5) {
            p.x = canvas.width + 5;
            p.d = Math.random() * 50;
        } else if (p.y > canvas.height + 5) {
            p.y = -5;
            p.d = Math.random() * 50;
        }
        ctx.closePath();
        ctx.fill();
    }
    angle += 0.01;
    
    requestAnim(draw);
}

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 4 + 1;
    this.d = Math.random() * 25;
}

function stop() {
    isStopped = true;
}

return {
    begin: begin,
    stop: stop
};

}, {
    requires: ['node']
});