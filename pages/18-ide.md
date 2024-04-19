### IDE

其实关于 IDE 的问题，不该写到这里，但是实际开发中还是会遇到很多莫名其妙地报红问题，所以总结到这里，以 VS Code 为例

<v-clicks depth="2">

1. 如果项目使用了 Vue3，那么应该安装`Vue Language Features (Volar)`插件 并在工作区暂时禁用`Vetur`
2. 切换到 Vue 文件，在 VS Code 右下角的状态栏中，正确选择 TypeScript 版本为当前工作区的版本，而不是 VS Code 内置的版本
![](https://pics.mosuzi.com/blog/volar-ts-version.png!origin)
3. 如果确认自己的代码无误，但 VS Code 仍然在报错，则应该考虑以下方案：
   - 如果报错在 TS 文件中，在 VS Code 中执行`TypeScript: Reload Project`命令
   - 如果报错在 Vue 文件中，在 VS Code 中执行`Volar: Reload Project`命令
   - 如果上述操作还没有解决问题，则重启当前 VS Code 窗口

</v-clicks>