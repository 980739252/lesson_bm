0.触发下拉
  加上  ptr-start 的类名
1. 下拉过程中
 
 pan.distance >40px
 加上ptr-refresh的类名

 2. panEnd
     如果上一步成立 即pan.distance>40px
     加上ptr-loading d的类名
     代表【正在加载中。。。这一动画】loading中

     由外界loadingfunction告知 什么时候结束

3. 加载完毕 
reset 清理工作