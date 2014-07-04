---
layout: api
extracss: api
title: Color
---

|功能|颜色封装|
|模块名|color|
|模块实质|类|

### 构造函数

<div class="function" markdown="1">

#### Color(config)

<div class="detail" markdown="1">

config

类型：Object

描述：配置项

|名称|类型|描述|
|--------------|
|r|Number| red 值|
|g|Number| green 值|
|b|Number| blue 值|
|a|Number| alpha 值|

</div>

</div>

### 静态方法

<div class="function" markdown="1">

#### .fromHSL(cfg)：从 hsl 对象中生成颜色实例

<div class="detail" markdown="1">

cfg

类型：Object

    {
        h:xx,
        s:xx,
        l:xx,
        a:xx
    }

------------------------------

返回值

类型：Color

</div>

</div>

<div class="function" markdown="1">

#### .fromHSV(cfg)：从 hsv 对象中生成颜色实例

<div class="detail" markdown="1">

cfg

类型：Object

    {
        h:xx,
        s:xx,
        v:xx,
        a:xx
    }

------------------------------

返回值

类型：Color

</div>

</div>

<div class="function" markdown="1">

#### .parse(str)：从字符串表示的颜色值中获取颜色对象

<div class="detail" markdown="1">

str

类型：String

支持格式：'#rrggbb' \| '#rgb' \| 'rgb(r,g,b)' \| 'rgba(r,g,b,a)'

------------------------------

返回值

类型：Color

</div>

</div>

### 方法

<div class="function" markdown="1">

#### .getHSL()：得到当前颜色属性对应的 hsl 表示

<div class="detail" markdown="1">

返回值

类型：Object

    {
        h:xx,
        s:xx,
        l:xx
    }

</div>

</div>

<div class="function" markdown="1">

#### .getHSV()：得到当前颜色属性对应的 hsv 表示

<div class="detail" markdown="1">

返回值

类型：Object

    {
        h:xx,
        s:xx,
        v:xx
    }

</div>

</div>

<div class="function" markdown="1">

#### .setHSL(hsl)：根据 hsl 对象修改当前颜色实例

<div class="detail" markdown="1">

hsl

类型：Object

    {
        h:xx,
        s:xx,
        l:xx
    }

</div>

</div>

<div class="function" markdown="1">

#### .setHSV(hsv)：根据 hsv 对象修改当前颜色实例

<div class="detail" markdown="1">

hsv

类型：Object

    {
        h:xx,
        s:xx,
        v:xx
    }

</div>

</div>

<div class="function" markdown="1">

#### .toHex()：得到当前颜色属性对应的 16 进制表示字符串

<div class="detail" markdown="1">

返回值

类型：String

</div>

</div>

<div class="function" markdown="1">

#### .toHSL()：得到当前颜色属性对应的 hsl 表示字符串

<div class="detail" markdown="1">

返回值

类型：String

</div>

</div>

<div class="function" markdown="1">

#### .toHSLA()：得到当前颜色属性对应的 hsla 表示字符串

<div class="detail" markdown="1">

返回值

类型：String

</div>

</div>

<div class="function" markdown="1">

#### .toRGBA()：得到当前颜色属性对应的 rgba 表示字符串

<div class="detail" markdown="1">

返回值

类型：String

</div>

</div>

### 示例

- [Color使用示例](http://docs.kissyui.com/1.4/docs/html/demo/color/index.html)