---
title: 响应式
titleRow: true
cols: "grid-cols-[1fr_1fr]"
---

### Vue2

`Object.defineProperty()`

<v-click>

![Vue2响应式原理](https://v2.cn.vuejs.org/images/data.png)

</v-click>

::right::

<v-click>

### Vue3

`Proxy`

<v-click>

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等），语法如下

```javascript twoslash
const p = new Proxy(target, handler)
```

其中`handler`为包含捕捉器的占位符对象，包含`get`和`set`等方法。

</v-click>

</v-click>

<!--
介绍完 Vue2 后：

Vue 2 使用 getter / setters 完全是出于支持旧版本浏览器的限制。而在 Vue 3 中则使用了 Proxy 来创建响应式对象，仅将 getter / setter 用于 ref。 

那么什么是 Proxy？Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

最后总结：


简而言之与`Object.defineProperty()`相似的作用，但不会改变对象。需要说明的是，虽然使用了 Proxy 之后的对象表现得很像原始的对象，但是通过`===`还是可以看出区别 
-->
