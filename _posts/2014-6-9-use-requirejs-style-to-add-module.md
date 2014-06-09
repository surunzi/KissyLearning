---
layout: post
title: 使用requirejs的define方法来添加模块
category: basic-tutorial
---

记得之前在Kissy的官网上，有人建议将依赖模块的声明放到前面去，这样看起来会比较方便些。官网提供的解决方法是：

    KISSY.add(function(S, require){
        var A = require('a');
        var B = require('b');
        var C = require('c');
        // Your code...
    });

如果觉得对这种解决方法不满意的话，我们也可以自行解决，方法就是在KISSY.add方法上再套上一层将参数位置颠倒，比如下面：

    (function (S) {
        window.define = S.define = function (deps, callback) {
            var slice = Array.prototype.slice;
                
            if (arguments.length === 1) {
                S.add(deps);
                return;
            }
            
            S.add(function () {
                return callback.apply(null, slice.apply(arguments, [1]));
            }, {
                requires: deps
            });
        }
    })(KISSY);

将这段代码紧贴在Kissy库后面，就可以用requireJs的方法来添加模块了，比如下面：

module-A.js

    define(['node', 'base'], function (Node, Base) {
        ...
    });

或者是下面这样：

    define(function () {
        ...
    })

当然这段代码很粗糙，并没有做太多处理，你可以根据自己的实际需要再对其进行定制修改。。