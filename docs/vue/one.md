# 双向绑定

1. ### Vue是如何实现双向绑定的

>vue是通过**object.defineProperty()**里面的setter，getter**观察者模式**来实现的，在完全搞清楚VUE的响应式原理之前，我们先学习一下什么是object.defineProperty()什么是观察者模式

- ### 核心实现类
>Observer : 它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新
>>Dep : 用于收集当前响应式对象的依赖关系,每个响应式对象包括子对象都拥有一个 Dep 实例（里面 subs 是 Watcher 实例数组）,当数据有变更时,会通过 dep.notify()通知各个 watcher。
>>>Watcher : 观察者对象 , 实例分为渲染 watcher (render watcher),计算属性 watcher (computed watcher),侦听器 watcher（user watcher）三种

- ### 总结

>vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调

***

2. ### [object.defineProperty()：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。他接受3个参数：obj-要定义的属性；prop-要定义或修改的属性的名称或 Symbol ；descriptor-要定义或修改的属性描述符,里面含有set,get方法;
举一个简单的🌰
```js
    var obj1 = {};
    var num = 12;
    Object.defineProperty(obj1,'val',{
        get(){
            console.log('监听正在获取val')
            return num
        },
        set(isval){
            console.log('监听正在设置val')
            num = isval
        },
        enumerable : true,//枚举
        configurable : true//是否可以删除(再次修改)
        writable:false //是否重写
    })
    console.log(obj1.val)//12
```
***

3. ### object.defindProperty()的优缺点

- 优点
  兼容性好,支持
- 缺点
  无法检测到对象属性的新增或删除；
  不能监听数组的变化

***

4. ### [Proxy](https://es6.ruanyifeng.com/#docs/proxy)与Object.defineProperty的优劣对比

> Proxy:vue3中利用Proxy实现数据读取和设置时进行拦截，在拦截trap中实现数据的依赖收集以及触发视图更新操作

- Proxy 可以直接监听对象而非属性；
- Proxy 可以直接监听数组的变化；
- Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的
- Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

***

5. ### 观察者模式

- 观察者模式：注册环节跟发布环节

***

6. ### 手写一个简单的双向绑定

```html
  <input id="txt" type="text">
  <span id="isMark"></span>
```

```js
 var txt = document.getElementById("txt");
 var mark = document.getElementById("mark");
 var objMore = {};
  Object.defineProperty(objMore,'val',{
    set:function(newval){
      txt.value = newval;
      mark.innerText = newval;
    }
  });
  txt.addEventListener('keyup',function(event){
    objMore.val = event.target.value;
  })
```
> 更多请点击查看[原作者](https://zhuanlan.zhihu.com/p/88648401);




- 什么是nextTick 他实现的原理是什么

- vm.$set()实现原理是什么?

- vue组件data为什么必须是函数

- 谈谈 Vue 事件机制 手写$on,$off,$emit,$once

- 说说 Vue 的渲染过程

- watch、computed什么区别

- 介绍一下Vue的生命周期

- v-model 与 .value的区别

- vue插件开发（主要考察vue.use以后发生了什么）
