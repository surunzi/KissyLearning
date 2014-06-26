---
layout: api
extracss: api
title: Json
---

|功能|json格式转换
|模块名|json
|模块实质|对象

### 函数

<div class="function" markdown="1">

#### .parse(text, reviver)：将字符串解析为json对象

<div class="detail" markdown="1">

text

类型：String

描述：要解析成json对象的字符串

------------------------------

reviver（可选）

类型：Function

描述：过滤器

------------------------------

返回值

类型：Object

描述：解析之后返回传入数据的一个对象表示

</div>

</div>

<div class="function" markdown="1">

#### .stringify(value, replacer, space)：将json对象或者数组转化为字符串

<div class="detail" markdown="1">

value

类型：Object \| Array

描述：要序列化的对象

------------------------------

replacer（可选）

类型：Function \| Array

描述：替换函数

------------------------------

space（可选）

类型：String \| Number

描述：缩进说明符

------------------------------

返回值

类型：String

描述：返回JSON字符串

</div>

</div>