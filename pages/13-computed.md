#### computed

组合式 API 的`computed`是一个方法，需要从 vue 中引入，内部接收一个类似选项式 API 的方法或者对象，如下：

```javascript
import { ref, computed } from 'vue'

const msg = ref('hello')
const loadingLabel = computed(() => msg === 'hello' ? '加载中...' : '加载完毕')
const computedMsg = computed({
  get() {
    return msg.value
  },
  set(val) {
    msg.value = val
  }
})
```