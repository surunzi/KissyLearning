---
layout: api
extracss: api
title: Xtemplate
---

|功能|富逻辑的 KISSY 模板引擎，兼容 mustache|
|模块名|xtemplate|
|模块实质|类|

### 构造函数

<div class="function" markdown="1">

#### XTemplate(tpl, config)

<div class="detail" markdown="1">

tpl

类型：String \| Function

描述：字符串模板或编译过的模板函数

------------------------------

config

类型：Object

描述：配置项

|名称|类型|描述|
|--------------|
|cache|Boolean|是否缓存生成的模板函数，默认 true|
|commands|Object|局部自定义命令的键值对|
|name|Object|模版名称，可在 chrome dev tools 中看到以该值为名称的模板文件代码|

</div>

</div>

### 静态方法

<div class="function" markdown="1">

#### .addCommand(commandName, fn)：添加全局命令

<div class="detail" markdown="1">

commandName

类型：String

描述：命令名称

------------------------------

fn

类型：Function

描述：命令定义

</div>

</div>

### 方法

<div class="function" markdown="1">

#### .addCommand(commandName, fn)：添加局部命令

<div class="detail" markdown="1">

commandName

类型：String

描述：命令名称

------------------------------

fn

类型：Function

描述：命令定义

</div>

</div>

<div class="function" markdown="1">

#### .compile(subTplName)：编译模板

<div class="detail" markdown="1">

subTplName

类型：String

描述：子模板名称

------------------------------

返回值

类型：Function

描述：编译过的模板函数

</div>

</div>

<div class="function" markdown="1">

#### .removeCommand(commandName)：删除指定的局部命令

<div class="detail" markdown="1">

commandName

类型：String

描述：命令名称

</div>

</div>

<div class="function" markdown="1">

#### .render(data)：渲染数据到模板

<div class="detail" markdown="1">

data

类型：Object

描述：数据对象

------------------------------

返回值

类型：String

描述：数据融合模版后的字符串

</div>

</div>

### 文档

- [官网XTEMPLATE指导手册](http://docs.kissyui.com/1.4/docs/html/guideline/xtemplate.html)
- [官网xtemplate教程](http://docs.kissyui.com/1.4/docs/html/tutorials/kissy/xtemplate/index.html)

### 示例

- [xtemplate简单示例](http://surunzi.github.io/KissyLearning/example/xtemplate/)
- [xtemplate 使用示例](http://docs.kissyui.com/1.4/docs/html/demo/xtemplate/base.html)
- [xtemplate 宏命令使用示例](http://docs.kissyui.com/1.4/docs/html/demo/xtemplate/macro.html)
- [xtemplate 顶层作用域使用示例](http://docs.kissyui.com/1.4/docs/html/demo/xtemplate/rootContext.html)
- [xtemplate 模块使用示例](http://docs.kissyui.com/1.4/docs/html/demo/xtemplate/module.html)