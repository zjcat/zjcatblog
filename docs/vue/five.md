# nextTick

1. ### 什么是nextTick

>Vue.nextTick用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象。

***

2. ### 实现的原理是什么

>vue 用异步队列的方式来控制 DOM 更新和 nextTick 回调先后执行
microtask 因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕
考虑兼容问题,vue 做了 microtask 向 macrotask 的降级方案