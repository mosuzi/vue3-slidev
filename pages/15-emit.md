#### emit

为了在声明`emits`选项时获得完整的类型推导支持，可以使用`defineEmits`API，其使用方法如下：

```typescript
// 最简方法
const emit = defineEmits(['change', 'delete'])

const emit = defineEmits<{
  (e: 'change', id: number): void // 普通的函数类型声明
  (e: 'update', value: string): void
}>()

// 3.3+：相比上一种语法，另一种更简洁的语法
const emit = defineEmits<{
  change: [id: number] // 具名元组语法，中括号内是参数列表
  update: [value: string]
}>()

// 使用 emit
emit('change', id) // 此处 IDE 会根据类型校验参数类型及个数
```