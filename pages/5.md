假设有这样一种情况：

```javascript
const obj1 = reactive({k1: 'k1', k2: 'k2'})
const obj2 = {foo: null}
const update = function() {
  obj2.foo = obj1.k1 + obj1.k2
}
```

预期当 obj1 的 k1 或者 k2 发生变化时，`update`方法被自动调用，于是 obj2.foo 更新

<v-click>

这需要一个`whenDepsChange`方法：
</v-click>

<v-click>

```javascript
function whenDepsChange(update) {
  const effect = () => {    
    activeEffect = effect
    update()
    activeEffect = null
  }
  effect()
}
```

</v-click>