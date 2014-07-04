---
layout: empty
---

selector

类型：String \| HTMLCollection \| Array\<HTMLElement\>

描述：字符串表示 css3 选择器

------------------------------

filter

类型：String \| Function

描述：过滤选择器或函数

|类型|说明|
|---------|
|String|格式为 tag.cls , 其他格式需要引入模块 sizzle|
|Function|传入参数当前 dom 节点, 返回 true 表示保留|

------------------------------

context（可选）

类型：String \| HTMLCollection \| Array\<HTMLElement\>

描述：选择器参考上下文

------------------------------

返回值

类型：Array\<HTMLElement\>

描述：符合选择器字符串的 dom 节点数组