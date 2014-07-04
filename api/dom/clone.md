---
layout: empty
---

selector

类型：String \| HTMLCollection \| Array\<HTMLElement\>

描述：字符串表示 css3 选择器

------------------------------

deep（可选）

类型：Boolean

描述：是否深度克隆（克隆节点的子孙节点）

------------------------------

withDataAndEvent（可选）

类型：Boolean

描述：节点是否具备源节点的 dom.data 属性以及事件

------------------------------

deepWithDataAndEvent（可选）

类型：Boolean

描述：子孙节点是否具备源节点对应子孙节点的 dom.data 属性以及事件

------------------------------

返回值

类型：HTMLElement

描述：符合选择器的第一个元素的克隆元素