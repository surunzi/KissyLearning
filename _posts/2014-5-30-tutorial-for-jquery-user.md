---
layout: post
title: jQuery用户快速上手Kissy
category: basic-tutorial
---

### 1. 引入库文件

jQuery:

    <script src="jquery.js"></script>

Kissy:

    <script src="http://g.tbcdn.cn/kissy/k/1.4.3/seed.js" data-config="{combine:true}"></script>

> Kissy跟jQuery一样，可以将其下载到本地进行使用，但更推荐使用淘宝的CDN。除能够减小服务器带宽压力，利用CDN加快js文件的载入速度外，还能直接使用combo，减少请求数，免去了让自己服务器支持combo功能的麻烦。

### 2. 开始使用

jQuery:

    $(document).ready(function () {
        /* jQuery代码 */
    });
    // 或者
    $(function () {
        /* jQuery代码 */ 
    });

Kissy:

    KISSY.use(['node'], function (S) {
    S.ready(function (S) {
        var $ = S.all;
        /** jQuery风格代码 */
    });
    });

> 在Dom操作上面基本上可以当成jQuery来进行使用，但还存在些许不同，之后有时间会单独整理一篇文章列出其中的不同点，当然也可以先参考[这篇文章](http://cyj.me/jquery-kissy-rosetta/)。

如果想要使用ajax功能的话，可以写成下面的形式：

    KISSY.use(['node', 'io'], function (S) {
    S.ready(function (S) {
        var $ = S.all,
            io = S.io,
            $.get = io.get,
            $.post = io.post;
        /** jQuery风格代码 */
    });
    });

最后说一点，本文只是用一种抖机灵的方式让使用jQuery的人能像用jQuery一样来使用Kissy，还是强烈建议去查看下Kissy的[模块化规范](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)。毕竟，模块化才是Kissy相比于jQuery真正所具有的优势，至少在我看来是这样的。使用Kissy，你可以很方便地创建和管理自己的模块，得到类似使用requireJs管理模块依赖库所带来的好处，让开发过程变得更加简单高效，代码的可维护性更高。