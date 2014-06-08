---
layout: post-cover
title: 使用Base模块实现类的创建和继承
category: basic-tutorial
cover: class-inheritance
---

大型JavaScript应用程序除了需要将程序进行拆分模块化之外，通常也是免不了要使用**类**这种在其它多数编程语言中极为常用的结构体，这其中要以Java，C#最为典型。JavaScript中并没有真正的类，但我们仍可以通过构造函数和new运算符来模拟出传统的类，并利用它来更好地组织代码结构，提高其可维护性。

假设我们现在要实现一个Circle类，它继承于Geometry类。在不借助任何外部库的时候，最常见的写法通常是这样的：

    function Geometry(x, y) {
        this.x = x;
        this.y = y;
        ...
    }
    Geometry.prototype.render = function () {
        ...
    }
    function Circle(x, y, r) {
        Geometry.apply(this, [x, y]);
        this.r = r;
    }
    Circle.prototype = new Geometry();
    Circle.prototype.getRadius = function () {
        ...
    }
    var c = new Circle(10, 10, 5);

仔细看下，就会发觉这样子的写法其实存在着不少问题。其中最明显的一点就是不直观，试问下如果有一堆这样的代码，你能一眼就看出类与类之间的关系吗？为了让类的创建和继承更加简便化，不少类库都提供了不错的解决方案。以Kissy为例，我们可以使用Base模块很容易地来实现类的创建和继承。

首先创建Geometry类：

    var Geometry = Base.extend({
        // 在这里添加类的方法
        // 构造函数（可选）
        constructor: function (x, y) {
        ...
        },
        // 初始化函数，类创建后执行
        initializer: function () {
            ...
        },
        addStyle: function () {
            ...
        },
        render: function (canvas) {
            ...
        }
    }, {
        // 这里是类名（可选）
        name: 'Geometry',
        // 类的属性，可使用默认的set和get方法，也可以自定义
        ATTRS: {
            // 在这里添加类的属性
            x: {
                value: 0,
                setter: function () {},
                getter: function () {}
            },
            y: {
                value: 0
            }
            ...
        }
    });

接下来创建Circle类继承Geometry类：

    var Circle = Geometry.extend({
        // 可以直接覆盖父类中的同名函数
        addStyle: function () {
            // 使用callSuper访问父类中的方法
            this.callSuper();
            ...
        },
        render: function (canvas) {
            ...
        }
    }, {
        name: 'Circle',
        ATTRS: {
            r: {
                value: 0
            }
        }
    });

总结一下创建类的步骤：

- 如果不继承任何类，则调用Base.extend({方法}, {属性})创建类
- 如果是继承已有类，则调用类名.extend({方法}, {属性})创建类

以上就是Base模块实现类创建和继承的最基础的使用方法，更多详细信息请查看[官方教程](http://docs.kissyui.com/1.4/docs/html/tutorials/kissy/base/index.html)。

> 完整的示例和源码请戳[此处](http://surunzi.github.io/KissyLearning/example/class/)和[此处](https://github.com/surunzi/KissyLearning/tree/master/example/class/)