# track / trigger

`track`方法收集了依赖，`trigger`方法触发了更新方法

```javascript
let activeEffect

function track(target, key) {
  if (activeEffect) {
    const effects = getSubscribersForProperty(target, key) // 副作用集合映射
    effects.add(activeEffect)
  }
}

function trigger(target, key) {
  const effects = getSubscribersForProperty(target, key)
  effects.forEach((effect) => effect())
}
```

这里的 activeEffect 是一个全局的值，在尝试触发更新时会赋值为当前的副作用方法
