---
layout: api
extracss: api
title: Cookie
---

|功能|cookie存取|
|模块名|cookie|
|模块实质|对象|

### 函数

<div class="function" markdown="1">

#### .get(name)：获取cookie值

<div class="detail" markdown="1">

name

类型：String

描述：cookie的名称

------------------------------

返回值

类型：String

</div>

</div>

<div class="function" markdown="1">

#### .remove(name, domain, path, secure)：置空cookie值，并立刻过期

<div class="detail" markdown="1">

name

类型：String

描述：cookie的名称

------------------------------

domain

类型：String

描述：域

------------------------------

path

类型：String

描述：路径

------------------------------

secure

类型：Boolean

描述：安全标志

</div>

</div>

<div class="function" markdown="1">

#### .set(name, val, expires, domain, path, secure)：设置cookie值

<div class="detail" markdown="1">

name

类型：String

描述：cookie的名称

------------------------------

val

类型：String

描述：cookie的值

------------------------------

expires（可选）

类型：Number \| Date

描述：失效时间。Number 类型时单位为天，不设置表示生效时间为本次浏览器进程

------------------------------

domain（可选）

类型：String

描述：域

------------------------------

path（可选）

类型：String

描述：路径

------------------------------

secure（可选）

类型：Boolean

描述：安全标志

</div>

</div>