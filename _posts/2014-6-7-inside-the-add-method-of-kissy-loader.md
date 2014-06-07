---
layout: post
title: Loader模块add方法源码一览
category: learning-notes
---

Kissy框架的模块加载器中最重要的就是add和use方法：add用于添加模块，use用于加载并使用模块。本文只介绍关于add方法的大概内部实现流程，use将在往后的学习笔记中介绍。

稍微了解过Kissy的话都应该知道，Kissy使用use方法加载外部模块时将发起http请求模块所在的js文件，而模块文件内均有一个add方法。js文件加载完毕之后便会执行该add方法。那么，add方法究竟做了什么呢？


loader/src/loader.js

    (function (S) {
        var Loader = S.Loader,
            ComboLoader = Loader.ComboLoader;
        Utils.mix(S, {
            add: function (name, factory, cfg) {
                ComboLoader.add(name, factory, cfg, arguments.length);
            }
        });
    })(KISSY);

将loader.js中必要的文件删除后，可以看到Kissy.add其实只是在ComboLoader.add之上做了一层封装。

loader/src/combo-loader.js

    (function (S, undefined) {
        var Loader = S.Loader,
            addModule = Utils.addModule;
        ...
        function ComboLoader(callback) {
            ...
        }
        ...
        ComboLoader.add = function (name, factory, config, argsLen) {
            // KISSY.add('xx',[],function(){});
            if (argsLen === 3 && Utils.isArray(factory)) {
                ...
            }
            // KISSY.add(function(){}), KISSY.add('a'), KISSY.add(function(){},{requires:[]})
            if (typeof name === 'function' || argsLen === 1) {
                ...
                addModule(name, factory, config);
            } else {
                ...
                addModule(name, factory, config);
            }
        };
        ...
        Loader.ComboLoader = ComboLoader;
    })(KISSY);

ComboLoader.add主要是对传入的参数进行了一些顺序处理，以适应不同的参数传递，最终调用的是Utils.addModule。

loader/src/utils.js

    (function (S) {
        var Loader = S.Loader,
            Env = S.Env,
            mods = Env.mods;
        ...
        mix(Utils, {
            ...
            createModule: function (name, cfg) {
                var module = mods[name];
                ...
                mods[name] = module = new Loader.Module(mix({
                    name: name
                }, cfg));
                return module;
            },
            addModule: function (name, factory, config) {
                ...
                Utils.createModule(name, mix({
                    name: name,
                    status: Loader.Status.LOADED,
                    factory: factory
                }, config));
            }
        });
    })(KISSY);

Utils.addModule检测模块是否已被加载过后调用Utils.createModule。Utils.createModule最终创建Loader.Module实例并最终赋值到Kissy.Env.modes[name]中去。

> Loader.Module构造函数在loader/src/data-structure.js中