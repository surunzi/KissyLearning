---
layout: post
title: Base类继承中的callSuper实现
category: learning-notes
---

刚接触到Kissy的Base模块时就很好奇它的callSuper方法到底是怎样实现的，这东西实在是太方便了。首先简述一下callSuper的作用：假设现在对象o有方法a，在方法a内调用callSuper。callSuper将找到o的原型op，并调用op中的方法a。

可惜，在callSuper里面能够访问到的只有调用该方法a的对象和调用callSuper的方法。调用方法a的对象不一定是o，因为有可能o其实是该对象的原型链上的一个原型。那么，该怎么做呢？

attribute/src/attribute.js:

    callSuper: function () {
            var method, obj,
                self = this,
                args = arguments;
            // 如果调用callSuper的对象本身就是function
            if (typeof self === 'function' && self.__name__) {
                method = self;
                obj = args[0];
                args = Array.prototype.slice.call(args, 1);
            } else {
                method = arguments.callee.caller;
                if (method.__wrapped__) {
                    method = method.caller;
                }
                obj = self;
            }
            var name = method.__name__;
            if (!name) {
                return undefined;
            }
            var member = method.__owner__.superclass[name];
            if (!member) {
                return undefined;
            }
            return member.apply(obj, args || []);
        }

从callSuper的源代码可以知道，callSuper首先获取到调用它的函数method和其函数名name。然后再通过method.\_\_owner\_\_获取到其所在的类构造方法，之后在通过该类构造方法的superclass得到method所在对象的原型，最后再调用原型中的同名方法。当然，方法中的\_\_name\_\_和\_\_owner\_\_等属性都是在用extend方法创建类时就添加上去的。

PS：本站停更。考完分布式计算还有嵌入式课程设计答完辩后再回来继续更=_=