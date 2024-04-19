# watch 和 watchEffect

<div v-click="2">

在`<script setup>`中同步创建的侦听器会自动绑定到宿主组件实例上，实例卸载时侦听器会自动停止。但是如果异步创建了侦听器，则必须通过返回值获取到其停止方法，并合适的时机手动停止它以防止内存泄漏

</div>

````md magic-move
```javascript
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watch(
  () => route.query.id,
  (n, o) => {
    // some code
  },
  {
    flush: 'pre',
    once: false,
    deep: false,
    immediate: true
  }
)
```

```javascript
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const searchWord = ref('')

const queryData = function(id, word) {
  // some code
}
watchEffect(
  function () {
    queryData(route.query.id, searchWord.value)
  },
  {
    flush: 'post' // 'pre' | 'sync'
  }
)
```

```javascript
import { watchEffect } from 'vue'

setTimeout(() => {
  const unwatch = watchEffect(() => {})

  // ...当该侦听器不再需要时
  unwatch()
}, 100)
```
````

<!-- 组合式 API 中的`watch`很像原本的`$watch`，但是有以下两个主要的区别：

1. watch 的第一个参数，不再支持键路径，它应该是一个响应式对象、返回一个值的函数、ref或者这三种类型的值的数组
2. watch 的选项在原本的`immediate`和`deep`之外，还增加了以下选项：
   - `flush`：调整回调函数的刷新机制，这个稍后讨论
   - `once`：只执行一次回调函数
   - `onTrack`/`onTrigger`：调试侦听器的依赖 

Vue3 还提供了一个`watchEffect`方法用于自动追踪所有依赖，并在依赖改变时触发副作用函数，`watchEffet`接收两个参数，第一个即是副作用函数，第二个是 watch 的选项，不过不包括`once`、`immediate`、`deep`。在使用时，`watch`，`watchEffect`有三个区别：

1. watch 更明确由哪个状态触发的侦听器，而 watchEffect 自动追踪依赖变化触发侦听器
2. watch 可以访问侦听状态变化的前后值，watchEffect 则不可以
3. watch 是懒执行副作用，而 watchEffect 会立刻执行副作用函数 -->