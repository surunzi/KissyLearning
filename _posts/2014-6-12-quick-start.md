---
layout: post
title: Kissy快速入门
category: basic-tutorial
---

### 什么是模块化？

Kissy使用模块化开发，简单来说，就是将Kissy划分成多个部分，每个部分包含若干相关联的功能。在开发过程中，需要用到哪一部分功能就需要载入相应的模块。需要进行DOM操作，就载入dom或者node模块；需要进行ajax操作，就载入io模块；需要进行cookie操作，就载入cookie模块，依此类推。

### 载入Kissy库

在使用Kissy库之前，必须将Kissy引入到你的页面中去，只需要在HTML页面中插入以下代码即可：

    <script src="http://g.tbcdn.cn/kissy/k/1.4.3/seed.js" data-config="{combine:true}"></script>

seed.js文件只是一个模块加载器，并没有包含所有的Kissy文件。当你需要用到某些模块时，该加载器会动态加载所需要的文件。因此，如果是本地调试，不能单独将seed.js文件下载下来，必须下载整个Kissy库，当前最新的1.4.3版可戳[此处](https://github.com/kissyteam/kissy/archive/v1.4.3.zip)下载。

### Kissy.use

在Kissy中加载各模块使用use方法，该方法挂载在Kissy对象上：**KISSY.use(name,sandbox)**

其中name为数组，指明需要使用的模块，sandbox为匿名函数，第一个参数为S，传入KISSY全局对象，其他参数依次带入所载入的模块返回的对象。

    KISSY.use(['node', 'io'], function (S, Node, io) {
        var ele = Node.one('#ele');
        ...
    });

### 学习资料

进一步学习可前往：[教程](http://surunzi.github.io/KissyLearning/tutorial/)、[官网](http://docs.kissyui.com/)、[文档](http://surunzi.github.io/KissyLearning/document/)

如果有好的关于Kissy的学习资料，请发送邮件给我：**surunzi1992@gmail.com**