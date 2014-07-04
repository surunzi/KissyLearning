---
layout: api
extracss: api
title: Anim
---

|功能|创建动画|
|模块名|anim|
|模块实质|类|

### 构造函数

<div class="function" markdown="1">

#### Anim(elem, props, duration, easing, completeFn)

<div class="detail" markdown="1">

elem

类型：String \| HTMLElement \| KISSY.Node \| window \| 普通的Object

描述：作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）

------------------------------

props

类型：Object

描述：动画结束时的 dom 样式值

------------------------------

duration（可选）

类型：Number

描述：默认为1，动画持续时间，以秒为单位

------------------------------

easing（可选）

类型：String

描述：默认为 easeNone ，动画平滑函数

可取值：swing \| easeNone \| linear \| easeIn \| easeOut \| easeBoth \| easeInStrong \| easeOutStrong \| easeBothStrong \| elasticIn \| elasticOut \| elasticBoth \| backIn \| backOut \| backBoth \| bounceIn \| bounceOut \| bounceBoth \| cubic-bezier(p1x, p1y, p2x, p2y)（所有取值必须在[0,1]之间）

------------------------------

completeFn（可选）

类型：Function

描述：动画到最后一帧后的回调函数

</div>

</div>

<div class="function" markdown="1">

#### Anim(elem, props, config)

<div class="detail" markdown="1">

elem

类型：String \| HTMLElement \| KISSY.Node \| window \| 普通的Object

描述：作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）

------------------------------

props

类型：Object

描述：动画结束时的 dom 样式值

------------------------------

config（可选）

类型：Object

描述：动画配置项

|名称|类型|描述|
|--------------|
|complete|Function|动画到最后一帧后的回调函数|
|duration|Number|默认为1，动画持续时间，以秒为单位|
|easing|String \| Function|默认为 easeNone ，动画平滑函数|
|queue|String \| false \| undefined|所属队列名称. 默认undefined。属于系统内置队列，设置 false 则表示该动画不排队立即执行|
|useTransition|Boolean|是否使用css3 transition提升性能, 默认 false|

> 在 useTransition 为 true 的时候，easing 的值必须是 w3c 规定的时间函数名称。
具体为：ease \| linear \| ease-in \| ease-out \| ease-in-out \| cubic-bezier(\<number\>, \<number\>, \<number\>, \<number\>)

</div>

</div>

### 静态方法

<div class="function" markdown="1">

#### .isPaused(elem)：用于判断 elem 上是否有动画对象在暂停

<div class="detail" markdown="1">

elem

类型：HTMLElement \| window

描述：作用动画的元素节点

------------------------------

返回值

类型：Boolean

</div>

</div>

<div class="function" markdown="1">

#### .isRunning(elem)：用于判断 elem 上是否有动画对象在执行

<div class="detail" markdown="1">

elem

类型：HTMLElement \| window

描述：作用动画的元素节点

------------------------------

返回值

类型：Boolean

</div>

</div>

<div class="function" markdown="1">

#### .pause(elem, queueName)：暂停某元素上的动画（集合）

<div class="detail" markdown="1">

elem

类型：HTMLElement \| window

描述：作用动画的元素节点

------------------------------

queueName

类型：String

描述：队列名字，设置 queueName 后, 表示停止元素上指定队列中的所有动画：

|值|停止对象|
|-----------|
|null|默认队列的动画|
|false|不排队的动画|
|String|指定名称的队列的动画|
|不设置|所有队列中的所有动画|

</div>

</div>

<div class="function" markdown="1">

#### .resume(elem, queueName)：继续某元素上的动画（集合）

<div class="detail" markdown="1">

elem

类型：HTMLElement \| window

描述：作用动画的元素节点

------------------------------

queueName

类型：String

描述：队列名字，设置 queueName 后, 表示继续元素上指定队列中的所有动画：

|值|停止对象|
|-----------|
|null|默认队列的动画|
|false|不排队的动画|
|String|指定名称的队列的动画|
|不设置|所有队列中的所有动画|

</div>

</div>

<div class="function" markdown="1">

#### .stop(elem, end, clearQueue, queueName)：停止某元素上的动画（集合）

<div class="detail" markdown="1">

elem

类型：HTMLElement \| window

描述：作用动画的元素节点

------------------------------

end

类型：Boolean

描述：false 时, 动画会在当前帧直接停止（不触发 complete 回调）；为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）

------------------------------

clearQueue

类型：Boolean

描述：默认为false，是否清除动画队列中余下的动画

------------------------------

queueName

类型：String

描述：队列名字，设置 queueName 后, 表示停止元素上指定队列中的所有动画：

|值|停止对象|
|-----------|
|null|默认队列的动画|
|false|不排队的动画|
|String|指定名称的队列的动画|
|不设置|所有队列中的所有动画|

</div>

</div>

### 方法

<div class="function" markdown="1">

#### .isPaused()：判断当前动画对象是否被暂停

<div class="detail" markdown="1">

返回值

类型：Boolean

</div>

</div>

<div class="function" markdown="1">

#### .isRunning()：判断当前动画对象是否在执行动画过程

<div class="detail" markdown="1">

返回值

类型：Boolean

</div>

</div>

<div class="function" markdown="1">

#### .pause()：在动画实例上调用，暂停当前动画实例的动画

</div>

<div class="function" markdown="1">

#### .resume()：在动画实例上调用, 继续当前动画实例的动画

</div>

<div class="function" markdown="1">

#### .run()：在动画实例上调用, 开始当前动画实例的动画

</div>

<div class="function" markdown="1">

#### .stop(finish)：在动画实例上调用, 结束当前动画实例的动画

<div class="detail" markdown="1">

finish（可选）

类型：Boolean

默认：false

描述：false 时, 动画会在当前帧直接停止（不触发 complete 回调）；为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）

</div>

</div>

### 文档

- [Kissy动画对比jQuery动画的五个亮点](http://surunzi.github.io/KissyLearning/basic-tutorial/2014/06/20/key-difference-between-jquery-animate-and-kissy-anim/)
- [官网ANIM指导手册](http://docs.kissyui.com/1.4/docs/html/guideline/anim.html)

### 示例

- [Anim动画实例](http://surunzi.github.io/KissyLearning/example/anim/)
- [Anim简单示例](http://surunzi.github.io/KissyLearning/example/animDemo/)
- [基本动画示例](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo1.html)
- [滚动属性动画实例](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo2.html)
- [节点实例动画操作](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo3.html)
- [窗口滚动示例](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo4.html)
- [节点上的 stop 示例](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo5.html)
- [动画队列支持](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo6.html)
- [对普通对象使用动画函数](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo7.html)
- [使用transition来完成动画](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo8.html)
- [跨浏览器 transform](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo9.html)
- [自定义动画机制](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo10.html)
- [Anim 使用 Promise API 示例](http://docs.kissyui.com/1.4/docs/html/demo/anim/demo11.html)