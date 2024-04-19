---
cols: "grid-cols-[1fr_1fr]"
---

<style>
  .slidev-vclick-hidden {
      display: none;
  }
</style>

### 执行过程

````md magic-move
```javascript {*|1,8|7|4}
function whenDepsChange(update) {
  const effect = () => {
    activeEffect = effect;
    update();
    activeEffect = null;
  };
  effect();
}
```

```js {*|4}
const obj1 = reactive({ k1: "k1", k2: "k2" });
const obj2 = { foo: null };
const update = function () {
  obj2.foo = obj1.k1 + obj1.k2;
};
```

```js {*|4,7|5}
// 触发 obj1.k1 和 obj1.k2 的 getter
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

```js {*|5|*}
// 触发 obj1.k1 和 obj1.k2 的 track
function track(target, key) {
  if (activeEffect) {
    const effects = getSubscribersForProperty(target, key);
    effects.add(activeEffect);
  }
}
```

```js {*}
obj1.k1 = "new k1";
```

```js {1|8,12|10}
// 触发 obj1.k1 的 setter
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

```js {*|4}
// 触发 obj1.k1 的 trigger
function trigger(target, key) {
  const effects = getSubscribersForProperty(target, key);
  effects.forEach((effect) => effect());
}
```

```js {*|2-6|4}
function whenDepsChange(update) {
  const effect = () => {
    activeEffect = effect;
    update();
    activeEffect = null;
  };
  effect();
}
```
````

<div v-click.hide="[12, 21]">
<div v-click="11">
<div v-after.hide="12">

此时 obj1.k1 和 obj2.k2 的`track`方法均被触发，将当前的`effect`方法作为副作用方法记录在各自的副作用集合中，这就算完成了依赖收集

</div>
</div>
<div v-click="21">

此时 obj2.foo 被自动改变，完成了一次“响应式”

[Vue3 响应式 demo](https://codepen.io/mosuzi_/pen/MWRqjGj)

</div>
</div>

::right::

![Vue3 响应式流程图](https://pics.mosuzi.com/blog/vue3-responsive.png!origin)
