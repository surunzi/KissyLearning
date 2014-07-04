---
layout: api
extracss: api
title: Base
---

|功能|创建类|
|模块名|base|
|模块实质|类|
|父类|[Attribute]({{ site.baseurl }}/api/attribute/)|
|备注|请使用 Base.extend() 创建类，而不是 new Base()|

### 构造函数

<div class="function" markdown="1">

#### Base(config)

<div class="detail" markdown="1">

config

类型：Object

描述：属性名/配置信息对

|名称|类型|描述|
|--------------|
|listeners|Object|配置组件的事件绑定|
|plugins|Array|插件构造器数组或插件对象数组|
|describedby|String|按钮节点的 aria-describedby 属性值|
|tooltip|String|按钮节点的 title 属性值|
|value|String|按钮值|

</div>

</div>

### 静态方法

<div class="function" markdown="1">

#### .extend(extensions, methodDesc, staticAttributes, desc)：从当前类上扩展出一个子类

<div class="detail" markdown="1">

extensions（可选）

类型：Array

描述：扩展类数组

------------------------------

methodDesc

类型：Object

描述：方法集合键值对

------------------------------

staticAttributes

类型：Object

描述：放到新产生组件类上的静态属性集合键值对，其中 ATTRS 属性特殊对待

------------------------------

desc

类型：Object

描述：类元信息

</div>

</div>

### 方法

<div class="function" markdown="1">

#### .callSuper()：调用父类的对应方法，如果没有，则返回undefined

</div>

<div class="function" markdown="1">

#### .destroy()：销毁实例

</div>

<div class="function" markdown="1">

#### .getPlugin(id)：根据指定的 id 获取对应的plugin实例

<div class="detail" markdown="1">

id

类型：String

描述：plugin实例的id

------------------------------

返回值

描述：对应的plugin实例

</div>

</div>

<div class="function" markdown="1">

#### .plug(plugin)：安装指定插件

<div class="detail" markdown="1">

plugin

类型：Function \| Object

描述：指定的插件构造器或者插件对象

</div>

</div>

<div class="function" markdown="1">

#### .unplug(plugin)：卸载指定插件

<div class="detail" markdown="1">

plugin

类型：Function \| Object

描述：指定的插件 id 字符串或者插件对象

</div>

</div>

### 文档

- [使用Base模块实现类的创建和继承](http://surunzi.github.io/KissyLearning/basic-tutorial/2014/06/08/class-inheritance/)
- [Base模块的扩展与插件机制](http://surunzi.github.io/KissyLearning/basic-tutorial/2014/06/14/plugin-design-pattern-of-base-module/)
- [官网BASE指导手册](http://docs.kissyui.com/1.4/docs/html/guideline/base.html)
- [KISSY 中的面向对象](http://docs.kissyui.com/1.4/docs/html/guideline/oo.html)
- [Base 概述](http://docs.kissyui.com/1.4/docs/html/tutorials/kissy/base/overview.html)
- [RichBase 的前世今生](http://docs.kissyui.com/1.4/docs/html/tutorials/kissy/base/history.html)

### 示例

- [类的创建和继承](http://surunzi.github.io/KissyLearning/example/class/)
- [Base模块扩展、插件](http://surunzi.github.io/KissyLearning/example/plugin/)
- [Base使用示例](http://docs.kissyui.com/1.4/docs/html/demo/base/index.html)