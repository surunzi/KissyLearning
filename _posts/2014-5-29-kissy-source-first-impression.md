---
layout: post
title: 初窥Kissy源码结构
category: learning-notes
---

之前花了点时间大概看了下Kissy的官网部分文档，大致上也了解了Kissy的基本使用方法。当然，学东西的时候光看不练是很难真正将其掌握的。因此，也就有了这个放置在GitHub上的[KissyLearning](https://github.com/surunzi/KissyLearning)项目。考虑到网络上Kissy教程文档的缺乏，这里除了会发学习笔记外，可能还会发点傻瓜级教程什么的~_~

点击[此处](https://github.com/kissyteam/kissy)查看Kissy项目的GitHub主页，其中src目录存放的就是Kissy的源码。从Build目录下可以打开seed.js（种子文件），可以看到包含了loader，features，ua三个基本模块。其中，loader（模块加载器）是Kissy的最开始部分。首先打开src/loader/目录下的build.xml文件，由最底部的代码得知，loader文件的合并顺序。

Kissy/src/loader/build.xml：

    <target name="concat">
        <concat destfile="${component.src.dir.tmp}/loader-pkg-debug.js"
                encoding="${charset}" outputencoding="${charset}">
            <path location="${component.src.dir}/kissy.js"/>
            <path location="${component.src.dir}/utils.js"/>
            <path location="${component.src.dir}/data-structure.js"/>
            <path location="${component.src.dir}/css-onload.js"/>
            <path location="${component.src.dir}/get-script.js"/>
            <path location="${component.src.dir}/configs.js"/>
            <path location="${component.src.dir}/combo-loader.js"/>
            <path location="${component.src.dir}/loader.js"/>
            <path location="${component.src.dir}/i18n.js"/>
            <path location="${component.src.dir}/init.js"/>
        </concat>
    </target>

首先来看kissy.js文件，把大部分代码删除掉，可以看到其基本结构下面这样子的：

    var KISSY = (function (undefined) {
        var S;
        S = {
            /** Some code here. */
        };
        return S;
    })();

该文件定义一个KISSY的变量，作为整个库文件的最外层文件（命名空间），以免污染全局。其值是某自执行函数的返回值，即函数中所定义的S。该文件主要定义了全局命名空间，并定义了一小部分属性，诸如版本号，配置，日志等。

接下来执行的是utils.js，data-structure.js...loader.js等文件，其基本结构大致如下：

    (function (S) {
        /** Some code here. */
    })(KISSY);

利用自执行函数，将KISSY对象传入函数中，并将操作后需要保留的值或方法赋给S，即KISSY对象。

在基本的加载器初始完成之后，便可以使用模块加载器来进行模块的添加和管理了，之后代码的基本结构如下：

    KISSY.add(function (S, require, exports, module) {
        /** Some code here. */
    });

> 关于Kissy的模块定义规范可戳[此处](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)查看。

晚上大概扫了一下源码，就只了解了这么多，之后有空再细看。复习，不对。。是预习嵌入式去，祝自己下周考个好成绩。

------------------------

说笑的，求不挂就行(T＿T)