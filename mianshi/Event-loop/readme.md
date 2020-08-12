1. settimeout
2. promise
3. 请求
4. 绑定事件 aaevent
5. 页面



- 浏览器的内部有很多线程管理这些东西
  1. 定时器触发线程
  2. http
  3. GUI线程 

IntersectionObserver 图片懒加载 
什么是event-loop
  浏览器协调用户交互, 渲染，网络等任务,

```

宏任务 任务
settimeout,整体的一段scricp



由宿主环境引起的任务


微任务
promise.then  MuatationObserver   [Process.nextTick (node)]

由js本身引起的任务






## 流程
//只要宏任务队列 不为空 3执行完了进行第一步：
1. 从宏任务队列里面去除**一个**执行
2. 从微任务队列里面取出**所有的**执行如果在这执行过程中，又产生了微任务，
   再次重复第2步
3. 有可能进入浏览器的更新渲染阶段
   1. reqAnimationObserver  回调
   2. 执行  IntersectionObserver 回调
   3. 重新绘制渲染  








