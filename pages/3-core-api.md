---
title: Vue3 响应式的两大核心 API
titleRow: true
cols: "grid-cols-[1fr_1fr]"
transition: slide-up
---

```javascript
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    },
  });
}
```

reactive() 使用了`Proxy`

::right::

```javascript
function ref(value) {
  const refObject = {
    get value() {
      track(refObject, "value");
      return value;
    },
    set value(newValue) {
      value = newValue;
      trigger(refObject, "value");
      return true;
    },
  };
  return refObject;
}
```

ref() 没有直接使用 Proxy，而是通过 value 包裹了一层传入的对象，类似 Proxy，但是无法像操作 Proxy 那样无感操作包裹的对象

<!--

描述两段代码

可以看出 reactive 使用了 Proxy，而 ref 并没有直接使用 Proxy，而是通过 value 包裹了一层传入的对象，类似 Proxy，但是无法像操作 Proxy 那样无感操作包裹的对象

-->