---
layout: post-cover
title: Kissy动画对比jQuery动画的五个亮点
category: basic-tutorial
cover: key-difference-between-jquery-animate-and-kissy-anim
---

Kissy动画模块的使用方法基本上与jQuery动画相差不了多少。除了提供jQuery动画所具有的功能外，Kissy在此之上又添加了不少有用的特性。假如你觉得jQuery动画满足不了你的需求，不妨试下Kissy的Anim模块。

### 1.支持跨浏览器的css transform

CSS3中的transform可以让我们很容易地对元素进行平移、旋转、缩放等操作，然而浏览器前缀给我们的使用增加了诸多不便。在没有使用CSS预处理的情况下，每次@keyframes都必须写上几份着实让人感到厌烦。而且利用@keyframes控制动画在某些情况下也并不是那么合适。Kissy的Anim模块支持跨浏览器的css transform，不仅使用起来就跟其它属性变换一样简单，同时还能够使用CSS3的transition来提高动画性能。

    new Anim('#object', {
        'left': 555,
        'transform': 'rotate(360deg)'
    }, 0.5).run();

点击[这里](http://surunzi.github.io/KissyLearning/example/animDemo/)查看transform示例。

### 2.暂停恢复动画

Kissy可以在动画过程中随时暂停并重新开始动画。假如你是在开发一个具有多种动画效果的复杂Web应用，这个功能将会派上很大的用场。

    Node.one('#run').on('click', function () {
        anim = new Anim('#object', {
                'left': 555,
                'transform': 'rotate(360deg)'
        }, 5);
        anim.run();
    });
    Node.one('#stop').on('click', function () {
        anim.stop();
    });
    Node.one('#pause').on('click', function () {
        anim.pause();
    });
    Node.one('#resume').on('click', function () {
        anim.resume();
    });

点击[这里](http://surunzi.github.io/KissyLearning/example/animDemo/control.html)查看控制示例。

### 3.内置多种easing效果

jQuery需要额外的插件才能够支持多种效果，而Anim模块本身就自带了多种效果，可取值：

    swing | easeNone | linear | easeIn | easeOut 
    easeBoth | easeInStrong | easeOutStrong | easeBothStrong 
    elasticIn | elasticOut | elasticBoth | backIn
    backOut | backBoth | bounceIn | bounceOut
    bounceBoth | cubic-bezier(p1x, p1y, p2x, p2y)（所有取值必须在[0,1]之间）

点击[这里](http://surunzi.github.io/KissyLearning/example/animDemo/easing.html)查看各种平滑函数的实际使用效果。

### 4.自定义动画机制

什么是自定义动画呢？简单来说，就是你可以自行定义每个属性各自的变化效果，而不必全部都采用同一套方式。利用这个特性，你可以更加自由地控制动画的效果，比如下面这个，让透明度在0和1中进行改变，从而实现一闪一闪的效果：

    new Anim('#object', {
        'opacity': {
            frame: function (anim, fx) {
                var dom = anim.node,
                    opacity = dom.style.opacity;
                if (opacity === '1') {
                    dom.style.opacity = 0;
                } else {
                    dom.style.opacity = 1;
                }
            }
        },
        'left': {
            value: 555,
            easing: 'swing'
        },
        'transform': {
            value: 'scale(0.01)',
            easing: 'elasticBoth'
        }
    }, 5).run();

点击[这里](http://surunzi.github.io/KissyLearning/example/animDemo/custom.html)查看自定义动画的效果。

### 5.对普通对象使用动画函数

Anim模块也可以作用在普通对象之上，具体怎样就不多说了，请点击[此处](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo7.html)查看官网的例子。

    var o = {r: 1};
    var anim = new Anim(o, {
        r: 100
    }, {
        easing: "swing",
        duration: 1,
        frame: function (anim, fx) {
            circle(100, 100, fx.val);
        }
    });
    anim.run();

发挥自己的想像力，多试一下不同的组合，合理的利用Anim模块就可以创造出让人惊叹的动画效果来！戳[此处](http://surunzi.github.io/KissyLearning/example/anim/)可查看Anim模块的使用范例，仅供参考^_^ 