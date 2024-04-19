#### model

不像 Vue2，`v-model`通常只有一个绑定的值，Vue3 支持通过名字指定多个`v-model`，在不指定名字时，model 的默认名字是`modelValue`

```javascript
// 声明 "modelValue" prop，由父组件通过 v-model 使用
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String })

// 在被修改时，触发 "update:modelValue" 事件
model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })
```