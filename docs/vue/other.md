# 更多

1. ### Vue 组件 data 为什么必须是函数 ?
>因为组件是可以复用的,JS 里对象是引用关系,如果组件 data 是一个对象,那么子组件中的 data 属性值会互相污染,产生副作用。
所以一个组件的 data 选项必须是一个函数,因此每个实例可以维护一份被返回对象的独立的拷贝。new Vue 的实例是不会被复用的,因此不存在以上问题。

***

2. ### v-router 的生命钩子
>beforeEach  
  参数有  
  to(Route路由对象)  
  from(Route路由对象)  
  next(function函数) 一定要调用才能进行下一步  
>afterEach  
>beforeRouterLeave

***

3. ### template
>template 不能使用 v-show 可以使用v-if v-for