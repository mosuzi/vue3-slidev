---
# try also 'default' to start simple
theme: vuetiful-unocss
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: 从 Vue2 到 Vue3
titleTemplate: '%s'
info: false
lineNumbers: true
author: Mosuzi
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
altCover: true
---

# 从 Vue2 到 Vue3

<!-- Presentation slides for developers -->
Mosuzi

<!-- <div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div> -->

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/mosuzi/vue3-slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!-- 近来终于有了实战 Vue3 的机会，我当然不能放过。恰好 UED 提出使用新的依赖于 Vue3 的组件库，一拍即合，开搞。

一开始，确实碰到了许多深坑，有时莫名其妙地报红，有时又莫名其妙地变好了，有时纠结在如何组织代码架构，有时又发现想了很多到头来既不简洁也不完备。原来我一心憧憬的 TypeScript 也就那样，它并不如期待的像 Java 那样可以很好的发挥强类型的优势，而且有时不能像 Java 那样，只考虑架构的易用，还需要考虑性能问题

比如，Java 传递数据时，可以随意重新新建实例承接数据，而运行在性能堪忧的浏览器端的 JavaScript，则没办法这么潇洒的处事，具体到这次的项目中，由于涉及 AI，后端的语言无疑首选 Python，Python 的变量风格是下划线，如`user_data`，而我当时已经写了多半的 TypeScript 代码，内部组件之间传递的数据，均仍然遵从原有的驼峰命名法，如`userData`，如果现在全部改变风格，时间和可能出现的报错都是棘手的问题，而如果全部使用一个工具方法，批量地将下划线格式的变量转换成驼峰命名，则会有两个问题，其一无意义的数据转换拖慢了性能，其二需要另外定义一套类型以适配转换后的对象。最终采取折中方案，内部数据仍然使用驼峰命名，与接口交互的数据对象则使用下划线命名法直接承接。下次遇到 Python 写的后端，八成要预先想好代码格式了，省得这样纠结一下

以上是踩的数个坑中的简单代表，实际还有很多让我纠结的点，这是第一个我写的正式的 Vue3 项目，总想尽可能设计一个比较完善的初始架构，这样可以大幅放缓第一次重构的到来

话不多说，本文不在于纠结上述的坑，而是探讨从 Vue2 到 Vue3 需要经历的原理和代码写法的转变 -->

---
src: ./pages/2-responsive.md
---
---
src: ./pages/3-core-api.md
---
---
src: ./pages/4-track-trigger.md
---
---
src: ./pages/5-case.md
---
---
src: ./pages/6-run.md
---
---
src: ./pages/7-reactive.md
---
---
src: ./pages/8-startup.md
---
---
src: ./pages/9-composition.md
---
---
src: ./pages/10-props.md
---
---
src: ./pages/11-data-1.md
---
---
src: ./pages/12-data-2.md
---
---
src: ./pages/13-computed.md
---
---
src: ./pages/14-watch.md
---
---
src: ./pages/15-emit.md
---
---
src: ./pages/16-model.md
---
---
src: ./pages/17-miscellaneous.md
---
---
src: ./pages/18-ide.md
---
---
src: ./pages/thanks.md
---
