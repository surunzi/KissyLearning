---
layout: post-cover
title: Base模块的扩展与插件机制
category: basic-tutorial
cover: plugin-design-pattern-of-base-module
---

> 本次的例子是一个极为简单的wysiwyg编辑器，演示地址和源码分别戳[此处](http://surunzi.github.io/KissyLearning/example/plugin/)和[此处](https://github.com/surunzi/KissyLearning/tree/master/example/plugin/)^_^

Base模块除了可以实现类的继承，本身还具有扩展和插件机制以便更好进行代码复用和类结构管理。先来看一下什么是扩展：**Base.extend([类数组], {}, {})**。向extend方法第一个参数传入一个类数组，该数组中的类所具有的方法将会被添加入新建的类中。出现同名方法的话，扩展类数组中靠后的优先，覆盖前面的，主类的最优先，比如下面的例子：

    var A = Base.extend({
        constructor: function () {},
        run: function () {
            console.log('a');
        }
    });
    var B = Base.extend({
        constructor: function () {},
        run: function () {
            console.log('b');
        }
    });
    var C = Base.extend([A, B], {
    });
    var c = new C;
    c.run();

B在A之后，所以结果应该是'b'，再如下面：

    var A = Base.extend({
        constructor: function () {},
        run: function () {
            console.log('a');
        }
    });
    var B = Base.extend({
        constructor: function () {},
        run: function () {
            console.log('b');
        }
    });
    var C = Base.extend([A, B], {
        run: function () {
            console.log('c');
        }
    });
    var c = new C;
    c.run();

主类中出现了run方法，覆盖掉B中的run方法，结果是c。通过Base扩展的机制可以实现类似于多继承的效果，Kissy内部很多组件也是通过此方法创建的，比如overlay：

    Container.extend([
        ContentBox,
        Shim,
        Loading,
        AlignExtension,
        Mask,
        OverlayEffect
    ], {...}, {...});

> 注：扩展类数组中的构造方法比如上例中的A和B，如果是通过Base.extend方法创建的，需要覆盖掉原有的constructor方法。因为在默认constuctor方法链上有操作会出现循环调用进而导致堆栈溢出，具体是哪个语句导致在这里就不细讲了，有兴趣的可以自行看一下base模块和attribute模块的源码。


除了扩展机制外，Base模块还提供了Plugin机制在类的实例（而不是类本身）上动态添加特性。Base提供了一个配置（plugins）和三个函数（plug、unplug和getPlugin）用来管理插件。

    editor.plug(undo);
    editor.plug(redo);
    editor.plug(bold);
    editor.plug(italic);
    editor.unplug(bold);

plug方法做的实际上只是将传入的对象赋值到实例的plugins属性中去，同时调用对象的pluginInitializer方法。如果传入参数为function类型则会先将其实例化。unplug做的则是相反的工作，调用plugins中指定的plugin的pluginDestructor方法，并将其从plugins数组中去除。getPlugin不用说，当然是返回指定的plugin。

具体如何使用扩展和插件机制请参考本次的[简单wygiwys编辑器](http://surunzi.github.io/KissyLearning/example/plugin/)例子。当然，可能这并非是使用它们的最佳情景。具体什么时候该使用它们还是要由你自己依据实际的使用情况来决定。