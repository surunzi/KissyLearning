---
layout: api
extracss: api
title: Button
---

|功能|用于快速创建具备常用功能的按钮对象|
|模块名|button|
|模块实质|类|
|父类|[Control]()|

### 构造函数

<div class="function" markdown="1">

#### Button(config)

<div class="detail" markdown="1">

config

类型：Object

描述：配置项

|名称|类型|描述|可选|
|-------------------|
|checkable|String|按钮是 toggle button|否|
|content|String|按钮的显示内容|否|
|describedby|String|按钮节点的 aria-describedby 属性值|是|
|tooltip|String|按钮节点的 title 属性值|是|
|value|String|按钮值|是|

</div>

</div>

### 属性

|名称|类型|描述|
|--------------|
|content|String|按钮的显示内容|
|checked|String|按钮是否是 checked 状态|
|value|String|按钮值|
|describedby|String|按钮节点的 aria-describedby 属性值|
|tooltip|String|按钮节点的 title 属性值|

### 事件

<div class="function" markdown="1">

#### .click(e)：当按钮被点击或被获得焦点后按键 enter|space 触发

<div class="detail" markdown="1">

e

类型：EventObject

描述：触发事件对象

|属性|类型|描述|
|--------------|
|target|Button|触发事件的按钮实例|

</div>

</div>

### 示例

<iframe width="100%" height="300" src="http://jsfiddle.net/kissyLearning/9nD6X/1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- [简单按钮/从已有 html 生成按钮](http://docs.kissyui.com/1.4/docs/html/demo/button/demo1.html)
- [定制 button 的样式](http://docs.kissyui.com/1.4/docs/html/demo/button/demo2.html)
- [禁用 Button](http://docs.kissyui.com/1.4/docs/html/demo/button/demo3.html)
- [模拟 alert 对话框](http://docs.kissyui.com/1.4/docs/html/demo/button/demo4.html)