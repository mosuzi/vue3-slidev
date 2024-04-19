### data 和 methods

如果不预先定义数据类型，则 ref 会推断内部数据类型，这在内部数据属性不完全的时候会有类型校验问题，假设有一个对象类型如下：

<div v-click.hide="2">

````md magic-move
```typescript
type DemoObj = {
  name: string,
  description?: string
}
```

```typescript
import { ref } from 'vue'
type DemoObj = {
  name: string,
  description?: string
}

const demo = ref({ name: 'demo' })
```
````

</div>

<div v-click.hide="3">
<div v-click="2">

```ts twoslash
import { ref } from 'vue'
type DemoObj = {
  name: string,
  description?: string
}

const demo = ref({ name: 'demo' })
demo.value.description = '22'
```
</div>
</div>

<div v-click="3">

```typescript
const demo = ref<DemoObj>({ name: 'demo' })
```

或者使用类型断言

```typescript
const demo = ref({ name: 'demo' } as DemoObj)
```

类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法
</div>