---
title: 起步
titleRow: true
cols: 1-1
---

Vue2

```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({el: '#app', render: (h) => h(App)})
```

::right::

Vue3

```javascript {none|*}
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

<!-- Vue3 的组合式 API 使用函数而不是声明选项的方式书写 Vue 组件，这也反应在了创建 Vue 实例上，工具方法需要引入，而不是直接挂载在 Vue 类上，这样做也有利于打包时的 TreeShaking 精确判断不必要的代码片段并将之移除 -->