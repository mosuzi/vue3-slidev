<style>
  .pop-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100vh - 300px);
    width: 370px;
    object-fit: scale-down;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
</style>

# 其他

1. 对于选项式 API 中的其他选项，可以使用`defineOptions`编译宏来声明，而不必使用单独的`<script>`块：

<div v-click.hide="1">

```javascript
// 可以使用组合式 API 完成定义的选项无法使用这个宏定义
defineOptions({
  name: 'DemoComp',
  inheritAttrs: false,
  customOptions: {
    /* ... */
  }
})
```
</div>

<div v-click="1">

2. 组合式 API 不再默认暴露组件实例的所有属性和方法，因此无法通过在控制台中使用 Vue DevTools 像之前一样`$vm.xxx`访问变量或方法，父组件也无法直接通过`$refs.childRef.someMethod()`调用子组件的方法，如果特别需要暴露实例的变量和方法，使用`defineExpose`宏

<div v-click.hide="3">

<div v-click.hide="2">
<div v-click>

```javascript
import { ref } from 'vue'

const a = ref(2)
const b = function() {
  console.log(a.value)
}

defineExpose({
  a,
  b
})
```
</div>
</div>
<div v-click>

```html
<!-- 使用 -->
<template>
  <ChildComponent ref="childRef" />
</template>

<script setup>
const childRef = ref(null)
ref.value.someMethod()
</script>
```

</div>
</div>
</div>

<div v-click="3">

3. Vue3 官方推荐使用`pinia`而不是`vuex`作为状态管理工具

</div>

<div v-click="4">

4. 生命周期基本类似于 Vue2，只是在 beforeCreate 前增加了 setup 的步骤，所有的生命周期钩子也需要声明引入，如`import { onMounted } from 'vue'` 

<div v-click.hide="6">
<div v-click="5">
<img class="pop-img" src="https://pics.mosuzi.com/blog/vue-lifecycle.png" />
</div>
</div>

</div>

<div v-click="6">

5. 在模板渲染上下文中，只有顶级的 ref 属性才会被解包。如果某一个变量本身不是响应式，但是其内部包含了一个响应式的属性，则在模板中使用时，需要手动解包: `<span>{{ obj.refValue.value }}</span>`

</div>

<div v-click="7">

6. 在定义变量或方法之前就使用它们，会引起编译失败。这个问题在以前使用选项式基本不会出现，但是使用了组合式以后很容易在随意排布方法和变量的时候，习惯性将用到的方法后置，从而在之前调用时产生报错

</div>
