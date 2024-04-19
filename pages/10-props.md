---
title: Props
titleRow: true
cols: grid-cols-[2fr_3fr]
---

Vue2

```javascript
// 最简方式
export default {
  props: ['foo']
}

export default {
  props: {
    // 详细配置
    loading: {
      type: Boolean,
      default: false
    },
    // 只声明类型
    foo: String
  }
}
```

::right::

Vue3

````md magic-move
```typescript {none|*}
// 最简方式
defineProps(['loading'])
```

```typescript
// 兼容选项式配置
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
```

```typescript
// 推荐用法，其中的`?`表示可选
defineProps<{ loading?: boolean }>()
```

```typescript
// 上述针对类型的 defineProps 声明的不足之处在于
// 它没有可以给 props 提供默认值的方式。此时需要使用 withDefaults 编译器宏
// 当配置了默认值时，一般同时需要将该 prop 置为可选，避免 Vue 警告
withDefaults(defineProps<{ loading?: boolean; bookNames?: string[] }>(), {
  loading: false,
  // 与选项式 API 一致，非原始类型的默认值需要用方法返回
  bookNames: () => []
})
```

```typescript
const props = defineProps<{ loading?: boolean }>()

const loadingLabel = computed(() => props.loading ? '加载中...' : '加载完毕')
```
````

<div v-click="5">

这些定义好的 props 可以直接在模板 template 中使用，Vue 已经做好了解析，但是如果想要在组合式 API 的别处使用，则需要接受`withDefaults`或者`defineProps`返回的值

</div>

<!-- 另外，Vue3 中，父组件传入的 props 严禁子组件修改，即使是对象的深层属性或者数组增减也一样，因此对于这种数据，应该显式使用`defineModel`声明为双向绑定的值，`defineModel`稍后讨论 -->