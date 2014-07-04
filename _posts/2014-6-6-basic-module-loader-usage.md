---
layout: post-cover
title: Kissy模块加载器基础用法
category: basic-tutorial
cover: basic-module-loader-usage
---

Javascript模块化可以为我们带来代码复用、提高可维护性、按需加载文件等好处。目前比较流行的模块加载器有RequireJs和SeaJs。如果你正在使用Kissy库的话，就无需另外再去引入这些加载器，因为Kissy本身就是一个模块化的Javascript框架。本文将从一个实例出发说明Kissy模块化的基本使用方法，最终的效果可戳[此处](http://surunzi.github.io/KissyLearning/example/module/)进行查看。你也可以戳[此处](https://github.com/surunzi/KissyLearning/tree/master/example/module/)查看所有的源代码。

首先建立HTML文件：

    ...
    </head>
    <body>
        <div id="title">
            <h1>模块按需加载</h1>
            <span>请点击下面的按钮并同时查看网络请求情况</span>
        </div>
        <div id="btn-wrapper">
            <div id="btn">点我加载模块并执行</div>
        </div>
        <script src="http://g.tbcdn.cn/kissy/k/1.4.3/seed.js" data-combine="{combine:true}"></script>
        <script src="effect.js"></script>
    </body>
    </html>

Kissy中添加模块的步骤如下：

1.新建一个js文件，在其中添加如下的结构：

    KISSY.add(function (S, Node) {
        /* 模块代码 */
        return;
        /* 最后可以返回结果供调用该模块的文件使用 */
    }, {
        requires: ['node'] /* 可以加载多个该模块所依赖的模块，与函数的参数一一对应*/
    });

比如我们这次例子的结构是以下这样的：

snow.js

    KISSY.add(function (S, Node) {
        /* 变量定义 */
        var ...;
        // 初始化
        function init() {
        }
        // 开始执行动画
        function begin() {
        }
        // 绘制
        function draw() {
        }
        // 粒子构造函数
        function Particle() {
        }
        // 停止动画
        function stop() {
        }
        /* 将begin和stop方法返回供调用该模块的文件使用 */
        return {
            begin: begin,
            stop: stop
        };
    }, {
        requires: ['node']
    });

2.配置包

由于我们使用的是淘宝CDN，如果不注册包的话发送文件请求是会以淘宝CDN的地址为前缀，所以必须注册包用来映射正确的URL地址。同时包也在指明请求合并中起作用，这里不属于本文讨论范围就不详谈了。

以这次为例子:

effect.js

    KISSY.config('packages', {
        'myModule': {
            base: window.location.href.replace('index.html', ''),
            ignorePackageNameInUri: true
        }
    });

其中base为包的url映射，可以把它当成单纯的字符串替换，例如：

指明要使用'myModule/snow'这个包，它会将myModule替换为base, 请求地址为：base + 'snow.js'；

假如没有指定ignorePackageNameInUri为true，则请求地址为：base + 'myModule/' + 'snow.js'。

3.使用模块

使用自定义模块就跟使用Kissy自带的模块一样简单，比如：

effect.js

    KISSY.ready(function (S) {
    KISSY.use('node', function (S, Node) {
        Node.one('#btn').on('click', function () {
            /* 点击按钮时加载snow模块并执行 */
            KISSY.use('myModule/snow', function (S, snow) {
                snow.begin();
            });
        });
    });
    });

最后，总结一下创建自定义模块的步骤：

- 新建文件，并用KISSY.add创建模块
- 如果有必要，注册模块所在包
- 用KISSY.use加载使用模块

> 更多关于Kissy Loader的信息请戳[这里](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)和[这里](http://docs.kissyui.com/1.4/docs/html/tutorials/kissy/loader/index.html)^_^