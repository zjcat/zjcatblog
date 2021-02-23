# vue是如何实现双向绑定
vue是通过**object.defineProperty()**里面的setter，getter**观察者模式**来实现的，在完全搞清楚VUE的响应式原理之前，我们先学习一下什么是object.defineProperty()什么是观察者模式
- [object.defineProperty()：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。他接受3个参数：obj-要定义的属性；prop-要定义或修改的属性的名称或 Symbol ；descriptor-要定义或修改的属性描述符。；里面含有set,get方法
举一个简单的🌰
```js
    const obj1 = {};
    object.defindProperty(obj1,)
```
# 什么是object.defindProperty()的优缺点

# 手写一个简单的双向绑定


- 什么是keep-alive keep-alive的实现原理

- vue有几种组件通讯 介绍一下 provide/inject

- vue-router 有几种路由模式 为什么history需要后端配合

- 什么是nextTick 他实现的原理是什么

- vm.$set()实现原理是什么?

- vue组件data为什么必须是函数

- 谈谈 Vue 事件机制 手写$on,$off,$emit,$once

- 说说 Vue 的渲染过程

- watch、computed什么区别

- 介绍一下Vue的生命周期

- v-model 与 .value的区别

- vue插件开发（主要考察vue.use以后发生了什么）
