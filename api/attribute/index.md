---
layout: api
extracss: api
title: Attribute
---

|功能|创建类|
|模块名|attribute|
|模块实质|类|

### 构造函数

<div class="function" markdown="1">

#### Attribute(config)

<div class="detail" markdown="1">

config

类型：Object

描述：配置项

</div>

</div>

### 方法

<div class="function" markdown="1">

#### .addAttr(name, attrConfig)：给宿主对象增加一个属性

<div class="detail" markdown="1">

name

类型：String

描述：属性名

------------------------------

attrConfig

类型：Object

描述：属性配置信息

|名称|类型|描述|
|--------------|
|getter|Function|读属性时的处理函数|
|setter|Function|写属性时的处理函数，传入从 set() 参数得到的属性值和属性名，如果返回非 undefined 则作为新的属性设置值|
|validator|Function|写属性时的验证函数，传入从 set() 参数得到的属性值和属性名，返回 false 则不改变该属性值|
|value|String \| Number|属性默认值。注意默认值请不要设置为复杂对象（通过自定义构造器 new 出来的），复杂对象可设置 valueFn 返回|
|valueFn|Function|提供属性默认值的函数，传入对象内部对应的属性值和属性名，取该函数的返回值作为最终值给用户|

> 如果配置项中没有设置 value, 会调用 valueFn 函数获取默认值并赋给 value。

</div>

</div>

<div class="function" markdown="1">

#### .addAttrs(attrConfigs, values)：批量添加属性

<div class="detail" markdown="1">

attrConfigs

类型：Object

描述：属性名/配置信息对

------------------------------

values

类型：Object

描述：属性名/值对, 批量设置当前对象的属性值

</div>

</div>

<div class="function" markdown="1">

#### .hasAttr(name)：判断是否有名为 name 的属性

<div class="detail" markdown="1">

name

类型：String

描述：属性名

------------------------------

返回值

类型：Boolean

描述：是否有名为 name 的属性

</div>

</div>

<div class="function" markdown="1">

#### .get(name)：获取属性 name 的值

<div class="detail" markdown="1">

name

类型：name

描述：属性名

</div>

</div>

<div class="function" markdown="1">

#### . getAttrVals()：获取目前实例的所有属性键值对集合

<div class="detail" markdown="1">

返回值

类型：Object

描述：属性键值对集合

</div>

</div>

<div class="function" markdown="1">

#### .removeAttr(name)：删除名为 name 的属性

<div class="detail" markdown="1">

name

类型：String

描述：属性名

</div>

</div>

<div class="function" markdown="1">

#### .removeAttr(name)：删除名为 name 的属性

<div class="detail" markdown="1">

name

类型：String

描述：属性名

</div>

</div>

<div class="function" markdown="1">

#### . reset(name,opts)：重置属性 name 为初始值（调用一次 set() ）

<div class="detail" markdown="1">

name

类型：String

描述：属性名

------------------------------

opts

类型：Object

描述：控制对象

|名称|类型|描述|
|--------------|
|silent|Boolean|默认 false , 是否触发 change 系列事件|

</div>

</div>

<div class="function" markdown="1">

#### . reset(name)：将所有属性全部重置为初始值（调用一次 set() ）

<div class="detail" markdown="1">

opts

类型：Object

描述：控制对象

|名称|类型|描述|
|--------------|
|silent|Boolean|默认 false , 是否触发 change 系列事件|

</div>

</div>

<div class="function" markdown="1">

#### .set(name, value, opts)：设置属性 name 的值为 value

<div class="detail" markdown="1">

name

类型：String

描述：属性名

> 也可以为 “x.y” 形式，此时要求 x 属性为包含 y 属性的普通 Object，这时会设置 x 属性值的 y 属性.但只会触发 x 的相关 change 事件

------------------------------

value

类型：String

描述：属性的值

------------------------------

opts

类型：Object

描述：控制对象

|名称|类型|描述|
|--------------|
|error|Function|验证失败的回调，包括失败原因|
|force|Function|是否强制触发 change 事件，默认值为 false，当值发生变化时才触发|
|silent|Boolean|默认 false , 是否触发 change 系列事件|

------------------------------

返回值

类型：Boolean

描述：该次属性设置是否生效（是否通过了 validator 验证）

</div>

</div>

<div class="function" markdown="1">

#### .set(json, opts)：批量设置属性值

<div class="detail" markdown="1">

json

类型：String

描述：属性名与属性值的键值对

------------------------------

opts

类型：Object

描述：控制对象

|名称|类型|描述|
|--------------|
|error|Function|验证失败的回调，包括失败原因|
|force|Function|是否强制触发 change 事件，默认值为 false，当值发生变化时才触发|
|silent|Boolean|默认 false , 是否触发 change 系列事件|

------------------------------

返回值

类型：Boolean

描述：该次属性设置是否生效（是否通过了 validator 验证）

</div>

</div>

### 事件

<div class="function" markdown="1">

#### .afterAttrNameChange(e)：名为 attrName 的属性, 在改变它的值之后触发该事件

<div class="detail" markdown="1">

e

|属性|类型|描述|
|--------------|
|attrName|String|当前的属性名|
|newVal|*|当前的属性值|
|prevVal|*|当前改变前的属性值|
|subAttrName|String|当前的完整属性名|

</div>

</div>

<div class="function" markdown="1">

#### .beforeAttrNameChange(e)：名为 attrName 的属性, 在改变它的值之前触发该事件

<div class="detail" markdown="1">

e

|属性|类型|描述|
|--------------|
|attrName|String|当前的属性名|
|newVal|*|将要改变到的属性值|
|prevVal|*|当前的属性值|
|subAttrName|String|当前的完整属性名|

</div>

</div>

<div class="function" markdown="1">

#### *Change(e)：每调用 set() 一次后就触发一次该事件

<div class="detail" markdown="1">

e

|属性|类型|描述|
|--------------|
|attrName|Array|本次 set 导致改变的属性名集合|
|newVal|Array|本次 set 导致的属性当前值集合|
|prevVal|Array|本次 set 导致的属性在 set 前的值集合|
|subAttrName|Array|本次 set 导致的属性全名集合|

</div>

</div>