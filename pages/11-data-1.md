### data 和 methods

在选项式 API 里，data 需要是一个函数，为了防止多实例数据互相污染，而在组合式 API 里，没有显式的 data 和 methods，顶层的绑定会被暴露给模板，如下：

````md magic-move
```html
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```

```html
<script setup>
// 变量
const msg = ref('Hello')

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```
```html {4,5}
<script setup>
// 变量
const msg = ref('Hello')
// 支持预先定义数据类型
const info = ref<{name: string}>({name: '张三'})

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```
````