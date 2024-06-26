---
transition: slide-up
---

# track / trigger

`track`方法收集了依赖，`trigger`方法触发了更新方法

```javascript
let activeEffect

function track(target, key) {
  if (activeEffect) {
    // 副作用集合映射 WeakMap<target, Map<key, Set<effect>>>
    const effects = getSubscribersForProperty(target, key)
    effects.add(activeEffect)
  }
}

function trigger(target, key) {
  const effects = getSubscribersForProperty(target, key)
  effects.forEach((effect) => effect())
}
```

这里的 activeEffect 是一个全局的值，在尝试触发更新时会赋值为当前的副作用方法

<!--
描述代码

这里的 activeEffect 是一个全局的值，在尝试触发更新时会赋值为当前的副作用方法，这个稍后再说。`getSubscribersForProperty`方法返回了一个存储在全局的`WeakMap<target, Map<key, Set<effect>>>`副作用集合映射
-->
